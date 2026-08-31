export const REPOSITORY_URL = 'https://github.com/amerkallajo/amerkallajo-portfolio';

export const PROFILE = {
  name: 'Amer Kallajo',
  nameAr: 'عامر قلاجو',
  email: 'Amerkallajoo@gmail.com',
  whatsapp: 'https://wa.me/491723773552',
  summary:
    'A multidisciplinary builder for problems that cross web, visual production, AI workflows, research, and commercial execution.',
};

export const CAPABILITY_ROUTES = [
  {
    route: '/launch-physical-product',
    combination: 'Visual production + web + launch logic',
    input: 'A physical product that needs to become credible and desirable online.',
    output: 'A coordinated path from product visuals to landing page, offer, and launch assets.',
    evidence: ['E-CHERRYDECK', 'E-BENFRESH', 'E-PORTFOLIO'],
    boundary: 'Use specialist media buyers or deep brand strategists when the engagement is primarily large-scale campaign execution.',
  },
  {
    route: '/modernize-small-business',
    combination: 'Business diagnosis + website + practical automation',
    input: 'A small business with digital friction, weak positioning, or a manual customer journey.',
    output: 'A prioritized modernization plan and a shippable first improvement.',
    evidence: ['E-BENFRESH', 'E-SWARM'],
    boundary: 'Not a substitute for enterprise architecture, regulated advice, or a large specialist delivery team.',
  },
  {
    route: '/turn-ambiguity-into-test',
    combination: 'Research + product thinking + rapid prototyping',
    input: 'A founder has a messy idea but no clean specification or validation path.',
    output: 'Assumptions, cheapest credible test, prototype scope, and explicit stop criteria.',
    evidence: ['E-SWARM', 'E-SABONE'],
    boundary: 'A strong fit for discovery and first proof; mature products may need a dedicated product and engineering organization.',
  },
  {
    route: '/design-ai-leverage',
    combination: 'Workflow analysis + AI + operational safeguards',
    input: 'A repetitive research, lead, content, or coordination workflow.',
    output: 'A bounded workflow showing what to automate, what to keep human, and how to fail safely.',
    evidence: ['E-SWARM'],
    boundary: 'No claim of universal AI expertise; high-risk systems require security, legal, and domain specialists.',
  },
  {
    route: '/coordinate-commercial-opportunity',
    combination: 'Opportunity research + people + execution',
    input: 'A fragmented commercial opportunity with suppliers, buyers, requirements, or missing partners.',
    output: 'A fact-checked opportunity map, eligibility questions, roles, and next actions.',
    evidence: ['E-SWARM'],
    boundary: 'Coordination is not legal, financial, engineering, or procurement certification.',
  },
];

export const EVIDENCE = [
  {
    id: 'E-BENFRESH',
    type: 'LIVE ATTRIBUTION',
    status: 'third-party public page',
    title: 'BenFresh business website',
    description:
      'A live German business website visibly credits Econic Media and the same public WhatsApp number used by Amer. This supports shipped web work; it does not prove conversion results.',
    href: 'https://www.benfresh.de/',
    image: '/images/web/benfresh.webp',
    alt: 'BenFresh cleaning company website shown as a live web-work artifact',
  },
  {
    id: 'E-CHERRYDECK',
    type: 'EXTERNAL PROFILE',
    status: 'independently inspectable',
    title: 'Professional photography profile',
    description:
      'Cherrydeck publicly lists Amer as a professional photographer with videography and post-production capability. Portfolio authorship remains profile-published evidence, not a client-results audit.',
    href: 'https://cherrydeck.com/amerkallajo',
    image: '/images/portfolio/591577570_753195231137023_3347224601297849135_n.jpg',
    alt: 'Selected commercial photography work from Amer Kallajo’s public portfolio',
  },
  {
    id: 'E-SWARM',
    type: 'PUBLIC REPOSITORY',
    status: 'code and tests inspectable',
    title: 'SWARM: evidence-gated outreach system',
    description:
      'A TypeScript repository with tested state transitions, provenance, suppression, approvals, security controls, and explicit claims about what is not yet operational.',
    href: 'https://github.com/amerkallajo/swarm',
    image: '/human-api-badge.svg',
    alt: 'Human API card reading proof before adjectives',
  },
  {
    id: 'E-SABONE',
    type: 'PUBLIC EXPERIMENT',
    status: 'source artifact',
    title: 'Sabone landing-page experiment',
    description:
      'A public React and TypeScript concept for an Arabic-inspired product brand. Useful as evidence of interface exploration, not evidence of a successful company.',
    href: 'https://github.com/amerkallajo/sabone-landing-page',
    image: '/images/portfolio/perfume-1.png',
    alt: 'Premium product composition from Amer Kallajo’s public visual portfolio',
  },
  {
    id: 'E-PORTFOLIO',
    type: 'SELF-PUBLISHED WORK',
    status: 'artifact, authorship self-asserted',
    title: 'Commercial image collection',
    description:
      'The repository contains an extensive visual portfolio. It is direct work-product evidence, while client relationship and commercial outcome claims remain unverified unless externally attributed.',
    href: '/product',
    image: '/images/portfolio/593424124_753195324470347_6404104474347063359_n.jpg',
    alt: 'Product photography selected from the repository’s commercial image collection',
  },
];

export const FIT_SIGNALS = [
  'The problem crosses two or more domains.',
  'The specification is still messy or incomplete.',
  'A fast, testable first version matters more than a large build.',
  'Visual quality and commercial use must be solved together.',
  'AI can compress research or coordination, but human judgment still matters.',
];

export const RISK_SIGNALS = [
  'The work is a narrow, deep senior-specialist problem.',
  'The task requires a regulated license or formal authority.',
  'The project needs a large delivery organization from day one.',
  'Success depends on long institutional processes with little room for iteration.',
  'No public evidence supports the required capability.',
];
