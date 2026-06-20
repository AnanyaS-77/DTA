const values = [
  {
    title: "Discipline First",
    text: "Students learn focus, respect, punctuality, and the steady habits that make martial arts meaningful beyond class.",
  },
  {
    title: "Technique With Purpose",
    text: "Every drill supports balance, coordination, speed, strength, flexibility, and confident self-defense movement.",
  },
  {
    title: "Progress For Every Age",
    text: "Age-wise batches help kids, teens, adults, working professionals, mothers, and seniors train at the right pace.",
  },
];

const milestones = [
  "Founded under the guidance of Grand Master H.L. Muthappa Huderi, 7th Dan Black Belt.",
  "Built on traditional Korean martial arts principles and modern coaching standards.",
  "Students have trained for belt certification, championships, fitness, confidence, and personal growth.",
];

function About() {
  return (
    <>
      <section className="about-hero" aria-labelledby="about-title">
        <div className="about-hero-copy">
          <p className="section-kicker">About Deccan Taekwondo Academy</p>
          <h1 id="about-title">Building confident martial artists since 2008.</h1>
          <p>
            Deccan Taekwondo Academy is a Bengaluru-based Korean martial arts
            academy helping students grow through disciplined training,
            international standards, and a student-first coaching culture.
          </p>
        </div>
        <div className="about-hero-image placeholder-image">
          <span>Academy Image</span>
        </div>
      </section>

      <section className="about-story-section" aria-labelledby="about-story-title">
        <div className="section-heading compact">
          <h2 id="about-story-title">Our Story</h2>
          <p>
            From beginners to competitors, our work has always stayed close to
            the foundations: discipline, precision, respect, and courage.
          </p>
        </div>

        <div className="story-layout">
          <div className="story-panel">
            <h3>Training with structure and heart.</h3>
            <p>
              The academy combines authentic Korean martial arts training with
              fitness, self-defense, confidence building, poomsae, sparring
              drills, and competition preparation.
            </p>
          </div>
          <div className="milestone-list">
            {milestones.map((milestone) => (
              <p key={milestone}>{milestone}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values-section" aria-labelledby="values-title">
        <div className="section-heading compact">
          <h2 id="values-title">What Guides Us</h2>
          <p>
            A clear training environment where students know what to practice,
            why it matters, and how to improve.
          </p>
        </div>
        <div className="about-values-grid">
          {values.map((value) => (
            <article className="about-value-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-coach-band" aria-labelledby="about-coach-title">
        <div>
          <p className="section-kicker">Leadership</p>
          <h2 id="about-coach-title">Guided by experienced coaches.</h2>
          <p>
            Our coaches bring black belt expertise, championship preparation,
            personal mentoring, and disciplined class structure to every batch.
          </p>
        </div>
        <div className="coach-snapshot">
          <div className="coach-photo placeholder-image">
            <span>Coach Image</span>
          </div>
          <div>
            <h3>Grand Master H.L. Muthappa Huderi</h3>
            <p>7th Dan Black Belt</p>
          </div>
        </div>
      </section>

      <section className="cta-section about-cta">
        <h2>
          Start Your <span>Martial Arts Journey</span> Today!
        </h2>
        <p>
          Whether your goal is fitness, self-defense, belt certification, or
          competition, we will help you begin with structure.
        </p>
        <div className="cta-actions">
          <a className="white-button" href="/contact#contact-form">Book Free Trial Class</a>
          <a className="dark-button" href="/contact">Call Us Now</a>
        </div>
      </section>
    </>
  );
}

export default About;
