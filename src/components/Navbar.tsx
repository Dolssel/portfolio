import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

interface NavLink {
  href: string;
  label: string;
}

const links: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#repos", label: "Github"},
  { href: "#contact", label: "Contact" },
];

// useState<boolean> — TS infers the type from the initial value (false),
// so you rarely write it explicitly. setOpen only accepts booleans now.
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const {theme, toggleTheme} = useTheme();

  return (
    <header className="site-header">
      <nav className="nav container">
        <a href="#" className="nav-logo">
          Dalison<span>.</span>
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={open ? "nav-menu open" : "nav-menu"}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle light/dark theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}
