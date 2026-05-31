import Logo from "./Logo";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Legacy", href: "/#legacy" },
  { label: "Our Programs", href: "/#programs" },
  { label: "What We Teach", href: "/#teach" },
];

function Navbar() {
  return (
    <header className="site-header">
      <Logo />

      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.label}>{item.label}</a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="batch-button" type="button">
          Batch Timings
          <span aria-hidden="true">v</span>
        </button>
        <a className="talk-button" href="/contact#contact-form">
          Talk to Us
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
