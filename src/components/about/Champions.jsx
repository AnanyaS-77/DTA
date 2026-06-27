import championsImage from "../../assets/About/Image2.png";

const goals = [
  "Self Defence",
  "Weight Loss",
  "Fitness",
  "Discipline",
  "Competition Training",
  "Confidence Building",
  "Stress Relief",
];

function Champions() {
  return (
    <section className="about-champions" aria-labelledby="about-champions-title">
      <div className="about-champions-copy">
        <div>
          <h2 id="about-champions-title">
            Building Champions <span>Since 2008</span>
          </h2>
          <p className="about-champions-intro">
            Deccan Taekwondo Academy has been shaping lives through the power of
            Korean martial arts for over 18 years.
          </p>
        </div>

        <div className="about-champions-body">
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
          <p>
            From young children taking their first kick to adults transforming
            their fitness and confidence, our mission remains the same:
            <br />
            To create stronger bodies, sharper minds, and fearless individuals.
          </p>
        </div>

        <div className="about-goals" aria-label="Training goals">
          <p>Whether your goal is:</p>
          <div className="about-goal-list">
            {goals.map((goal) => (
              <span className={goal === "Weight Loss" ? "is-active" : ""} key={goal}>
                {goal}
              </span>
            ))}
          </div>
        </div>
      </div>

      <figure className="about-champions-media">
        <img
          src={championsImage}
          alt="DTA students receiving medals at the Karnataka Taekwondo Festival"
        />
      </figure>
    </section>
  );
}

export default Champions;
