import { research } from "../portfolioData";

function Research() {
  return (
    <section className="section research-section" id="research">
      <div className="section-heading">
        <p className="section-pretitle">Research</p>
        <h2>{research.title}</h2>
      </div>

      <div className="research-card">
        <p>{research.summary}</p>
        <ul>
          {research.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="stack-list">
          {research.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
