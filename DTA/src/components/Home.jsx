const stats = [
  {
    title: "Medal Winning Academy Since 2008",
    className: "medal-card",
    mark: "V",
  },
  {
    title: "10,000+ Happy Students",
    className: "student-card",
    mark: "10k",
  },
  {
    title: "Located in the heart of Shantinagar, Bangalore",
    className: "location-card",
    mark: "BLR",
  },
];

const authorities = ["World Taekwondo", "Kukkiwon", "DTA"];

const whyCards = [
  "18+ Years of Legacy",
  "10,000+ Students Trained",
  "International Coaching Standards",
  "Safe & Structured Classes",
  "Belt Certification Exams",
  "Championship Preparation",
  "Fitness + Martial Arts Combined",
  "Suitable For Ages 3+",
];

const coaches = [
  {
    name: "Grand Master H.L. Muthappa Huderi",
    rank: "7th Dan Black Belt",
    text: "With decades of experience in Korean martial arts, Grand Master H.L. Muthappa has trained thousands of students, national medalists, and competitive athletes.",
    tags: ["International Taekwondo Expert", "Award-Winning Coach", "Poomsae & Kyorugi Specialist"],
  },
  {
    name: "Head Coach Bhupendra",
    rank: "4th Dan Black Belt",
    text: "As the Branch Head Coach of Shantinagar, he ensures every student from kids to working professionals receives personal attention, structured training, and continuous growth.",
    tags: ["Disciplined Coaching Style", "Student First Approach", "Martial Artist", "Confidence Building"],
  },
];

const legacyItems = [
  ["Multiple Gold Medal Winners", "Driven by discipline and consistency."],
  ["State Champions", "Trained for state-level competitions."],
  ["National Participants", "Excellence across national tournaments."],
  ["Poomsae Champions", "Precision-focused traditional performance."],
  ["Kyorugi Medalists", "Strong fighters with competitive excellence."],
];

const agePrograms = [
  {
    title: "Kids Taekwondo Classes (Age 3+)",
    text: "Help your child build confidence, discipline, focus, respect, strength, flexibility. Perfect for parents looking for kids martial arts classes in Bangalore.",
  },
  {
    title: "Teen Martial Arts Training",
    text: "Build athletic performance, self-confidence, leadership, and competitive spirit. Ideal for school and college students.",
  },
  {
    title: "Adult Self Defence & Fitness",
    text: "Learn practical self defence while improving strength, stamina, mobility, weight loss, mental focus. Perfect for working professionals, mothers, and beginners.",
    highlight: true,
  },
  {
    title: "Senior Fitness & Movement Training",
    text: "Low-impact training designed for mobility, balance, flexibility, functional strength.",
  },
];

const trainingCards = [
  {
    title: "Taekwondo Training",
    text: "Master authentic Korean martial arts techniques with structured progression like basic techniques, kicks and strikes, sparring drills, discipline training.",
  },
  {
    title: "Self Defence Training",
    text: "Master authentic Korean martial arts techniques with structured progression like basic techniques, kicks and strikes, sparring drills, discipline training.",
  },
  {
    title: "Poomsae Training",
    text: "Master authentic Korean martial arts techniques with structured progression like basic techniques, kicks and strikes, sparring drills, discipline training.",
  },
];

const batches = [
  {
    title: "Adult Fitness Classes",
    text: "Includes, cardio, light weight gym, weight loss training and functional fitness",
    times: ["07:00 AM - 09:00 AM"],
  },
  {
    title: "Taekwondo Classes",
    text: "Morning batch for all ages available every day",
    times: ["06:00 AM - 07:00 AM"],
  },
  {
    title: "Evening Batch Classes",
    text: "Suitable for kids, teens, adults, and working professionals.",
    times: ["03:00 - 04:00 PM", "04:00 - 05:00 PM", "05:00 - 06:00 PM", "06:00 - 07:00 PM", "07:00 - 08:00 PM"],
  },
];

const testimonials = [
  "Master authentic Korean martial arts techniques with structured progression like basic techniques, kicks and strikes, sparring drills, discipline training",
  "Master authentic Korean martial arts techniques with structured progression like basic techniques, kicks and strikes, sparring drills, discipline training",
  "Master authentic Korean martial arts techniques with structured progression like basic techniques, kicks and strikes, sparring drills, discipline training",
  "Master authentic Korean martial arts techniques with structured progression like basic techniques, kicks and strikes, sparring drills, discipline training",
];

function Placeholder({ label, className = "" }) {
  return (
    <div className={`placeholder-image ${className}`}>
      <span>{label}</span>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero-section" aria-labelledby="home-heading">
        <div className="hero-background placeholder-image">
          <span>Hero Image Placeholder</span>
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 id="home-heading">
            Train Strong. Live Fearless. <span>Master Taekwondo.</span>
          </h1>
          <p>
            At Deccan Taekwondo Academy, we don&apos;t just teach martial arts:
            we build confidence, discipline, fitness, and champions.
          </p>
          <div className="hero-actions">
            <a className="white-button" href="/contact#contact-form">Book Free Trial Class</a>
            <a className="dark-button" href="/contact">Call Us Now</a>
          </div>
        </div>
      </section>

      <section className="intro-card-section" aria-labelledby="intro-title">
        <div className="intro-copy">
          <h2 id="intro-title">Bangalore&apos;s Home for Modern Martial Arts</h2>
          <p>
            From beginners to champions, we train kids, teens, adults, and
            professionals through expert Korean martial arts coaching and
            disciplined fitness programs.
          </p>
        </div>
        <div className="intro-stats">
          {stats.map((stat) => (
            <article className={`stat-card ${stat.className}`} key={stat.title}>
              <div className="stat-visual">{stat.mark}</div>
              <h3>{stat.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <div className="audience-strip">
        For Kids <span>.</span> Teens <span>.</span> Adults <span>.</span> Working Professionals <span>.</span> Mothers <span>.</span> Seniors
      </div>

      <section className="authority-section" aria-labelledby="authority-title">
        <div className="section-heading compact">
          <h2 id="authority-title">Proudly Affiliated with Taekwondo Authorities.</h2>
          <p>
            A commitment to authentic training, recognized standards, and
            excellence through official martial arts affiliations.
          </p>
        </div>
        <div className="authority-grid">
          {authorities.map((authority) => (
            <div className="authority-logo placeholder-image" key={authority}>
              <span>{authority}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="champions-section" aria-labelledby="champions-title">
        <div className="champions-copy">
          <h2 id="champions-title">Building Champions Since 2008</h2>
          <p>
            Deccan Taekwondo Academy has been shaping lives through the power of
            Korean martial arts for over 18 years.
          </p>
          <p>
            Founded under the expert guidance of Grand Master H.L. Muthappa
            Huderi, a 7th Dan Black Belt and internationally recognized martial
            arts expert, our academy has trained over 10,000 students across
            Bangalore.
          </p>
          <a className="text-link" href="/about">Read More</a>
        </div>
        <Placeholder label="Champions Image" className="champions-image" />
      </section>

      <section className="why-section" id="why-us" aria-labelledby="why-title">
        <div className="section-heading compact">
          <h2 id="why-title">Why Families Across Bangalore Choose Deccan Taekwondo Academy</h2>
          <p>
            From beginners to champions, we train kids, teens, adults, and
            professionals through expert Korean martial arts coaching and
            disciplined fitness programs.
          </p>
        </div>
        <div className="why-grid">
          {whyCards.map((card, index) => (
            <article className={index === 5 ? "why-card featured" : "why-card"} key={card}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{card}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="coaches-section" aria-labelledby="coaches-title">
        <div className="section-heading centered">
          <h2 id="coaches-title">Learn From Champions</h2>
          <p>
            From beginners to champions, we train kids, teens, adults, and
            professionals through expert Korean martial arts coaching and
            disciplined fitness programs.
          </p>
        </div>
        <div className="coach-grid">
          {coaches.map((coach) => (
            <article className="coach-card" key={coach.name}>
              <Placeholder label="Coach Image" className="coach-image" />
              <h3>{coach.name}</h3>
              <strong>({coach.rank})</strong>
              <p>{coach.text}</p>
              <div className="coach-tags">
                {coach.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="legacy-trophy-section" aria-labelledby="legacy-title">
        <div className="legacy-copy">
          <h2 id="legacy-title">Our Legacy of Champions</h2>
          <p>
            Under the guidance of Grand Master H.L. Muthappa Huderi, our
            students have proudly represented Bangalore across district, state,
            national, and championship platforms.
          </p>
          <div className="legacy-list">
            {legacyItems.map(([title, text]) => (
              <article key={title}>
                <span aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="trophy-panel">
          <h2>100+ Medals. Countless Success Stories.</h2>
          <Placeholder label="Trophy Image" className="trophy-image" />
        </div>
      </section>

      <section className="age-programs-section" id="programs" aria-labelledby="programs-title">
        <div className="section-heading compact">
          <h2 id="programs-title">Programs Designed For Every Age</h2>
          <p>
            Deccan Taekwondo Academy has been shaping lives through the power of
            Korean martial arts for over 18 years.
          </p>
        </div>
        <div className="age-program-list">
          {agePrograms.map((program) => (
            <article className="age-program" key={program.title}>
              <Placeholder label="Program" className="age-program-image" />
              <div>
                <h3 className={program.highlight ? "highlight-text" : ""}>{program.title}</h3>
                <p>{program.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="training-section" id="teach" aria-labelledby="training-title">
        <div className="section-heading compact wide">
          <h2 id="training-title">Complete Korean Martial Arts Training Under One Roof</h2>
          <p>
            Expert-led training in Taekwondo, self-defense, poomsae, kyorugi,
            fitness, and gymnastics tailored for kids, teens, adults, and
            working professionals.
          </p>
        </div>
        <div className="training-card-grid">
          {trainingCards.map((card) => (
            <article className="training-card" key={card.title}>
              <Placeholder label="Training Image" className="training-image" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
        <div className="slider-buttons" aria-hidden="true">
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
      </section>

      <section className="batch-section" id="batches" aria-labelledby="batch-title">
        <div className="section-heading compact">
          <h2 id="batch-title">Our Batch Timings</h2>
          <p>
            From beginners to champions, we train kids, teens, adults, and
            professionals through expert Korean martial arts coaching.
          </p>
        </div>
        <div className="batch-grid">
          {batches.map((batch) => (
            <article className="batch-card" key={batch.title}>
              <h3>{batch.title}</h3>
              <p>{batch.text}</p>
              <div className="time-grid">
                {batch.times.map((time) => (
                  <span key={time}>{time}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <h2>
          Start Your <span>Martial Arts Journey</span> Today!
        </h2>
        <p>
          Whether you want to learn self defence, lose weight, build confidence,
          or compete professionally, your journey starts here.
        </p>
        <div className="cta-actions">
          <a className="white-button" href="/contact#contact-form">Book Free Trial Class</a>
          <a className="dark-button" href="/contact">Call Us Now</a>
        </div>
      </section>

      <section className="gallery-section" aria-labelledby="gallery-title">
        <div className="gallery-heading">
          <h2 id="gallery-title">Moments of Discipline and Achievement</h2>
          <p>
            Expert-led training in Taekwondo, self-defense, poomsae, kyorugi,
            fitness, and gymnastics tailored for kids, teens, adults, and
            working professionals.
          </p>
        </div>
        <div className="gallery-mosaic">
          {Array.from({ length: 28 }, (_, index) => (
            <Placeholder
              className={`gallery-tile tile-${(index % 7) + 1}`}
              label={`Image ${index + 1}`}
              key={index}
            />
          ))}
        </div>
      </section>

      <section className="testimonial-section" aria-labelledby="testimonial-title">
        <div className="section-heading compact wide">
          <h2 id="testimonial-title">Trusted By Students. Recommended By Families.</h2>
          <p>
            For over 18 years, Deccan Taekwondo Academy has helped children,
            teenagers, adults, and families transform their lives through
            martial arts.
          </p>
        </div>
        <div className="testimonial-row">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial-card" key={`${testimonial}-${index}`}>
              <p>{testimonial}</p>
              <strong>Jackson</strong>
            </article>
          ))}
        </div>
        <div className="slider-buttons" aria-hidden="true">
          <button type="button">-</button>
          <button type="button">+</button>
        </div>
      </section>
    </>
  );
}

export default Home;
