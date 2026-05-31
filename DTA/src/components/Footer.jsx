import Logo from "./Logo";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Logo light />
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/contact">Contact</a>
          <a href="#">Privacy</a>
          <a href="#">T&amp;C</a>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>&copy;2026 All rights reserved</p>
        <div className="social-links" aria-label="Social links">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">ig</a>
          <a href="#" aria-label="X">x</a>
        </div>
        <p>Crafted by Koiostudios</p>
      </div>
    </footer>
  );
}

export default Footer;
