import contactImage from "../assets/Contact/Image1.png";

const CONTACT_IMAGE_URL = contactImage;

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
    <>
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
    </>
  );
}

export default ContactUs;
