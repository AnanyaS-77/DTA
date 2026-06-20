import Logo from "./Logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
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
        <a className="batch-button" href="/#batches">
          Batch Timings
          <span aria-hidden="true">v</span>
        </a>
        <a className="talk-button" href="/contact#contact-form">
          Talk to Us
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
