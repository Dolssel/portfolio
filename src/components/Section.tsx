import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

// Props are described by an interface. This is the TS payoff for components:
// anyone using <Section> gets autocomplete on these props and an error if
// they forget a required one or pass the wrong type.
interface SectionProps {
  id: string;
  number: string;
  title: string;
  centered?: boolean; // optional
  children: ReactNode; // ReactNode = "any renderable content" (the nested JSX)
}

export default function Section({
  id,
  number,
  title,
  centered,
  children,
}: SectionProps) {
  const [ref, visible] = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`section container reveal${visible ? " visible" : ""}`}
    >
      <h2 className={`section-title${centered ? " centered" : ""}`}>
        <span className="section-number">{number}</span> {title}
      </h2>
      {children}
    </section>
  );
}
