# Proof of Work

**Ledger revision:** 2026-08-31
**Machine-readable ledger:** [public/evidence.json](public/evidence.json)

This document records what an evaluator can inspect publicly. It is intentionally narrower than a biography: an artifact supports only the claim stated beside it.

## Evidence classes

- **Third-party attribution:** a page controlled by another public entity visibly connects the work or contact route to Amer.
- **External profile:** a third-party platform publishes a professional profile. This supports public positioning, not every underlying claim.
- **Source repository:** code and history are inspectable. This supports existence and implementation choices, not deployment or adoption.
- **Owner-published artifact:** work appears in Amer’s canonical repository. Authorship and permissions remain owner assertions unless corroborated.
- **Experiment:** an inspectable exploration that must not be presented as an operating company or validated product.

## Ledger

### E-BENFRESH — BenFresh live website attribution

- Class: third-party attribution
- Status: verified public artifact
- Source: https://www.benfresh.de/
- Observed: 2026-08-31

The live footer displayed “Designed by Econic Media” alongside the same German WhatsApp number Amer publishes here. This is the strongest public evidence in the current corpus for delivered small-business website work.

It supports: a public business website was shipped and publicly attributes the associated studio/contact route.

It does not prove: sole authorship, conversion improvement, client satisfaction, project value, maintenance status, or a current client relationship.

### E-CHERRYDECK — professional photography profile

- Class: external profile
- Status: verified public artifact
- Source: https://cherrydeck.com/amerkallajo
- Observed: 2026-08-31

Cherrydeck publicly listed Amer as a professional photographer and included videography and post-production among his capabilities.

It supports: Amer has maintained an externally hosted professional visual-production profile and a substantial public body of visual work.

It does not prove: ownership of every asset, client authorization, campaign outcomes, awards, revenue, or the continued accuracy of volatile profile metrics.

### E-SWARM — evidence-gated outreach repository

- Class: source repository
- Status: verified public artifact
- Source: https://github.com/amerkallajo/swarm
- Observed: 2026-08-31

The repository contains TypeScript source and tests for a workflow built around evidence, approvals, suppression, provenance, and explicit operational state.

It supports: software implementation work; systems thinking around AI-assisted workflows; attention to safety and human approval boundaries.

It does not prove: production deployment, market adoption, revenue, successful outreach, or competence across every AI domain.

### E-SABONE — product landing-page experiment

- Class: source repository
- Status: experiment
- Source: https://github.com/amerkallajo/sabone-landing-page
- Observed: 2026-08-31

The repository contains a React/TypeScript interface concept for a product brand with Arabic visual references.

It supports: interface exploration, visual direction, and rapid prototype work.

It does not prove: an operating company, product ownership, sales, product-market fit, or a client engagement.

### E-PORTFOLIO — commercial image collection

- Class: owner-published artifact
- Status: self-published
- Source: https://github.com/amerkallajo/amerkallajo-portfolio/tree/master/public/images/portfolio
- Observed: 2026-08-31

The canonical repository contains a large set of commercial and product image compositions. The website exposes a curated subset.

It supports: there is concrete visual work to inspect; Amer publicly positions it as his portfolio.

It does not prove: independent authorship, client approval, licensing, campaign performance, or commercial outcomes for any brand shown.

## Other public repositories reviewed

### amerkallajo-portfolio

Status: current reference implementation. It proves ownership of this code history and documentation. Until a production origin is bound and verified, it does not prove a live deployment.

### freela-landing-page

Status: public prototype repository. Its committed build output and broad “production-ready” language are not sufficient evidence of readiness, adoption, or outcomes. It is excluded from the positive capability ledger pending a tighter source audit and an externally verifiable deployment.

## Evidence gaps that matter

The current public corpus does not establish:

- quantified business results;
- named client references with explicit permission;
- formal education or professional certifications;
- dates and roles for an employment history;
- production usage or adoption of public software;
- current availability, location, rates, or work authorization;
- deep senior specialization in one technical field;
- regulated professional authority.

These are not accusations. They are unresolved fields. A serious evaluator should ask for the relevant evidence only when the project needs it.

## How to add evidence

A new entry should include a stable `E-*` ID, source URL, class, observation date, narrow supported claims, and explicit non-claims. If the source is private, do not place it in this public repository. If a public source changes, mark the entry stale rather than quietly broadening the claim.
