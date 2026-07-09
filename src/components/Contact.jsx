import { profile } from "../portfolioData";

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-panel">
        <div>
          <p className="section-pretitle">Contact</p>
          <h2>Open to Software Engineer, .NET Developer, Backend Developer, and internship roles.</h2>
          <p>
            I am focused on opportunities where I can contribute to ASP.NET Core applications, C#
            backend logic, SQL Server databases, APIs, and real-world product features.
          </p>
        </div>
        <div className="contact-actions">
          <a className="btn btn-filled" href={`mailto:${profile.email}`}>
            Email Me
          </a>
          <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="btn btn-outline" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
