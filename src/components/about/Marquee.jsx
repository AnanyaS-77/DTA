const audiences = [
  "For Kids",
  "Teens",
  "Adults",
  "Working Professionals",
  "Mothers",
  "Seniors",
];

function Marquee() {
  return (
    <div className="about-marquee" aria-label="Available training groups">
      {audiences.map((audience, index) => (
        <span key={audience}>
          {audience}
          {index < audiences.length - 1 && <b aria-hidden="true">.</b>}
        </span>
      ))}
    </div>
  );
}

export default Marquee;
