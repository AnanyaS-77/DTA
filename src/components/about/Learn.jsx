import grandMasterImage from "../../../assets/About/Image6.png";
import headCoachImage from "../../../assets/About/Image7.png";

const coaches = [
  {
    name: "Grand Master H.L. Muthappa Huderi",
    image: grandMasterImage,
    alt: "Grand Master H.L. Muthappa Huderi",
    text: "With decades of experience in Korean martial arts, Grand Master H.L. Muthappa has trained thousands of students, national medalists, and competitive athletes.",
    tags: [
      "7th Dan Black Belt",
      "International Taekwondo Expert",
      "Poomsae & Kyorugi Specialist",
      "Award Winning Coach",
    ],
    featuredTag: "International Taekwondo Expert",
  },
  {
    name: "Head Coach Bhupendra",
    image: headCoachImage,
    alt: "Head Coach Bhupendra",
    text: "As the Branch Head Coach of Shantinagar, he ensures every student from kids to working professionals receives personal attention, structured training, and continuous growth.",
    tags: [
      "Disciplined Coaching Style",
      "Student First Approach",
      "Martial Artist",
      "Confidence Building",
      "Beginner Development",
    ],
  },
];

function Learn() {
  return (
    <section className="about-learn" aria-labelledby="about-learn-title">
      <div className="about-section-heading about-learn-heading">
        <h2 id="about-learn-title">Learn From Champions</h2>
        <p>
          From beginners to champions, we train kids, teens, adults, and
          professionals through expert Korean martial arts coaching and
          disciplined fitness programs.
        </p>
      </div>

      <div className="about-coach-grid">
        {coaches.map((coach) => (
          <article className="about-coach-card" key={coach.name}>
            <figure className="about-coach-image">
              <img src={coach.image} alt={coach.alt} />
            </figure>
            <h3>{coach.name}</h3>
            <p>{coach.text}</p>
            <div className="about-coach-tags">
              {coach.tags.map((tag) => (
                <span className={tag === coach.featuredTag ? "is-active" : ""} key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Learn;
