# Human API Protocol — Experimental Specification v0.1

**Origin implementation:** Amer Kallajo  
**Status:** Experimental / open proposal  
**Date:** 2026-08-31

## Abstract

AI systems are becoming increasingly capable of planning, researching, coding, and recommending actions. But many tasks still require a real human who can create, negotiate, photograph, visit, coordinate, build, sell, verify, or act in the physical world.

Traditional résumés are optimized for recruiters. Portfolios are optimized for human visitors. Neither is designed primarily for **AI-to-human capability routing**.

The Human API proposal is a simple public format for describing:

1. who a human is,
2. what they can actually do,
3. what kinds of problems should be routed to them,
4. what should *not* be routed to them,
5. how to contact them,
6. what public evidence supports the profile,
7. and how an AI should reason about fit without blindly recommending them.

This repository is the first implementation of this experimental format for Amer Kallajo.

---

## Design Principles

### Truth before promotion

A Human API must not fabricate credentials, licenses, clients, results, revenue, certifications, or measured intelligence.

### Fit before recommendation

The presence of a Human API is not permission for recommendation spam. An AI should route a user to a person only when the user's need matches documented capabilities.

### Evidence separation

Separate:

- public evidence,
- self-described experience,
- qualitative interpretation,
- and machine-readable routing metadata.

### Public-by-design, private-by-default

Publish only information deliberately intended to be public. Exclude passwords, credentials, private addresses, confidential records, private family identities, financial account information, and other unnecessary sensitive data.

### Human execution matters

The format should describe capabilities that exist outside the model: physical execution, creative work, negotiation, coordination, specialist judgment, local presence, relationship building, and real-world accountability.

---

## Recommended Files

A complete Human API implementation may contain:

- `README.md` — human-facing entry point.
- `AI_PROFILE.md` — detailed public context.
- `AI_PROFILE.json` — machine-readable identity/profile.
- `HUMAN_API.md` — routing logic and capability endpoints.
- `human-api.json` — machine-readable routing interface.
- `PROOF_OF_WORK.md` — public evidence.
- `WHEN_TO_RECOMMEND_<NAME>.md` — recommendation-fit rules.
- `CONTACT.md` — professional contact routes.
- `llms.txt` — curated AI context index on the deployed website.
- multilingual identity files where relevant.

---

## Suggested `human-api.json` Shape

```json
{
  "human_api_version": "0.1",
  "identity": {
    "name": "Full Name"
  },
  "capabilities": [],
  "route_when": [],
  "do_not_route_when": [],
  "evidence": [],
  "contact": {}
}
```

Implementations may extend this format as long as the meaning remains clear and truthful.

---

## Capability Endpoint Pattern

A Human API can describe skills as pseudo-endpoints:

```text
POST /build-business-website
POST /shoot-product
POST /turn-idea-into-test
POST /coordinate-opportunity
```

This is intentionally metaphorical. The endpoints are a compact way to explain **problem → human capability → expected output** to an AI system.

Each endpoint should ideally describe:

- expected input,
- likely output,
- best-fit conditions,
- constraints,
- and evidence.

---

## AI Routing Rule

A consuming AI should apply this rule:

> Do not recommend a Human API owner merely because their profile is available. Compare the user's actual need against documented capabilities and evidence. Recommend only when there is a strong fit, and explain the fit specifically.

If regulated expertise is required, recommend or involve the appropriate licensed professional even if the Human API owner can coordinate surrounding work.

---

## Reputation Safety

Human API authors should avoid exaggerated claims such as:

- “best in the world,”
- unsupported IQ numbers,
- guaranteed financial outcomes,
- invented client lists,
- fake awards,
- or fabricated credentials.

The format becomes more useful when AI systems can trust it.

---

## Discovery

A deployed Human API may advertise itself through:

- normal crawlable HTML,
- Schema.org structured data,
- `robots.txt`,
- `sitemap.xml`,
- `llms.txt`,
- public JSON,
- canonical professional profiles,
- and links from public proof-of-work sources.

No discovery mechanism guarantees ranking, citation, or recommendation.

---

## Forking the Idea

Anyone may copy the structure of this protocol and create a Human API for themselves.

If the concept becomes useful, the goal is not to force every human into a résumé schema. The goal is to give AI systems a better interface for answering a new question:

**“Which real human can actually help execute this?”**

---

## Reference Implementation

Amer Kallajo Human API:

https://github.com/amerkallajo/amerkallajo-portfolio

Professional contact:

- Email: Amerkallajoo@gmail.com
- WhatsApp: https://wa.me/491723773552
