import Image from "next/image";

export default function PortfolioPage() {
  return (
    <main className="container portfolio">
      <h1 className="portfolio-title">My Work</h1>
      <p className="portfolio-sub">
        A curated collection of websites built with clean, modern, intentional design.
        Real client work coming soon.
      </p>

      <div className="portfolio-grid">

        {/* Portfolio Item 1 */}
        <div className="portfolio-card">
          <Image
            src="/placeholder1.jpg"
            alt="Placeholder Project"
            width={1200}
            height={800}
            className="portfolio-img"
          />
          <h3 className="portfolio-item-title">Wellness Studio</h3>
          <p className="portfolio-item-desc">
            A modern, calming site for a holistic wellness & self-care brand.
          </p>
          <a className="portfolio-link">Coming Soon</a>
        </div>

        {/* Portfolio Item 2 */}
        <div className="portfolio-card">
          <Image
            src="/placeholder2.jpg"
            alt="Placeholder Project"
            width={1200}
            height={800}
            className="portfolio-img"
          />
          <h3 className="portfolio-item-title">Creative Artist Portfolio</h3>
          <p className="portfolio-item-desc">
            Clean, editorial layout with bold imagery and minimal typography.
          </p>
          <a className="portfolio-link">Coming Soon</a>
        </div>

        {/* Portfolio Item 3 */}
        <div className="portfolio-card">
          <Image
            src="/placeholder3.jpg"
            alt="Placeholder Project"
            width={1200}
            height={800}
            className="portfolio-img"
          />
          <h3 className="portfolio-item-title">Luxury Beauty Brand</h3>
          <p className="portfolio-item-desc">
            A high-end aesthetic site for a beauty professional or salon.
          </p>
          <a className="portfolio-link">Coming Soon</a>
        </div>

      </div>
    </main>
  );
}
