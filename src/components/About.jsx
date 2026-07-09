import { education, highlights, profile } from "../portfolioData";

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-heading">
        <p className="section-pretitle">About</p>
        <h2>Backend-minded developer with full-stack project range.</h2>
      </div>

      <div className="about-layout">
        <div className="about-image">
          <img src={profile.image} alt={profile.name} />
        </div>
        <div className="about-content">
          <p>
            I am a Computer Science and Engineering graduate from Ahsanullah University of Science
            and Technology, focused on professional .NET backend development. My strongest work
            combines ASP.NET Core, C#, SQL Server, authentication, CRUD workflows, and practical
            product features.
          </p>
          <p>
            I also work comfortably across JavaScript, Bootstrap, PHP/MySQL, Flutter, and
            research-oriented Python workflows. That range helps me understand complete systems
            while keeping my career direction centered on backend engineering, database design, and
            reliable application logic.
          </p>

          <div className="highlight-grid">
            {highlights.map((item) => (
              <article className="highlight-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="education-strip" aria-label="Education">
        {education.map((item) => (
          <article key={item.school}>
            <h3>{item.school}</h3>
            <p>{item.detail}</p>
            <span>{item.meta}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
