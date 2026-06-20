import bannerImage from "../../../assets/About/Image1.png";

function Banner() {
  return (
    <section className="about-banner" aria-labelledby="about-banner-title">
      <img
        className="about-banner-image"
        src={bannerImage}
        alt="Deccan Taekwondo Academy students celebrating with certificates"
      />
      <div className="about-banner-shade" />
      <div className="about-banner-content">
        <h1 id="about-banner-title">
          <span className="about-banner-heading-line">More than Martial Arts, a</span>
          <span className="about-banner-heading-accent">Journey of Growth</span>
        </h1>
        <p>
          Since 2008, DTA has empowered students of all ages through expert
          Korean martial arts training focused on strength, focus, discipline,
          and personal development.
        </p>
      </div>
    </section>
  );
}

export default Banner;
