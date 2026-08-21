export default function Footer() {
  // Plain TypeScript runs freely before the return. getFullYear() returns a
  // number; {year} renders it. No getElementById anywhere.
  const year: number = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <span className="footer-logo">
            Dalison<span>.</span>
          </span>
          <p className="footer-tagline">Front-end developer, always learning.</p>
        </div>

        <ul className="footer-links">
          <li>
            <a href="https://github.com/Dolssel" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="mailto:hello@example.com">Email</a>
          </li>
          <li>
            <a href="#home">Back to top ↑</a>
          </li>
        </ul>
      </div>

      <p className="footer-copy">
        © {year} Dalison Rakotoarivony — Built with React + TypeScript.
      </p>
    </footer>
  );
}
