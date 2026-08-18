// A component with no state and no props — just markup.
// Perfectly fine: most components in a real app are this simple.
export default function Hero() {
  const firstName = "Dalison";
  const lastName = "Rakotoarivony"

  return (
    <section className="hero container" id="home">
      <div className="hero-content">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-title">
          {firstName}<br/>
          <span className="hero-lastname">{lastName}</span>
          <span className="accent-dot">_</span>
        </h1>
        <h2 className="hero-subtitle">Front-end developer and UI/UX enthusiast</h2>
        <p className="hero-text">
          I'm a web developer who enjoys crafting clean, reliable applications
          — from front-end interfaces to back-end services.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            See my work
          </a>
          <a href="#contact" className="btn btn-outline">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
