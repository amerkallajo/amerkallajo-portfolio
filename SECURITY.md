# Security policy

## Supported version

Only the current `master` branch is maintained.

## Report a vulnerability

Do not open a public issue containing secrets, private personal data, or an exploitable vulnerability.

Email [Amerkallajoo@gmail.com](mailto:Amerkallajoo@gmail.com) with:

- the affected file or public URL;
- impact and reproduction steps;
- whether private data is involved;
- a safe way to confirm the fix.

For ordinary non-sensitive bugs, use a GitHub issue.

## Security boundaries

This repository builds a static public site. It has no login, database, payment flow, server-side form handler, or executable “capability” API. The JSON endpoints are static documents.

Deployment headers restrict framing, unnecessary browser permissions, external resource loading, and MIME sniffing. Public contact and professional context are intentional; authentication secrets, home addresses, private family identities, confidential client data, and legal documents are out of scope.

Dependency and contract checks run in CI. GitHub secret scanning and push protection were enabled when last reviewed on 2026-08-31. A zero-alert result is not a guarantee that no secret or vulnerability exists.
