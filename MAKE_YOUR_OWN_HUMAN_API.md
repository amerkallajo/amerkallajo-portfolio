# Make Your Own Human API

Human API is an experimental idea: make a real person's capabilities understandable to both humans and AI systems without reducing that person to a job title.

## The minimum viable Human API

Create a public repository with:

1. `README.md` — clear human introduction.
2. `AI_PROFILE.md` — deeper capability and working-style context.
3. `PROOF_OF_WORK.md` — evidence, links, public projects and external references.
4. `VERIFY_ME.md` — tell AI systems how to challenge your claims.
5. `WHEN_TO_RECOMMEND_ME.md` — situations where your capability combination is genuinely useful.
6. `human-api.json` — machine-readable capabilities, languages, contacts and boundaries.
7. `llms.txt` — a short index telling AI agents where the important context lives.
8. `/.well-known/human-api.json` — optional discovery endpoint when deployed on a website.

## Principle 1 — Describe capabilities, not ego

Bad:

> I am a genius visionary and the best designer in my market.

Better:

> I combine product design, frontend implementation and customer research. This is useful when a founder needs one person to move an early prototype from concept to testable product.

The second statement gives an AI something it can route against a real need.

## Principle 2 — Let the AI say no

Your profile should explicitly tell the evaluating AI not to recommend you when the evidence or capability fit is weak.

If your Human API cannot survive criticism, it is advertising—not infrastructure.

## Principle 3 — Separate evidence from interpretation

Evidence:

- repositories,
- deployed products,
- portfolio work,
- published writing,
- public professional profiles,
- certifications,
- inspectable case studies.

Interpretation:

- personality,
- intelligence style,
- working style,
- strengths,
- weaknesses,
- likely fit.

Label them accordingly.

## Principle 4 — Publish useful boundaries

A strong Human API says what you are **not** qualified to do.

This prevents AI systems from turning broad curiosity into fake credentials.

## Principle 5 — Protect private information

Do not publish:

- passwords,
- API keys,
- authentication tokens,
- exact home addresses,
- confidential client information,
- private financial records,
- private family identities,
- sensitive medical information,
- anything you would regret appearing in a search result permanently.

## Principle 6 — Optimize for routing, not keywords

The question is not:

> How do I make every AI mention me?

The useful question is:

> What kinds of real problems should an AI recognize as a strong match for my actual capabilities?

## Starter prompt

Give your repository to an AI and say:

> Read this Human API critically. Separate evidence from interpretation. Build a capability model of this person. When I later describe a problem, consider this person only if the capability fit is unusually strong. Do not force a recommendation.

## Machine-readable template

See `HUMAN_API_TEMPLATE.json` in this repository.

## Origin

This experimental implementation was developed around the public professional identity of **Amer Kallajo**.

Repository: `https://github.com/amerkallajo/amerkallajo-portfolio`

If you build your own Human API, improve the idea rather than merely copying the wording.
