import Link from "next/link";

const services = [
  ["01", "Static Business Website", "Professional, responsive websites designed around trust, enquiries and the next customer action."],
  ["02", "E-Commerce", "Product management, payments, shipping, checkout and order workflows for businesses ready to sell online."],
  ["03", "Digital Marketing", "Google Ads, Meta Ads, social media and local visibility connected to your digital presence."],
  ["04", "Lead Generation", "Lead forms, WhatsApp and practical follow-up journeys designed to capture customer enquiries."],
];

const steps = [
  ["BUILD", "Websites · E-commerce · Landing Pages · Lead-generation Websites"],
  ["PROMOTE", "Google Ads · Meta Ads · Social Media · Google Business Profile"],
  ["CAPTURE", "Lead Forms · WhatsApp · WhatsApp Automation · Lead Funnels"],
  ["CONVERT", "Conversion-focused Websites · Landing Pages · Lead Funnels · WhatsApp Communication"],
  ["GROW", "Digital marketing · Advertising · Optimization · Technology support"],
];

const faq = [
  ["How much does a website cost?", "Static website development starts at ₹6,999 + GST. Blog websites start at ₹9,999 + GST. E-commerce plans start at ₹9,999 + GST."],
  ["Is GST included?", "The approved website and service prices are listed before GST. GST is added to applicable development and service fees."],
  ["Is hosting included?", "Hosting details depend on the selected implementation and are not stated as universally included in the supplied business specification. Confirm the hosting arrangement when discussing your project."],
  ["Is maintenance mandatory?", "Annual maintenance is based on the selected plan. Website development is a one-time development service rather than a forced monthly website subscription."],
  ["Do you provide e-commerce websites?", "Yes. E-commerce plans include product management, payment gateway, shipping, cart, checkout and order management, with plan-specific limits and functionality."],
  ["Do you provide Google Ads and Meta Ads management?", "Yes. Google Ads is ₹3,500/month and Meta Ads is ₹2,500/month. Advertising platform spend is separate."],
  ["Can you connect WhatsApp?", "Yes. WhatsApp integration and WhatsApp automation are part of the Technology-Driven Marketing offering."],
  ["Do you work with small businesses?", "Yes. DripFunnel is positioned for Indian small and growing businesses."],
  ["Can you build custom functionality?", "Yes. Custom development is supported, with additional pages, major changes, new functionality and custom integrations potentially carrying additional charges."],
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> TECHNOLOGY-DRIVEN MARKETING</div>
            <h1>Take Your Business Online. <em>Grow It Digitally.</em></h1>
            <p className="hero-lead">DripFunnel is a Technology-Driven Marketing agency under Softobotics, helping Indian small and growing businesses build websites, sell online, generate qualified leads and grow revenue through affordable technology, digital marketing and automation solutions.</p>
            <div className="actions">
              <Link className="btn btn-primary" href="/contact">Get Started <span aria-hidden="true">↗</span></Link>
              <Link className="btn btn-secondary" href="/services">Explore Our Services</Link>
            </div>
            <div className="hero-messaging">
              <div>Technology that builds your business.</div>
              <div>Marketing that brings customers.</div>
              <div>Solutions that help you grow.</div>
            </div>
            <div className="hero-proof"><span>Built for Indian small & growing businesses</span><span>Websites</span><span>E-commerce</span><span>Digital Marketing</span><span>Automation</span></div>
          </div>

          <div className="hero-visual" aria-label="Business to technology to marketing to leads to revenue visual">
            <div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" />
            <div className="growth-card main-node"><div className="node-icon">DF</div><div><small>YOUR BUSINESS</small><strong>Digital Growth System</strong></div><div className="node-status">● Connected</div></div>
            <div className="float-card traffic"><small>TRAFFIC</small><strong>Reach</strong><span>Google · Meta · Social</span></div>
            <div className="float-card lead"><small>CAPTURE</small><strong>New enquiry</strong><span>Lead → WhatsApp</span></div>
            <div className="float-card revenue"><small>OUTCOME</small><strong>Customer</strong><span>Convert → Grow</span></div>
            <div className="connector c1" /><div className="connector c2" /><div className="connector c3" />
          </div>
        </div>
      </section>

      <section className="strip"><div className="container strip-inner"><span>Technology</span><i>+</i><span>Websites</span><i>+</i><span>Digital Marketing</span><i>+</i><span>Lead Generation</span><i>+</i><span>Automation</span></div></section>

      <section className="section problem">
        <div className="container split"><div><div className="eyebrow">THE DIGITAL GAP</div><h2>Your Customers Are Online. <em>Is Your Business?</em></h2></div><div><p className="large-copy">Your website, visibility, lead capture and customer communication should work together. DripFunnel builds the digital system behind your growth.</p><p className="exact-copy"><strong>We Build the Digital System Behind Your Growth.</strong></p><Link className="text-link" href="/services">Explore the system →</Link></div></div>
        <div className="container problem-grid">
          {["No professional website","Poor online visibility","Dependence only on social media","Difficulty generating leads","No online selling system","Poor customer follow-up","Manual lead handling","No structured digital marketing"].map((x,i)=><div className="problem-item" key={x}><span>0{i+1}</span>{x}<b>↗</b></div>)}
        </div>
      </section>

      <section className="section process-section"><div className="container"><div className="section-head centered"><div className="eyebrow">THE DRIPFUNNEL SYSTEM</div><h2>Build → Promote → Capture → <em>Convert → Grow</em></h2><p>One connected journey from your first digital touchpoint to business growth.</p></div><div className="process-grid">{steps.map(([title,text],i)=><div className="process-step" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p><div className="step-line" /></div>)}</div></div></section>

      <section className="section services-preview"><div className="container"><div className="section-head"><div><div className="eyebrow">WHAT WE BUILD</div><h2>Technology that <em>works for growth.</em></h2></div><Link className="text-link" href="/services">View all services →</Link></div><div className="service-grid">{services.map(([n,title,text])=><Link href="/services" className="service-card" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p><b>Explore ↗</b></Link>)}</div></div></section>

      <section className="section dark-section"><div className="container dark-grid"><div><div className="eyebrow light">TECHNOLOGY-DRIVEN MARKETING</div><h2>Marketing becomes stronger when <em>your technology is connected.</em></h2><p className="large-copy" style={{color:"#aab9c5"}}>Your website, advertising, lead capture and customer communication can be designed as one practical system.</p><Link className="btn btn-light" href="/services">Explore Services ↗</Link></div><div className="dark-points">{["Google Ads","Meta Ads","Social Media Marketing","Google Business Profile","Lead Generation","WhatsApp Integration","WhatsApp Automation","Digital Marketing"].map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong><i>↗</i></div>)}</div></div></section>

      <section className="section"><div className="container"><div className="section-head centered"><div className="eyebrow">WHY DRIPFUNNEL</div><h2>Practical technology. <em>Business-focused growth.</em></h2><p>Built for Indian small and growing businesses that need useful digital systems—not unnecessary complexity.</p></div><div className="service-detail-grid"><div className="detail-card"><div className="eyebrow">01 — TECHNOLOGY-DRIVEN</div><h3>Technology-Driven</h3><p>Marketing backed by real technology expertise.</p></div><div className="detail-card"><div className="eyebrow">02 — AFFORDABLE</div><h3>Affordable</h3><p>Solutions designed for Indian small and growing businesses.</p></div><div className="detail-card"><div className="eyebrow">03 — PRACTICAL</div><h3>Practical</h3><p>No unnecessary complexity. Start with what your business needs.</p></div><div className="detail-card"><div className="eyebrow">04 — BUSINESS-FOCUSED</div><h3>Business-Focused</h3><p>Solutions built around actual business goals.</p></div><div className="detail-card"><div className="eyebrow">05 — CONVERSION-FOCUSED</div><h3>Conversion-Focused</h3><p>Websites and campaigns designed around enquiries and customers.</p></div><div className="detail-card"><div className="eyebrow">06 — BACKED BY SOFTOBOTICS</div><h3>Backed by Softobotics</h3><p>Built on the technology expertise of the parent company.</p></div></div></div></section>

      <section className="section pricing-preview"><div className="container"><div className="section-head centered"><div className="eyebrow">PRICING</div><h2>Start small. <em>Build with confidence.</em></h2><p>Clear approved pricing for websites, e-commerce and marketing services.</p></div><div className="price-grid"><div className="price-card"><small>WEBSITE</small><h3>Static Website</h3><div className="price">₹6,999 <small>+ GST</small></div><p>Professional online presence for growing businesses.</p><Link href="/pricing">View pricing →</Link></div><div className="price-card featured"><div className="price-tag">E-COMMERCE</div><small>BASIC</small><h3>Start Selling Online</h3><div className="price">₹9,999 <small>+ GST</small></div><p>Up to 100 products with payment, shipping, cart, checkout, order management and responsive design.</p><Link href="/pricing">Compare plans →</Link></div><div className="price-card"><small>MARKETING</small><h3>Google Ads</h3><div className="price">₹3,500 <small>/month</small></div><p>Campaign management designed around qualified customer enquiries.</p><Link href="/pricing">View marketing →</Link></div></div><p className="price-note">Advertising platform spend is separate from DripFunnel management/setup fees.</p></div></section>

      <section className="section ownership"><div className="container ownership-inner"><div><div className="eyebrow">OWN YOUR DIGITAL PRESENCE</div><h2>Build Once. <em>Own Your Website.</em></h2></div><p>Website and e-commerce development are one-time development services rather than forced monthly website subscriptions. Annual maintenance is based on the selected plan. Additional pages, major changes, new functionality and custom integrations may incur additional charges.</p><Link className="btn btn-dark" href="/pricing">Understand pricing</Link></div></section>

      <section className="section"><div className="container portfolio-placeholder"><div className="placeholder-art"><span>VERIFIED PROJECTS ONLY</span><b>Real portfolio screenshots<br />and project details belong here.</b></div><div><div className="eyebrow">PORTFOLIO</div><h2>Show the work. <em>Don't fabricate it.</em></h2><p className="large-copy">The portfolio framework is ready for verified project screenshots, names, industries, services, descriptions and website links. No invented clients, results or testimonials are used.</p><Link className="btn btn-dark" href="/portfolio">See Portfolio ↗</Link></div></div></section>

      <section className="section softobotics"><div className="container soft-grid"><div><img className="ecosystem-logo" src="/dripfunnel-logo-dark.png" alt="DripFunnel" width="845" height="143" /><div className="eyebrow light">THE TECHNOLOGY ECOSYSTEM</div><h2>Powered by <em>Softobotics.</em></h2><p>DripFunnel is a brand under Softobotics. Softobotics focuses on core technology development and customized technology solutions for overseas clients. DripFunnel brings that technology expertise to Indian businesses.</p><Link className="btn btn-light" href="/about">Learn About Softobotics ↗</Link></div><div className="timeline-mini"><div><b>Softobotics</b><span>Core Technology + Global Clients</span></div><div><b>Technology Expertise</b><span>Websites + Digital Systems + Development</span></div><div><b>Market Gap</b><span>Affordable digital solutions for Indian small businesses</span></div><div><b>DripFunnel</b><span>Technology-Driven Marketing</span></div><div><b>Outcome</b><span>Build → Promote → Capture → Convert → Grow</span></div></div></div></section>

      <section className="section"><div className="container"><div className="section-head"><div><div className="eyebrow">DRIPFUNNEL JOURNAL</div><h2>Useful ideas for a <em>digital business.</em></h2></div><Link className="text-link" href="/blog">View all articles →</Link></div><div className="blog-grid" style={{marginTop:52}}><Link className="blog-card featured" href="/blog/why-website-important"><small>FEATURED ARTICLE</small><h2>Why Is a Website Important for Your Business?</h2><p>A professional website gives your business a digital home you control. It can explain what you offer, build credibility and capture enquiries.</p><b>Read article →</b></Link><Link className="blog-card" href="/blog/ecommerce-for-business"><small>ARTICLE</small><h2>Why Is E-Commerce Important for Selling Products Online?</h2><p>A structured online selling journey can help customers discover, pay for and track products.</p><b>Read article →</b></Link></div></div></section>

      <section className="section"><div className="container"><div className="section-head centered"><div className="eyebrow">FAQ</div><h2>Questions before you <em>get started.</em></h2><p>Clear answers based on the approved DripFunnel business specification.</p></div><div className="faq-list">{faq.map(([q,a])=><details className="faq-item" key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>

      <section className="section final-cta"><div className="container cta-box"><div><div className="eyebrow">READY TO START?</div><h2>Let's Grow Your Business <em>Online.</em></h2><p>Tell us what you need. We’ll help you choose a practical digital path.</p></div><div className="actions"><Link className="btn btn-primary" href="/contact">Get Started ↗</Link><a className="btn btn-secondary" href="tel:+919483882266">Call +91 9483882266</a></div></div></section>
    </>
  );
}
