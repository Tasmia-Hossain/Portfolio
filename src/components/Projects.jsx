import { projects } from "../portfolioData";

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-heading">
        <p className="section-pretitle">Selected Projects</p>
        <h2>Practical systems that show backend judgment, data flow, and product thinking.</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className={project.featured ? "project-card featured" : "project-card"} key={project.name}>
            <div className="project-visual">
              <img src={project.image} alt={`${project.name} screenshot`} />
            </div>
            <div className="project-body">
              <p className="project-meta">
                {project.category} / {project.year}
              </p>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <p className="project-impact">{project.impact}</p>

              <div className="feature-list" aria-label={`${project.name} key features`}>
                <strong>Key Features</strong>
                <div>
                  {project.keyFeatures.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>
              </div>

              <div className="stack-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-actions">
                <a className="btn btn-outline" href={project.github} target="_blank" rel="noreferrer">
                  Source Code
                </a>
                {project.liveDemo ? (
                  <a className="btn btn-outline" href={project.liveDemo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                ) : (
                  <span className="btn btn-disabled" aria-disabled="true">
                    Live Demo
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
