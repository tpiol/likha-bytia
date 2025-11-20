import "../globals.css";

export default function ServicesPage() {
  return (
    <main className="container services">

      <h1 className="services-title">Website Design & Digital Presence</h1>
      <p className="services-intro">
        Custom-coded, modern websites built clean, simple, and professional — without templates.
      </p>

      <div className="pricing-grid">

        {/* Starter */}
        <article className="pricing-card">
          <h2>Starter Website</h2>
          <p className="price">$450 <span className="price-note">one-time</span></p>
          <p className="tagline">Perfect for personal brands and creatives.</p>

          <ul>
            <li>1–3 Pages</li>
            <li>Custom Colors & Layout</li>
            <li>Mobile Responsive</li>
            <li>Contact Form</li>
            <li>1 Revision Round</li>
          </ul>
        </article>

        {/* Business */}
        <article className="pricing-card highlight">
          <h2>Business Website</h2>
          <p className="price">$1,200 <span className="price-note">one-time</span></p>
          <p className="tagline">A full, professional online presence.</p>

          <ul>
            <li>Up to 6 Pages</li>
            <li>Brand Styling & Layout</li>
            <li>SEO-Ready Structure</li>
            <li>Booking/Forms Integration</li>
            <li>2 Revision Rounds</li>
          </ul>
        </article>

        {/* Premium */}
        <article className="pricing-card">
          <h2>Premium Brand Website</h2>
          <p className="price">$2,000+ <span className="price-note">one-time</span></p>
          <p className="tagline">For elevated brands & luxury identity.</p>

          <ul>
            <li>Full Brand System</li>
            <li>Advanced Layout & Animations</li>
            <li>Keyword SEO</li>
            <li>Copywriting Assistance</li>
            <li>Priority Support</li>
          </ul>
        </article>

      </div>

      {/* Maintenance */}
      <section className="services-maintenance">
        <h2>Monthly Hosting & Maintenance</h2>
        <p>Keep your site secure, updated, and online — without stress.</p>

        <div className="maintenance-grid">

          <article className="maintenance-card">
            <h3>Basic Hosting</h3>
            <p className="price">$35<span className="price-note">/month</span></p>
            <ul>
              <li>Managed Hosting</li>
              <li>SSL Security</li>
              <li>Domain Management</li>
              <li>Minor Text Edits</li>
            </ul>
          </article>

          <article className="maintenance-card">
            <h3>Standard Care</h3>
            <p className="price">$79<span className="price-note">/month</span></p>
            <ul>
              <li>Everything in Basic</li>
              <li>Monthly Content Updates</li>
              <li>Photo & Pricing Changes</li>
            </ul>
          </article>

          <article className="maintenance-card">
            <h3>Premium Support</h3>
            <p className="price">$150<span className="price-note">/month</span></p>
            <ul>
              <li>Everything in Standard</li>
              <li>SEO Adjustments</li>
              <li>Content Refresh</li>
              <li>Priority Support</li>
            </ul>
          </article>

        </div>
      </section>
    </main>
  );
}
