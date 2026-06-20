import { useState } from "react";
import taekwondoImage from "../../../assets/About/Image8.png";
import selfDefenceImage from "../../../assets/About/Image9.jpg";
import poomsaeImage from "../../../assets/About/Image10.jpg";

const trainingCards = [
  {
    title: "Taekwondo Training",
    image: taekwondoImage,
    alt: "Two Taekwondo athletes sparring",
    text: "Master authentic Korean martial arts techniques with structured progression like basic techniques, kicks and strikes, sparring drills, discipline training.",
  },
  {
    title: "Self Defence Training",
    image: selfDefenceImage,
    alt: "Taekwondo self defence practice in class",
    text: "Master authentic Korean martial arts techniques with structured progression like basic techniques, kicks and strikes, sparring drills, discipline training.",
  },
  {
    title: "Poomsae Training",
    image: poomsaeImage,
    alt: "Martial artist practicing a high poomsae kick",
    text: "Master authentic Korean martial arts techniques with structured progression like basic techniques, kicks and strikes, sparring drills, discipline training.",
  },
];

function TrainingCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCards = trainingCards.map((_, index) => {
    const cardIndex = (activeIndex + index) % trainingCards.length;
    return trainingCards[cardIndex];
  });

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? trainingCards.length - 1 : currentIndex - 1
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % trainingCards.length);
  };

  return (
    <section className="about-training-carousel" aria-labelledby="about-training-title">
      <div className="about-section-heading about-training-heading">
        <h2 id="about-training-title">
          Complete Korean Martial Arts Training Under One Roof
        </h2>
        <p>
          Expert-led training in Taekwondo, self-defence, poomsae, kyorugi,
          fitness, and gymnastics tailored for kids, teens, adults, and working
          professionals.
        </p>
      </div>

      <div className="about-training-viewport" aria-live="polite">
        <div className="about-training-track">
          {visibleCards.map((card) => (
            <article className="about-training-card" key={card.title}>
              <figure className="about-training-image">
                <img src={card.image} alt={card.alt} />
              </figure>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="about-training-controls">
        <button type="button" onClick={showPrevious} aria-label="Show previous training card">
          <span aria-hidden="true">&larr;</span>
        </button>
        <button type="button" onClick={showNext} aria-label="Show next training card">
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </section>
  );
}

export default TrainingCarousel;
