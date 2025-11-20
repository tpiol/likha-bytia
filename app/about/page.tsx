import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="about-container">

      {/* Editorial 3-photo row */}
      <section className="about-gallery">
        <Image src="/tia1.jpeg" alt="Tia 1" width={500} height={700} className="about-gallery-img" />
        <Image src="/tia2.jpeg" alt="Tia 2" width={500} height={700} className="about-gallery-img" />
        <Image src="/tia4.jpeg" alt="Tia 4" width={500} height={700} className="about-gallery-img" />
      </section>

      {/* Split layout */}
      <section className="about-split">
      

        <div className="about-right">
          <h1>About Me</h1>

          <p>
            Hey, I’m Tia. I've been in technology ever since I joined the Army at 18.
            Everything I’ve done since has been rooted in tech, problem-solving, and 
            creating things with intention.
          </p>

          <p>
            My love for websites actually started on MySpace. Hours customizing layouts,
            colors, and HTML I had no business touching — but it sparked the creative 
            side of tech I’ve always loved.
          </p>

          <p>
            I’ve built my career across IT, cybersecurity, and software development — 
            all while traveling to 29 countries and finding design inspiration everywhere 
            I go. I pay attention to details most people overlook: architecture, color 
            palettes, textures, visual balance.
          </p>

          <p>
            A big part of who I am is being Filipino. “Likha” means creation in Tagalog,
            and using it for my studio name is my way of embracing my culture and putting
            a piece of myself into every project.
          </p>

          <p>
            Likha by Tia is where clean design meets intention. If you want a website 
            that truly reflects you — not a template — I'd love to build it.
          </p>

          <p>– Tia</p>
        </div>
      </section>

    </main>
  );
}
