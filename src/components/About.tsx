import Section from "./Section";
import { useState } from "react";

const technologies: string[] = [
  "C# / .NET",
  "JavaScript",
  "TypeScript",
  "HTML & CSS",
  "React",
  "Git",
];

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <Section id="about" number="01." title="About me">
      <div className="about-grid">
        <div className="about-text">
          <p>
            Hello! I'm Dalison, a developer based in Madagascar. I enjoy
            building software that solves real problems, with a focus on web
            applications.
          </p>
          <p>
            I currently work on large-scale travel booking platforms, dealing
            with everything from front-end widgets to back-end APIs and
            integrations.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          {showMore && (
            <p>
              Outside of work I'm learning React and TypeScript by rebuilding this 
              very portfolio - the page you're reading is the training project.
            </p>
          )}
          <button className="btn btn-primary" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Read less" : "Read more"}
          </button>
          <ul className="about-tech">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="about-photo">
          <div className="photo-frame">
            {/* Replace with your photo: <img src="/photo.jpg" alt="Dalison" /> */}
            <div className="photo-placeholder">DR</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
