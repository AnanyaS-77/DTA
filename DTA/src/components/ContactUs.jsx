// Add the uploaded contact photo to src/assets, import it here, then assign it below.
const CONTACT_IMAGE_URL = "";

const navItems = [
  "About",
  "Why Us",
  "Legacy",
  "Our Programs",
  "What We Teach",
];

const reachCards = [
  {
    icon: "phone",
    title: "Call us",
    note: "Mon - Sat from 8am to 9pm",
    detail: "+91 91084 14481",
  },
  {
    icon: "mail",
    title: "Mail us",
    note: "We are here to help",
    detail: "you@company.com",
  },
  {
    icon: "pin",
    title: "Visit us",
    note: "Visit Our classes",
    detail:
      "Elegance Garden Appartment, 15, 1st Cross Rd, Srinivas Colony, Sudhama Nagar, Bengaluru, Karnataka 560027",
  },
];

function Logo({ light = false }) {
  return (
    <a className={`brand ${light ? "brand-light" : ""}`} href="#" aria-label="Deccan Taekwondo Academy home">
      <span className="brand-mark" aria-hidden="true">DTA</span>
      <span className="brand-text">
        <strong>Deccan Taekwondo</strong>
        <span>Academy</span>
      </span>
    </a>
  );
}

function Icon({ name }) {
  const icons = {
    phone: "tel",
    mail: "@",
    pin: "loc",
  };

  return (
    <span className={`contact-icon contact-icon-${name}`} aria-hidden="true">
      {icons[name]}
    </span>
  );
}

function ContactUs() {
  return (
    <main className="contact-page">
      <div className="page-shell">
        <header className="site-header">
          <Logo />

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a href="#" key={item}>{item}</a>
            ))}
          </nav>

          <div className="header-actions">
            <button className="batch-button" type="button">
              Batch Timings
              <span aria-hidden="true">v</span>
            </button>
            <a className="talk-button" href="#contact-form">
              Talk to Us
              <span aria-hidden="true">-&gt;</span>
            </a>
          </div>
        </header>

        <section className="contact-hero" aria-labelledby="contact-heading">
          <div className="contact-copy">
            <h1 id="contact-heading">Get In Touch With Us</h1>
            <p>
              Have questions about classes, timings, or admissions? Our team is
              here to help you begin your martial arts journey.
            </p>

            <form className="contact-form" id="contact-form">
              <label>
                <span className="field-label">Full Name<span>*</span></span>
                <input type="text" placeholder="Type your answer here" />
              </label>

              <label>
                <span className="field-label">Email Address<span>*</span></span>
                <input type="email" placeholder="Type your answer here" />
              </label>

              <label>
                <span className="field-label">Mobile Number<span>*</span></span>
                <input type="tel" placeholder="Type your answer here" />
              </label>

              <label>
                <span className="field-label">Select Topic<span>*</span></span>
                <select defaultValue="">
                  <option value="" disabled>Select</option>
                  <option value="classes">Classes</option>
                  <option value="admissions">Admissions</option>
                  <option value="batch-timings">Batch Timings</option>
                  <option value="trial">Trial Class</option>
                </select>
              </label>

              <label>
                <span className="field-label">Message</span>
                <textarea placeholder="Type your answer here" />
              </label>

              <button type="submit">Submit</button>
            </form>
          </div>

          <div
            className={`contact-photo ${CONTACT_IMAGE_URL ? "has-photo" : ""}`}
            style={CONTACT_IMAGE_URL ? { backgroundImage: `url(${CONTACT_IMAGE_URL})` } : undefined}
            aria-label="Taekwondo athlete performing a high kick"
            role="img"
          >
            {!CONTACT_IMAGE_URL && (
              <div className="photo-placeholder">
                <span>Contact page image</span>
              </div>
            )}
          </div>
        </section>

        <section className="reach-section" aria-labelledby="reach-heading">
          <div className="section-heading">
            <h2 id="reach-heading">How to Reach Us</h2>
            <p>
              For over 18 years, Deccan Taekwondo Academy has helped children,
              teenagers, adults, and families transform their lives through
              martial arts.
            </p>
          </div>

          <div className="reach-grid">
            {reachCards.map((card) => (
              <article className="reach-card" key={card.title}>
                <Icon name={card.icon} />
                <h3>{card.title}</h3>
                <p>{card.note}</p>
                <strong>{card.detail}</strong>
              </article>
            ))}
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-top">
            <Logo light />
            <nav className="footer-nav" aria-label="Footer navigation">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
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
      </div>
    </main>
  );
}

export default ContactUs;
