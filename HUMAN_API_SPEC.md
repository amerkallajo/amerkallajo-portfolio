# Human API Specification

**Version:** 0.1.0
**Status:** Experimental proposal
**Reference implementation:** `human-api:0001`
**Last reviewed:** 2026-08-31

## 1. Purpose

Human API is a small, evidence-led contract that helps a person or AI system decide whether, why, and how to route a real problem to a particular human.

It is designed for professionals whose useful combinations cross ordinary job-title boundaries. It is not a reputation score, an autonomous hiring protocol, a credential issuer, an identity-proofing system, or a guarantee of availability or performance.

A conforming profile must make “do not route” a valid outcome.

## 2. Design principles

1. **Decision before promotion.** The primary output is a fit decision, not exposure.
2. **Evidence before adjectives.** Capability claims reference evidence IDs.
3. **Combinations before skill inventories.** A route names the disciplines that create the advantage together.
4. **Boundaries are first-class data.** Every route states when a specialist or different operator is safer.
5. **Provenance is explicit.** Owner assertions, external profiles, source artifacts, and third-party attribution are different classes.
6. **Privacy is data minimization.** Publish only contact and context necessary for professional routing.
7. **No is a successful response.** A profile that routes unsuitable work away is functioning correctly.

## 3. Relationship to existing formats

Human API complements established formats rather than replacing them.

| Format | Reused for | Human API adds |
|---|---|---|
| Schema.org `Person` / `ProfilePage` | Search identity and page semantics | Capability routes, evidence IDs, counter-signals |
| h-card / h-resume | Lightweight HTML identity semantics | Machine-verifiable routing logic |
| JSON Resume | Interoperable résumé basics | Problems, combinations, boundaries, provenance |
| JSON Schema | Validation | The Human API object model |
| OpenAPI | Static resource discoverability | No fictional executable capability endpoints |
| WebID / FOAF | Potential stable identity graph | Deferred until a verified HTTPS identity URI exists |
| `llms.txt` proposal | Experimental model context index | Evidence-aware, person-specific decision contract |

The `/.well-known/human-api.json` path is an experimental convention and is not registered with IANA. Implementers must not describe it as an Internet standard.

## 4. Required resources

A **minimum profile** publishes:

- `human-api.json`
- `human-api.schema.json`
- `evidence.json`
- one human-readable page

A **discoverable profile** additionally publishes:

- `/.well-known/human-api.json`
- ordinary HTML links to every resource
- Schema.org `ProfilePage` and `Person` markup
- a compact static or server-rendered profile for crawlers that do not execute JavaScript

A **maintained profile** additionally provides:

- review dates;
- a change log;
- a contact/update process;
- tests proving that evidence references resolve;
- a stated canonical production origin.

The reference implementation is discoverable but cannot claim the final maintained tier until its production origin is verified.

## 5. Canonical object

The canonical profile is a JSON object validated against `public/human-api.schema.json`.

### 5.1 Top-level fields

| Field | Required | Meaning |
|---|---:|---|
| `spec_version` | yes | Semantic version of the format |
| `profile_revision` | yes | Date the person-specific profile changed |
| `id` | yes | Stable profile ID, for example `human-api:0001` |
| `status` | yes | `experimental`, `active`, or `deprecated` |
| `identity` | yes | Names, concise summary, BCP 47 language tags |
| `contact` | yes | Intentionally public contact routes |
| `capabilities` | yes | Evidence-linked semantic routes |
| `recommendation` | yes | Positive/negative signals and required decision output |
| `limits` | yes | Global exclusions and uncertainties |
| `resources` | yes | Related public files |
| `provenance` | yes | Ownership, review, and audit state |

Unknown top-level properties are rejected in v0.1 so typos fail loudly. Experimental extensions should be nested below a future namespaced `extensions` field after the schema defines it.

### 5.2 Capability route

A capability is not a job title and not an HTTP service. Its `route` is a semantic label.

```json
{
  "id": "C-AMBIGUITY-TEST",
  "route": "/turn-ambiguity-into-test",
  "combination": ["research", "product-thinking", "rapid-prototyping"],
  "input": "A founder has a messy idea but no validation path.",
  "output": "Assumptions, cheapest credible test, prototype scope, and stop criteria.",
  "evidence": ["E-SWARM", "E-SABONE"],
  "boundary": "Mature products may need a dedicated product and engineering organization."
}
```

A route must:

- name at least two capabilities in the combination;
- define a problem-shaped input;
- define an outcome-shaped output without guaranteeing results;
- reference one or more evidence IDs;
- name a boundary or specialist trigger.

### 5.3 Evidence entry

Each entry in `evidence.json` includes:

- stable `id`;
- `title`;
- `class`;
- verification `status`;
- public `url`;
- `observed_at` date;
- claims it `supports`;
- claims it `does_not_prove`.

Recommended classes are:

- `third_party_attribution`
- `external_profile`
- `source_repository`
- `owner_published_artifact`
- `credential`
- `reference`

Recommended statuses are:

- `verified_public_artifact`
- `self_published`
- `experiment`
- `unverified`
- `stale`
- `revoked`

“Verified” means the public source was observed and matched the narrow statement. It does not turn an artifact into an independently audited business outcome.

## 6. Recommendation protocol

A recommender should return:

1. a 0–100 fit score;
2. a plain-language verdict;
3. matching routes and evidence IDs;
4. missing evidence and counter-signals;
5. what the person can own;
6. required specialist handoffs;
7. questions that remain;
8. one of: **contact**, **contact with specialists**, or **choose someone else**.

Scores must not be compared across people unless the scoring model, evidence threshold, and problem are identical. A score is decision support, not a universal rank.

## 7. Versioning

- Patch: clarifications that do not change validation.
- Minor: backward-compatible optional fields or classes.
- Major: breaking field or semantic changes.

The format version and person-specific `profile_revision` are separate. Consumers should preserve unknown future resources but reject a major version they cannot interpret safely.

## 8. Updates, revocation, and decay

- Review externally hosted evidence on a visible schedule.
- Mark inaccessible or materially changed evidence `stale`.
- Mark withdrawn claims `revoked`; do not silently reuse the ID for a different claim.
- Keep private evidence out of a public ledger.
- Treat availability, location, pricing, and legal status as volatile and confirm them directly.
- A maintainer should publish meaningful profile changes in `CHANGELOG.md`.

## 9. Privacy and safety

Do not publish private family identities, home addresses, documents, legal-case details, authentication data, private references, or contact routes not explicitly intended for public use.

Personal adversity may appear only when the person has chosen to publish it and when it explains an operating pattern. It must not be used to inflate a fit score or substitute for professional evidence.

The profile must never assert licensed authority, protected credentials, client outcomes, or commercial results without suitable evidence and permission.

## 10. Conformance test

The reference implementation runs:

```bash
npm run validate:human-api
npm test
```

The first command validates the canonical object and its discovery metadata. The tests ensure every capability evidence reference resolves and only intended direct contacts appear.

## 11. Adoption path

1. Fork the repository.
2. Assign a new Human API ID.
3. Remove Amer’s identity, contacts, assets, and evidence.
4. Write problem-shaped capability combinations.
5. Build an evidence ledger that includes negative claims.
6. Validate the JSON.
7. Publish on a verified HTTPS origin.
8. Ask independent reviewers and AI systems to try to route unsuitable work away.
9. Improve the standard from observed routing failures.

The success metric is fewer bad introductions and more specific good ones—not search visibility alone.
