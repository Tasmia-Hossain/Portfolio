import { codingJourney } from "../portfolioData";

function CodingJourney() {
  return (
    <section className="section journey-section" id="journey">
      <div className="section-heading">
        <p className="section-pretitle">Currently Learning</p>
        <h2>Consistent learning around .NET, SQL Server, problem solving, and cleaner delivery.</h2>
      </div>

      <div className="journey-layout">
        <article className="learning-card">
          <h3>Currently Learning</h3>
          <ul>
            {codingJourney.currentLearning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <div className="platform-grid">
          {codingJourney.platforms.map((platform) => (
            <article className="platform-card" key={platform.name}>
              <span>{platform.status}</span>
              <h3>{platform.name}</h3>
              <p>{platform.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CodingJourney;
