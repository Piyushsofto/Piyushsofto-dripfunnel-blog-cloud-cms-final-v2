import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand-logo footer-logo" aria-label="DripFunnel home">
            <img src="/dripfunnel-logo-light.png" alt="DripFunnel" width="845" height="143" />
          </Link>
          <p>Technology-Driven Marketing That Helps Your Business Grow.</p>
          <small>Powered by Softobotics</small>
        </div>
        <div>
          <h4>Navigate</h4>
          <Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/pricing">Pricing</Link>
          <Link href="/portfolio">Portfolio</Link><Link href="/about">About</Link><Link href="/blog">Blog</Link><Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4>Services</h4>
          <Link href="/services">Website Development</Link><Link href="/services">E-Commerce</Link>
          <Link href="/services">Google Ads</Link><Link href="/services">Meta Ads</Link>
          <Link href="/services">Lead Generation</Link><Link href="/services">WhatsApp Automation</Link>
        </div>
        <div>
          <h4>Company + Contact</h4><span className="footer-static">Powered by Softobotics</span>
          <a href="tel:+919483882266">+91 9483882266</a>
          <a href="mailto:info@dripfunnel.com">info@dripfunnel.com</a>
          <a href="https://wa.me/919483882266" target="_blank" rel="noreferrer">WhatsApp ↗</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} DripFunnel</span>
        <span>Technology-Driven Marketing</span>
      </div>
    </footer>
  );
}
