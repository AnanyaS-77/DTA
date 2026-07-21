import os
import sys
import time
import argparse
import concurrent.futures
from PIL import Image, ImageOps
from pillow_heif import register_heif_opener

register_heif_opener()

# Reconfigure stdout/stderr to UTF-8 so checkmark/cross symbols don't crash on
# Windows' default cp1252 console encoding. Must stay at module level (not inside
# main()) so every worker process spawned by ProcessPoolExecutor picks it up too.
for _stream in (sys.stdout, sys.stderr):
    if _stream and getattr(_stream, "encoding", "").lower() != "utf-8":
        try:
            _stream.reconfigure(encoding="utf-8")
        except Exception:
            pass

SUPPORTED_EXT = (".png", ".jpg", ".jpeg", ".heic", ".heif")
WEBP_EXT = ".webp"


def find_images(folder, include_webp=False):
    exts = SUPPORTED_EXT + (WEBP_EXT,) if include_webp else SUPPORTED_EXT
    return sorted(
        f for f in os.listdir(folder)
        if f.lower().endswith(exts)
    )


def convert_single_image(args):
    idx, filename, folder, settings = args
    src_path = os.path.join(folder, filename)

    if settings["sequential_names"]:
        new_name = f"Img{idx}.webp" if settings["short_names"] else f"Image {idx}.webp"
    else:
        new_name = os.path.splitext(filename)[0] + ".webp"

    dest_path = os.path.join(folder, new_name)
    in_place = os.path.abspath(dest_path) == os.path.abspath(src_path)
    work_path = dest_path + ".tmp" if in_place else dest_path

    if not os.path.exists(src_path):
        return (filename, False, "source missing")

    try:
        with Image.open(src_path) as img:
            img = ImageOps.exif_transpose(img)

            if img.mode == "P":
                img = img.convert("RGBA") if "transparency" in img.info else img.convert("RGB")
            elif img.mode not in ("RGB", "RGBA"):
                img = img.convert("RGBA") if "A" in img.mode else img.convert("RGB")

            save_kwargs = {"method": settings["method"]}
            if settings["quality"] is not None:
                save_kwargs["quality"] = settings["quality"]
            else:
                save_kwargs["lossless"] = True
                save_kwargs["exact"] = True

            if settings.get("max_height") and img.height > settings["max_height"]:
                new_width = int(img.width * (settings["max_height"] / img.height))
                img = img.resize((new_width, settings["max_height"]), Image.Resampling.LANCZOS)

            img.save(work_path, "WEBP", **save_kwargs)

        if in_place:
            for i in range(10):
                try:
                    os.replace(work_path, dest_path)
                    break
                except PermissionError:
                    if i == 9:
                        raise
                    time.sleep(1)
        elif settings["delete_original"]:
            for i in range(10):
                try:
                    os.remove(src_path)
                    break
                except PermissionError:
                    if i == 9:
                        raise
                    time.sleep(1)

        print(f"\u2713 ({idx}) {filename} -> {os.path.basename(dest_path)}", flush=True)
        return (filename, True, None)

    except Exception as e:
        if os.path.exists(work_path) and work_path != src_path:
            try:
                os.remove(work_path)
            except OSError:
                pass
        print(f"\u2717 ({idx}) {filename}: {e}", flush=True)
        return (filename, False, str(e))


def main():
    parser = argparse.ArgumentParser(description="Convert images in a folder to WEBP.")
    parser.add_argument("path", help="Folder to process.")
    parser.add_argument("--method", type=int, default=6, choices=range(0, 7))
    parser.add_argument("--sequential-names", action="store_true")
    parser.add_argument("--short-names", action="store_true",
                         help="Use 'ImgN.webp' instead of 'Image N.webp' when sequential naming is on.")
    parser.add_argument("--delete", action="store_true")
    parser.add_argument("--allow-larger", action="store_true")
    parser.add_argument("--quality", type=int, default=None)
    parser.add_argument("--max-height", type=int, default=None)
    parser.add_argument("--clean-webp-first", action="store_true",
                         help="Delete any existing .webp files in the folder before converting, "
                              "so re-runs never accumulate duplicates.")
    parser.add_argument("--include-webp", action="store_true",
                         help="Also treat existing .webp files as input (e.g. to resize/re-compress "
                              "already-converted sequential images). Off by default to prevent "
                              "accidental re-processing of prior output.")
    args = parser.parse_args()

    folder = args.path
    if not os.path.isdir(folder):
        print(f"Error: '{folder}' is not a folder.")
        sys.exit(1)

    if args.clean_webp_first:
        removed = 0
        for f in os.listdir(folder):
            if f.lower().endswith(".webp"):
                try:
                    os.remove(os.path.join(folder, f))
                    removed += 1
                except Exception as e:
                    print(f"Could not remove {f}: {e}")
        if removed:
            print(f"Removed {removed} pre-existing .webp file(s) before starting.", flush=True)

    files = find_images(folder, include_webp=args.include_webp)
    print(f"Found {len(files)} image(s) in {folder}", flush=True)
    if not files:
        print("Nothing to convert.")
        return

    settings = {
        "method": args.method,
        "sequential_names": args.sequential_names,
        "short_names": args.short_names,
        "delete_original": args.delete,
        "allow_larger": args.allow_larger,
        "quality": args.quality,
        "max_height": args.max_height,
    }

    tasks = [(idx, filename, folder, settings) for idx, filename in enumerate(files, start=1)]

    print("Starting conversion...", flush=True)
    with concurrent.futures.ProcessPoolExecutor() as executor:
        results = list(executor.map(convert_single_image, tasks))

    success_count = sum(1 for _, ok, _ in results if ok)
    print(f"\nDone! Successfully converted {success_count}/{len(files)} images.")


if __name__ == "__main__":
    main()
