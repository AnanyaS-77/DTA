function Logo({ light = false }) {
  return (
    <a
      className={`brand ${light ? "brand-light" : ""}`}
      href="/"
      aria-label="Deccan Taekwondo Academy home"
    >
      <span className="brand-mark" aria-hidden="true">DTA</span>
      <span className="brand-text">
        <strong>Deccan Taekwondo</strong>
        <span>Academy</span>
      </span>
    </a>
  );
}

export default Logo;
