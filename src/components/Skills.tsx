import Section from "./Section";
import { skills } from "../data/skills";

// skills is typed as Skill[], so inside the map, "skill" is a Skill —
// try typing "skill." in VS Code and you'll get autocomplete for its fields.
export default function Skills() {
  return (
    <Section id="skills" number="02." title="Skills">
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
            <ul>
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
