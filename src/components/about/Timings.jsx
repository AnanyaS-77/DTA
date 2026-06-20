const batchTimings = [
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
    times: [
      "03:00 - 04:00 PM",
      "04:00 - 05:00 PM",
      "05:00 - 06:00 PM",
      "06:00 - 07:00 PM",
      "07:00 - 08:00 PM",
    ],
  },
];

function Timings() {
  return (
    <section className="about-timings" id="about-batches" aria-labelledby="about-timings-title">
      <div className="about-section-heading about-timings-heading">
        <h2 id="about-timings-title">Our Batch Timings</h2>
        <p>
          From beginners to champions, we train kids, teens, adults, and
          professionals through expert.
        </p>
      </div>

      <div className="about-timing-grid">
        {batchTimings.map((batch) => (
          <article className="about-timing-card" key={batch.title}>
            <h3>{batch.title}</h3>
            <p>{batch.text}</p>
            <div className="about-time-list">
              {batch.times.map((time) => (
                <span key={time}>{time}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Timings;
