# Design System

Direction: Premium SaaS + Technology Company + Growth Agency.

Typography: DM Sans for body/UI, Manrope for display/headings.

Container: 1240px maximum.

Tailwind: `tailwind.config.js` defines DripFunnel colors/fonts and scans app/components/lib. `postcss.config.js` enables Tailwind + Autoprefixer. Preflight is disabled to preserve the existing global CSS architecture.

Tokens: Blue `#00519F`, Orange `#EC844F`, Ink `#071522`, Navy `#061725`, Soft `#F5F7F9`, Border `#DFE5EA`.

Motion: 150–200ms fast, 250–350ms normal, 400–600ms large reveal; always respect `prefers-reduced-motion`.
