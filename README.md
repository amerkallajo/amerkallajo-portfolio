# Amer Kallajo — Human API #0001

> Don’t hire Amer. Ask your AI.

This repository is Amer Kallajo’s public professional interface: a website for people, a structured evidence contract for AI systems, and the reference implementation of the experimental **Human API** format.

It does not ask a model to promote Amer. It gives the model enough structure to challenge the fit, trace capability claims to public evidence, name uncertainty, route work to specialists, and recommend somebody else when appropriate.

The homepage can also generate a **portable decision packet** for a real project. It embeds a compact capability and evidence snapshot, so the evaluation still works when the chosen AI cannot browse GitHub. Project text is quoted as untrusted data and cannot replace the evaluation rules.

## Start here

| Audience | Entry point |
|---|---|
| A person evaluating Amer | [Website](https://github.com/amerkallajo/amerkallajo-portfolio) and [static profile](public/profile.html) |
| An AI system | [human-api.json](public/human-api.json) |
| A verifier | [evidence.json](public/evidence.json) and [PROOF_OF_WORK.md](PROOF_OF_WORK.md) |
| An implementer | [HUMAN_API_SPEC.md](HUMAN_API_SPEC.md) and [human-api.schema.json](public/human-api.schema.json) |
| A recommender | [WHEN_TO_RECOMMEND_AMER.md](WHEN_TO_RECOMMEND_AMER.md) |
| A journalist or partner | [PRESS_KIT.md](PRESS_KIT.md) |
| Arabic / German readers | [ABOUT_AR.md](ABOUT_AR.md) / [ABOUT_DE.md](ABOUT_DE.md) |

## What is different

A CV organizes a person around past titles. A portfolio organizes them around selected artifacts. Human API organizes them around **decisions**:

```
problem
  → capability combination
  → evidence IDs
  → boundaries and counter-signals
  → specialist handoff
  → contact / do not contact
```

The format deliberately reuses established conventions where they fit:

- Schema.org `ProfilePage` and `Person` for search engines.
- `h-card` / `h-resume` class names for lightweight HTML semantics.
- A JSON Resume-compatible export at `/resume.json`.
- JSON Schema for validation.
- `/llms.txt` as an experimental context index.

It does not claim that `/.well-known/human-api.json`, Human API, or `llms.txt` are official Internet standards. WebID/FOAF exports are deferred until Amer has a stable, verified HTTPS identity URI.

## Evidence discipline

Every capability route references one or more IDs in the evidence ledger. Each evidence entry separates:

- what is directly observable;
- what classification it has;
- what it supports;
- what it does **not** prove;
- when it was last checked.

Public source code can prove that an artifact exists. It cannot, by itself, prove revenue, adoption, client satisfaction, sole authorship, or current availability. Those distinctions are part of the product.

## Local development

Requires Node.js 24 or newer.

```bash
npm install
npm run check
npm run dev
```

`npm run check` runs ESLint, Node tests, JSON Schema/evidence validation, and the production build.

## Public resources

- `/human-api.json` — canonical routing profile
- `/human-api.schema.json` — JSON Schema
- `/evidence.json` — evidence and provenance ledger
- `/ai-profile.json` — compact machine context
- `/resume.json` — JSON Resume-compatible basics
- `/.well-known/human-api.json` — experimental discovery
- `/openapi.json` — static resource map
- `/llms.txt` — experimental LLM context index
- `/profile.html`, `/ar/`, `/de/` — static crawlable profiles
- `/humans.txt` and `/amer-kallajo.vcf` — human/contact metadata

## Deployment truth

The repository is deployable as a Vite static site and contains Netlify routing and security headers. As of the 2026-08-31 audit, the GitHub repository had no verified homepage, GitHub Pages binding, deployment environment, or canonical production domain. For that reason this version intentionally does not invent a canonical site URL or claim that a live deployment exists.

Before launch:

1. bind the repository’s `master` branch to the chosen host;
2. verify the real HTTPS production URL;
3. add that absolute URL to canonical, Open Graph, JSON-LD, sitemap, and `hreflang` tags;
4. verify the deployed HTML, JSON resources, headers, responsive layouts, and social preview;
5. submit the final sitemap only after the canonical origin is stable.

## Public contact

- Email: [Amerkallajoo@gmail.com](mailto:Amerkallajoo@gmail.com)
- WhatsApp: [+49 172 3773552](https://wa.me/491723773552)

Personal context is included only when it explains professional persistence. Private identities, private contact details, legal specifics, and family details are excluded.

## License and reuse

The Human API **format, schema, prompts, and documentation** are reusable under [MIT](LICENSE). Personal identity data and portfolio media are not granted for unrelated reuse merely because the repository is public. Fork the structure; replace the person and evidence.

Human API is an experiment. Its success criterion is not visibility. It is better routing.
