import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="about-container">

      {/* 3-image editorial row */}
      <section className="about-gallery">
        <Image src="/tia1.jpeg" alt="" width={500} height={700} className="about-gallery-img" />
        <Image src="/tia2.jpeg" alt="" width={500} height={700} className="about-gallery-img" />
        <Image src="/tia4.jpeg" alt="" width={500} height={700} className="about-gallery-img" />
      </section>

      {/* Centered text block */}
      <section className="about-centered-text">
        <h1>About Me</h1>

        <p>
          Hey, I’m Tia. I’ve been in technology since I joined the Army at 18, and everything I’ve
          done since then has revolved around tech, problem-solving, and creating things with intention.
        </p>

        <p>
          My love for websites started during the MySpace days — spending hours customizing layouts,
          tweaking colors, and adjusting HTML I had no business touching. That was the first spark of
          the creative-tech side I still love today.
        </p>

        <p>
          I’ve worked across IT, cybersecurity, and software development — and traveled to 29 countries,
          pulling design inspiration from architecture, color palettes, and everyday details most people overlook.
        </p>

        <p>
          I’m also Filipino, and “Likha” means creation in Tagalog. Naming my studio Likha by Tia felt right —
          it ties my culture into the work I create and reminds me that every website is built with intention.
        </p>

        <p>
          Likha by Tia is where clean design meets personality. If you want a website that feels intentional,
          modern, and made just for you — not a cookie-cutter template — I’d love to build it.
        </p>

        <p>– Tia</p>
      </section>

    </main>
  );
}
