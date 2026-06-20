import Banner from "./about/Banner";
import Champions from "./about/Champions";
import Marquee from "./about/Marquee";
import Authorities from "./about/Authorities";
import Learn from "./about/Learn";
import TrainingCarousel from "./about/TrainingCarousel";
import Timings from "./about/Timings";
import Journey from "./about/Journey";

function About() {
  return (
    <div className="about-page">
      <Banner />
      <Champions />
      <Marquee />
      <Authorities />
      <Learn />
      <TrainingCarousel />
      <Timings />
      <Journey />
    </div>
  );
}

export default About;
