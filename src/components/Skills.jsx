import { skills } from "../portfolioData";

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-heading">
        <p className="section-pretitle">Technical Skills</p>
        <h2>Focused stack for backend roles, with enough frontend to ship complete products.</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skillGroup) => (
          <article className="skills-card" key={skillGroup.group}>
            <h3>{skillGroup.group}</h3>
            <div className="skill-badges">
              {skillGroup.items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
