export default function ContactPage() {
  return (
    <main className="container contact">
      <h1>Work With Me</h1>
      <p className="contact-intro">
        Tell me about your project — I’ll get back to you within 1–2 business days.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Tell me about your project" rows={6} required />
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </main>
  );
}
