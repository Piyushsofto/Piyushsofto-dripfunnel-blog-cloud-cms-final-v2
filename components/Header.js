"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Pricing", "/pricing"],
  ["Portfolio", "/portfolio"],
  ["About", "/about"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand-logo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-drip-blue" aria-label="DripFunnel home" onClick={() => setOpen(false)}>
          <img src="/dripfunnel-logo-light.png" alt="DripFunnel" width="845" height="143" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-drip-blue ${pathname === href ? "active" : ""}`}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="nav-right">
          <Link className="nav-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-drip-orange" href="/contact">Get Started <span aria-hidden="true">↗</span></Link>
          <button className="menu-btn" type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`mobile-nav ${open ? "open" : ""}`}>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-drip-blue ${pathname === href ? "active" : ""}`} onClick={() => setOpen(false)}>
              <span>{label}</span><span aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
        <Link className="mobile-nav-cta" href="/contact" onClick={() => setOpen(false)}>Get Started</Link>
      </div>
    </header>
  );
}
