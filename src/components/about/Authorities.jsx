import worldTaekwondoLogo from "../../assets/About/Image3.png";
import kukkiwonLogo from "../../assets/About/Image4.png";
import dtaLogo from "../../assets/About/Image5.png";

const authorities = [
  {
    name: "World Taekwondo",
    image: worldTaekwondoLogo,
    className: "world-taekwondo-logo",
  },
  {
    name: "Kukkiwon",
    image: kukkiwonLogo,
    className: "kukkiwon-logo",
  },
  {
    name: "Deccan Taekwondo Academy",
    image: dtaLogo,
    className: "dta-authority-logo",
  },
];

function Authorities() {
  return (
    <section className="about-authorities" aria-labelledby="about-authorities-title">
      <div className="about-section-heading">
        <h2 id="about-authorities-title">
          Proudly Affiliated with Taekwondo Authorities.
        </h2>
        <p>
          A commitment to authentic training, recognized standards, and
          excellence through official martial arts affiliations.
        </p>
      </div>

      <div className="about-authority-logos">
        {authorities.map((authority) => (
          <figure className="about-authority-logo" key={authority.name}>
            <img
              className={authority.className}
              src={authority.image}
              alt={`${authority.name} logo`}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Authorities;
