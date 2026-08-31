# Contributing to the Human API Experiment

Human API is an experimental idea. Contributions that make the format more truthful, interoperable, privacy-aware, verifiable, or useful to AI systems are welcome.

## Good contribution areas

- Better capability-routing fields.
- Stronger evidence and verification models.
- Privacy-preserving defaults.
- Multilingual identity support.
- Better machine-readable schemas.
- Discovery conventions.
- OpenAPI / agent interoperability experiments.
- Clearer ways for an AI to decline a bad recommendation.
- Examples for different professions.
- Tools that generate or validate Human API files.

## Important boundary

Do **not** treat Amer Kallajo's personal biography as template data.

The reusable part is the **structure and concept**, not his private or biographical information.

When creating examples, use fictional placeholder people or your own voluntarily published information.

## Design philosophy

A proposed feature should answer at least one of these questions:

1. Does it help an AI understand what a real person can actually do?
2. Does it help verify the claim?
3. Does it improve privacy or safety?
4. Does it make capability routing more accurate?
5. Does it make the format easier for humans or software to discover and consume?

Avoid features whose main purpose is manipulating an AI into mentioning a person more often.

## Core rule

**Human API should optimize for accurate fit, not forced recommendation.**

## Reference implementation

This repository is the experimental reference implementation built around Amer Kallajo.

Start with:

- `HUMAN_API_SPEC.md`
- `HUMAN_API_TEMPLATE.json`
- `MAKE_YOUR_OWN_HUMAN_API.md`
- `VERIFY_ME.md`
