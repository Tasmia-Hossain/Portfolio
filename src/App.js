import { useEffect, useState } from "react";
import profilePic from "./assets/profile.jpg";

function getAsset(fileName) {
  try {
    return require(`./assets/${fileName}`);
  } catch {
    return null;
  }
}

const contact = {
  email: "tasmiahossain1703@gmail.com",
  phone: "+880 1521741282",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/Tasmia-Hossain",
  linkedin: "https://linkedin.com/in/tasmia-hossain-kashfia",
};

const roles = [
  "Full-Stack Developer",
  "CSE Student",
  "React Developer",
  "Flutter Developer",
  "AI Research Learner",
];

const highlights = [
  { title: "Education", detail: "B.Sc. in CSE at AUST", meta: "CGPA 3.63 / 4.00" },
  { title: "Focus", detail: "Full-stack web and mobile apps", meta: "React, ASP.NET, PHP, Flutter" },
  { title: "Research", detail: "Traffic flow prediction with GNN", meta: "Ongoing thesis work" },
];

const skills = [
  {
    group: "Languages",
    items: ["C", "C++", "Java", "Python", "JavaScript", "Dart"],
  },
  {
    group: "Web & App Development",
    items: ["ReactJS", "HTML", "CSS", "Bootstrap", "Flutter", "ASP.NET Core MVC"],
  },
  {
    group: "Database & Backend",
    items: ["C#", "PHP", "MySQL", "Microsoft SQL Server", "MongoDB", "SignalR"],
  },
  {
    group: "AI/ML & Tools",
    items: ["Graph Neural Networks", "TinyML", "NLP", "Git", "GitHub", "Android Studio"],
  },
];

const projects = [
  {
    name: "Lost and Found Hub",
    year: "2025",
    category: "Full-stack Web App",
    summary:
      "A recovery platform with image-based matching, real-time notifications, authentication, SMTP email alerts, and advanced search.",
    stack: ["ASP.NET Core MVC", "C#", "SQL Server", "SignalR"],
    github: "https://github.com/Tasmia-Hossain/lost-and-found-hub",
    image: getAsset("project-lost-found.png"),
  },
  {
    name: "SafeParking",
    year: "2024",
    category: "Marketplace Platform",
    summary:
      "A parking discovery and booking app with Google Maps, subscription contracts, reviews, admin dashboard, and payment history.",
    stack: ["PHP", "MySQL", "JavaScript", "Google Maps API"],
    github: "https://github.com/Tasmia-Hossain/safeparking",
    image: getAsset("project-safeparking.png"),
  },
  {
    name: "Inventory Control System",
    year: "2024",
    category: "Management System",
    summary:
      "A food-industry inventory system with admin/client/supplier access, product management, supplier tracking, and reporting.",
    stack: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/Tasmia-Hossain/Inventory-Control-System",
    image: getAsset("project-inventory.png"),
  },
  {
    name: "Sudoku Bliss",
    year: "2023",
    category: "Cross-platform Game",
    summary:
      "A Sudoku app with puzzle generation, difficulty modes, save/resume, SQLite persistence, timer, counters, and tutorials.",
    stack: ["Flutter", "Dart", "SQLite"],
    github: "https://github.com/Tasmia-Hossain/Sudoku-Bliss",
    image: getAsset("project-sudoku.png"),
  },
];

const education = [
  {
    school: "Ahsanullah University of Science and Technology",
    detail: "B.Sc. in Computer Science & Engineering",
    meta: "CGPA 3.63 / 4.00 | Expected June 2026",
  },
  {
    school: "Dhaka City College",
    detail: "Higher Secondary Certificate",
    meta: "GPA 5.00 / 5.00 | 2020",
  },
  {
    school: "YWCA Higher Secondary Girls' School",
    detail: "Secondary School Certificate",
    meta: "GPA 5.00 / 5.00 | 2018",
  },
];

function useRoleRotator() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const delay = deleting ? 45 : 85;
    const pause = visibleText === currentRole && !deleting ? 1200 : delay;

    const timer = setTimeout(() => {
      if (!deleting && visibleText.length < currentRole.length) {
        setVisibleText(currentRole.slice(0, visibleText.length + 1));
        return;
      }

      if (!deleting && visibleText.length === currentRole.length) {
        setDeleting(true);
        return;
      }

      if (deleting && visibleText.length > 0) {
        setVisibleText(currentRole.slice(0, visibleText.length - 1));
        return;
      }

      setDeleting(false);
      setRoleIndex((current) => (current + 1) % roles.length);
    }, pause);

    return () => clearTimeout(timer);
  }, [deleting, roleIndex, visibleText]);

  return visibleText;
}

function App() {
  const visibleRole = useRoleRotator();

  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#home">Tasmia Hossain</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-image">
          <img src={profilePic} alt="Tasmia Hossain" />
        </div>

        <div className="hero-content">
          <p className="pretitle">Hello, I'm</p>
          <h1>Tasmia Hossain</h1>
          <p className="role-line">
            <span>{visibleRole}</span>
          </p>
          <p className="hero-summary">
            CSE student at AUST building practical full-stack web and mobile applications with
            React, ASP.NET Core, PHP/MySQL, Flutter, and database-focused project experience.
          </p>
          <div className="button-row">
            <a className="btn btn-outline" href="/Tasmia_Hossain_CV.pdf" download>Download CV</a>
            <a className="btn btn-filled" href="#contact">Contact Info</a>
          </div>
          <div className="social-row" aria-label="Social links">
            <a href={contact.linkedin} target="_blank" rel="noreferrer">in</a>
            <a href={contact.github} target="_blank" rel="noreferrer">gh</a>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <p className="section-pretitle">Get To Know More</p>
        <h2 className="section-title">About Me</h2>
        <div className="about-layout">
          <div className="about-image">
            <img src={profilePic} alt="Tasmia Hossain" />
          </div>
          <div className="about-content">
            <div className="highlight-grid">
              {highlights.map((item) => (
                <article className="highlight-card" key={item.title}>
                  <div className="card-icon">{item.title.slice(0, 1)}</div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <span>{item.meta}</span>
                </article>
              ))}
            </div>
            <p className="about-text">
              I enjoy building complete systems, not only UI screens. My projects include a
              lost-item recovery platform, urban parking marketplace, inventory management
              dashboard, and cross-platform Sudoku app. I am looking for internship or junior
              software engineering opportunities where I can contribute, learn fast, and grow with
              a strong engineering team.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section" id="skills">
        <p className="section-pretitle">Explore My</p>
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup) => (
            <article className="skills-card" key={skillGroup.group}>
              <h3>{skillGroup.group}</h3>
              <div className="skill-list">
                {skillGroup.items.map((skill) => (
                  <div className="skill-item" key={skill}>
                    <span className="checkmark">{"\u2713"}</span>
                    <div>
                      <strong>{skill}</strong>
                      <p>Experienced</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <p className="section-pretitle">Browse My Recent</p>
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className="project-visual">
                {project.image ? (
                  <img src={project.image} alt={`${project.name} screenshot`} />
                ) : (
                  <span>{String(index + 1).padStart(2, "0")}</span>
                )}
              </div>
              <div className="project-body">
                <p className="project-meta">{project.category} | {project.year}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="stack-list">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="button-row project-actions">
                  <a className="btn btn-outline" href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section research-section">
        <p className="section-pretitle">Current Research</p>
        <h2 className="section-title research-title">
          Traffic Flow Prediction and Dynamic Routing in Bangladesh's Urban Transport Networks with
          Graph Neural Networks
        </h2>
        <div className="research-card">
          <p>
            Developing a graph neural network based model to predict urban traffic flow patterns
            and congestion hotspots across Dhaka road networks, with adaptive routing ideas for
            smart city congestion management.
          </p>
        </div>
      </section>

      <section className="section education-section">
        <p className="section-pretitle">Academic Journey</p>
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.school}>
              <h3>{item.school}</h3>
              <p>{item.detail}</p>
              <span>{item.meta}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <p className="section-pretitle">Get in Touch</p>
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-box">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
        </div>
      </section>

      <footer>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <p>(c) 2026 Tasmia Hossain. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
