const programs = [
  "Kids foundation",
  "Teen discipline",
  "Adult fitness",
  "Competition training",
];

const reasons = [
  {
    title: "Structured batches",
    text: "Age-wise training groups help every student move at the right pace.",
  },
  {
    title: "Competition mindset",
    text: "Classes blend technical skill, confidence, discipline, and real mat practice.",
  },
  {
    title: "Family-friendly academy",
    text: "A welcoming space for beginners, returning athletes, and serious learners.",
  },
];

function Home() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-heading">
        <div className="home-copy">
          <p className="eyebrow">Deccan Taekwondo Academy</p>
          <h1 id="home-heading">Train stronger. Move sharper. Grow with discipline.</h1>
          <p>
            A focused taekwondo academy for children, teens, and adults in
            Bengaluru, built around technique, confidence, and consistent
            progress.
          </p>
          <div className="home-actions">
            <a className="talk-button" href="/contact">Start a Trial</a>
            <a className="ghost-button" href="#programs">View Programs</a>
          </div>
        </div>

        <div className="home-visual" aria-hidden="true">
          <div className="kick-card">
            <span>18+</span>
            <p>years of martial arts training</p>
          </div>
        </div>
      </section>

      <section className="home-band" id="about" aria-labelledby="about-heading">
        <div>
          <p className="eyebrow">About</p>
          <h2 id="about-heading">Built for steady, serious progress.</h2>
        </div>
        <p>
          Training starts with the basics: stance, balance, respect, and repeatable
          technique. Every class is shaped to build skill without rushing the
          student past the foundations.
        </p>
      </section>

      <section className="legacy-section" id="legacy" aria-labelledby="legacy-heading">
        <div className="legacy-panel">
          <p className="eyebrow">Legacy</p>
          <h2 id="legacy-heading">18 years of focused training culture.</h2>
          <p>
            DTA has helped students grow through consistent coaching, practical
            discipline, and a training floor where effort matters every day.
          </p>
        </div>
        <div className="teach-panel" id="teach">
          <p className="eyebrow">What We Teach</p>
          <h2>Technique, control, confidence.</h2>
          <p>
            Students practice kicks, blocks, forms, sparring movement, strength,
            flexibility, and the mental steadiness martial arts asks for.
          </p>
        </div>
      </section>

      <section className="program-section" id="programs" aria-labelledby="program-heading">
        <div className="section-heading">
          <h2 id="program-heading">Our Programs</h2>
          <p>
            Clear paths for new students, regular training, and advanced
            athletes preparing for grading or competition.
          </p>
        </div>

        <div className="program-grid">
          {programs.map((program, index) => (
            <article className="program-card" key={program}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{program}</h3>
              <p>Technique, stamina, flexibility, and confidence in every class.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="why-section" id="why-us" aria-labelledby="why-heading">
        <div className="section-heading">
          <h2 id="why-heading">Why Us</h2>
          <p>Simple, practical reasons students and families keep showing up.</p>
        </div>

        <div className="reason-grid">
          {reasons.map((reason) => (
            <article className="reason-card" key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
