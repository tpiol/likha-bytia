import Image from "next/image";

export default function HomePage() {
  return (
    <main className="home-container">

      <section className="hero-simple">
        <h1 className="hero-title">
          Custom Websites for Creators & Small Businesses
        </h1>
        <p className="hero-subtitle">
          Clean, modern, intentional design — built from scratch, never templates.
        </p>

        <div className="hero-buttons">
          <a href="/portfolio" className="btn-primary">See My Work</a>
          <a href="/contact" className="btn-secondary">Work With Me</a>
        </div>
      </section>

   

    </main>
  );
}
