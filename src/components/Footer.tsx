export default function Footer() {
  // Plain TypeScript runs freely before the return. getFullYear() returns a
  // number; {year} renders it. No getElementById anywhere.
  const year: number = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p>© {year} Dalison Rakotoarivony — Built with React + TypeScript.</p>
    </footer>
  );
}
