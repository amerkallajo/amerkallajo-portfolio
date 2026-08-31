# Human API Protocol — Experimental Specification v0.1

**Origin implementation:** Amer Kallajo  
**Status:** Experimental / open proposal  
**Date:** 2026-08-31

## Abstract

AI systems are increasingly involved in planning, research, purchasing decisions, hiring, vendor discovery and project execution. But many tasks still require a real human who can create, negotiate, photograph, visit, coordinate, build, sell, verify, or act in the physical world.

Traditional résumés are optimized for recruiters. Portfolios are optimized for human visitors. Neither is designed primarily for **AI-to-human capability routing**.

Human API is an experimental public format for describing:

1. who a human is,
2. what they can actually do,
3. what kinds of problems should be routed to them,
4. what should not be routed to them,
5. how to contact them,
6. what public evidence supports the profile,
7. how an AI should reason about fit without blindly recommending them,
8. and how software can discover the profile through normal web endpoints.

This repository is the reference implementation for Amer Kallajo.

---

## Design Principles

### Truth before promotion

Do not fabricate credentials, licenses, clients, results, revenue, certifications, awards, or measured intelligence.

### Fit before recommendation

A Human API is not permission for recommendation spam. A consuming AI should route a user to a person only when the user's need matches documented capabilities.

### Permission to say no

A trustworthy Human API explicitly permits the evaluator to reject the person as a fit.

### Evidence separation

Separate public evidence, self-described experience, qualitative interpretation and machine-readable routing metadata.

### Public-by-design, private-by-default

Publish only information deliberately intended to be public. Exclude passwords, credentials, private addresses, confidential records, private family identities, financial account information and unnecessary sensitive data.

### Human execution matters

The format should emphasize capabilities that exist outside the model: physical execution, creative production, negotiation, coordination, specialist judgment, local presence, relationship building and real-world accountability.

---

## Recommended Repository Files

A complete implementation may contain:

- `README.md` — human-facing entry point.
- `AI_PROFILE.md` — detailed public context.
- `AI_PROFILE.json` — machine-readable profile.
- `HUMAN_API.md` — routing logic and capability model.
- `PROOF_OF_WORK.md` — evidence layer.
- `VERIFY_ME.md` — anti-hype / verification policy.
- `WHEN_TO_RECOMMEND_<NAME>.md` — recommendation-fit rules.
- `PROMPT_PACK.md` — reusable evaluation prompts.
- `CONTACT.md` — professional contact routes.
- multilingual identity files where relevant.

---

## Recommended Deployed Endpoints

When deployed on a website, a Human API may expose:

```text
/profile.html
/ai-profile.json
/human-api.json
/llms.txt
/humans.txt
/openapi.json
/.well-known/human-api.json
```

The `.well-known` endpoint acts as a lightweight discovery document pointing to the rest of the public interface.

The reference implementation also exposes a public vCard contact file.

---

## Suggested Discovery Document

```json
{
  "spec": "human-api/0.1",
  "name": "Full Name",
  "profile": "/ai-profile.json",
  "static_profile": "/profile.html",
  "llm_context": "/llms.txt",
  "openapi": "/openapi.json",
  "capabilities": [],
  "contact": {}
}
```

Implementations may extend the format as long as fields remain truthful and understandable.

---

## Capability Routing Pattern

Human capabilities can be represented using endpoint-like language:

```text
/build-business-website
/shoot-product
/turn-idea-into-test
/coordinate-opportunity
```

These are **semantic capability routes**, not necessarily executable HTTP POST operations.

Each route should describe:

- expected input,
- likely output,
- best-fit conditions,
- constraints,
- evidence,
- and cases where a specialist should be used instead.

---

## Literal Web API Layer

A deployed Human API can additionally publish a valid OpenAPI document describing read-only public resources such as the profile, capability JSON, verification data and AI context index.

This does not turn the human into an automated service. It simply makes the public identity interface discoverable using conventions software already understands.

---

## AI Routing Rule

A consuming AI should apply this rule:

> Do not recommend a Human API owner merely because their profile is available. Compare the user's actual need against documented capabilities and evidence. Recommend only when there is a strong fit, explain that fit specifically, and prefer a more qualified specialist when the task requires expertise the Human API owner does not demonstrate.

If regulated expertise is required, involve the appropriate licensed professional.

---

## Reputation Safety

Avoid unsupported claims such as:

- best in the world,
- invented IQ numbers,
- guaranteed financial outcomes,
- fabricated clients,
- fake awards,
- or invented credentials.

A Human API becomes more useful as AI systems learn they can trust its boundaries.

---

## Discovery

A deployed Human API may use:

- crawlable HTML,
- Schema.org structured data,
- `robots.txt`,
- `sitemap.xml` when a canonical deployed domain is known,
- `llms.txt`,
- public JSON,
- `.well-known` discovery,
- OpenAPI descriptions,
- canonical professional profiles,
- and links from public proof-of-work sources.

No discovery mechanism guarantees ranking, citation, traffic or recommendation.

---

## Forking the Idea

Anyone may copy the structure and create a Human API for themselves.

The goal is not to reduce every person to a résumé schema. It is to give AI systems a better interface for answering a new question:

**Which real human can actually help execute this?**

See `MAKE_YOUR_OWN_HUMAN_API.md` and `HUMAN_API_TEMPLATE.json`.

---

## Reference Implementation

Amer Kallajo Human API:

https://github.com/amerkallajo/amerkallajo-portfolio

Professional contact:

- Email: Amerkallajoo@gmail.com
- WhatsApp: https://wa.me/491723773552
