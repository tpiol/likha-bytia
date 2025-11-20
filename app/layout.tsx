import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Likha by Tia",
  description: "Custom-coded modern websites for creators and small businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* NAVBAR */}
        <header className="site-header">
          <div className="nav-container">
            <Link href="/" className="nav-logo">
              <Image
                src="/logo.png"
                alt="Likha by Tia Logo"
                width={150}
                height={60}
              />
            </Link>

            <nav className="nav-links">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* FOOTER */}
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Likha by Tia. All rights reserved.</p>
        </footer>

      </body>
    </html>
  );
}
