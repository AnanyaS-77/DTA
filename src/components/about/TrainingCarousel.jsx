import { useEffect, useRef, useState } from "react";
import taekwondoImage from "../../assets/About/Image8.png";
import selfDefenceImage from "../../assets/About/Image9.jpg";
import poomsaeImage from "../../assets/About/Image10.jpg";

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
  const firstLoopIndex = trainingCards.length;
  const lastLoopIndex = trainingCards.length * 2 - 1;
  const trackRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(firstLoopIndex);
  const [slideOffset, setSlideOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const repeatedCards = [...trainingCards, ...trainingCards, ...trainingCards];

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return undefined;
    }

    const updateOffset = () => {
      const firstCard = track.querySelector(".about-training-card");
      const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
      const cardWidth = firstCard?.getBoundingClientRect().width || 0;

      setSlideOffset(slideIndex * (cardWidth + gap));
    };

    updateOffset();
    const resizeObserver = new ResizeObserver(updateOffset);
    resizeObserver.observe(track);

    return () => resizeObserver.disconnect();
  }, [slideIndex]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsTransitioning(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const showPrevious = () => {
    setIsTransitioning(true);
    setSlideIndex((currentIndex) => currentIndex - 1);
  };

  const showNext = () => {
    setIsTransitioning(true);
    setSlideIndex((currentIndex) => currentIndex + 1);
  };

  const handleTransitionEnd = () => {
    if (slideIndex < firstLoopIndex) {
      setIsTransitioning(false);
      setSlideIndex(lastLoopIndex);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitioning(true)));
    }

    if (slideIndex > lastLoopIndex) {
      setIsTransitioning(false);
      setSlideIndex(firstLoopIndex);
      requestAnimationFrame(() => requestAnimationFrame(() => setIsTransitioning(true)));
    }
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
        <div
          className="about-training-track"
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translate3d(-${slideOffset}px, 0, 0)`,
            transition: isTransitioning ? undefined : "none",
          }}
        >
          {repeatedCards.map((card, index) => (
            <article className="about-training-card" key={`${card.title}-${index}`}>
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
