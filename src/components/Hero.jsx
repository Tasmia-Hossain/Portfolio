import { useEffect, useState } from "react";
import { heroMetrics, profile, roles } from "../portfolioData";

function useRoleRotator() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const delay = deleting ? 42 : 78;
    const pause = visibleText === currentRole && !deleting ? 1300 : delay;

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

function Hero() {
  const visibleRole = useRoleRotator();

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">Software Engineer | .NET Developer | ASP.NET Core | C# | SQL Server</p>
        <h1>
          {profile.name}
          <span>{profile.headline}</span>
        </h1>
        <p className="role-line" aria-label="Current focus">
          {visibleRole}
        </p>
        <p className="hero-summary">
          Computer Science and Engineering graduate building backend applications with ASP.NET
          Core, C#, and SQL Server while continuously improving through Microsoft Learn and
          LeetCode.
        </p>
        <div className="button-row">
          <a className="btn btn-filled" href="#projects">
            View Projects
          </a>
          <a className="btn btn-outline" href={profile.resume} download>
            Download CV
          </a>
        </div>
        <div className="hero-metrics" aria-label="Portfolio highlights">
          {heroMetrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-card" aria-label={`${profile.name} profile`}>
        <img src={profile.image} alt={profile.name} />
        <div>
          <span>Backend focus</span>
          <strong>ASP.NET Core, C#, SQL Server</strong>
          <p>{profile.location}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
