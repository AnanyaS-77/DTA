function Logo({ light = false }) {
  return (
    <a
      className={`brand ${light ? "brand-light" : ""}`}
      href="/"
      aria-label="Deccan Taekwondo Academy home"
    >
      <span className="brand-image brand-image-one" aria-hidden="true" />
      <span className="brand-image-two-wrap">
        <img
          className="brand-image brand-image-two"
          src="/Image2.png"
          alt=""
          aria-hidden="true"
        />
      </span>
    </a>
  );
}

export default Logo;
