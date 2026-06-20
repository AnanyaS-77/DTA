function Journey() {
  return (
    <section className="about-journey" aria-labelledby="about-journey-title">
      <div className="about-journey-content">
        <h2 id="about-journey-title">
          Start Your <span>Martial Arts Journey</span> Today!
        </h2>
        <p>
          Whether you want to learn self defence, lose weight, build confidence,
          or compete professionally, your journey starts here.
        </p>
        <div className="about-journey-actions">
          <a className="about-journey-primary" href="/contact#contact-form">
            Book Free Trial Class <span aria-hidden="true">-&gt;</span>
          </a>
          <a className="about-journey-secondary" href="/contact">
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Journey;
