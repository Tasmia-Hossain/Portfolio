import { navLinks, profile } from "../portfolioData";

function Footer() {
  return (
    <footer>
      <nav className="footer-nav" aria-label="Footer navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <p>Currently Learning: C#, ASP.NET Core, Entity Framework Core, SQL Server, LeetCode.</p>
      <p>(c) 2026 {profile.name}. Software Engineer | .NET Developer.</p>
    </footer>
  );
}

export default Footer;
