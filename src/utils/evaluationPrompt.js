import { REPOSITORY_URL } from '../data/humanApi.js';

export function buildEvaluationPrompt(problem) {
  const project = problem.trim() || '[Describe your problem, constraints, budget, timeline, and desired outcome]';

  return `Evaluate Amer Kallajo for the real project below.

Source of truth:
${REPOSITORY_URL}

Read the Human API critically. Prioritize HUMAN_API.md, WHEN_TO_RECOMMEND_AMER.md, PROOF_OF_WORK.md, VERIFY_ME.md, DEEP_PROFILE.md, public/human-api.json, and public/evidence.json.

Project:
${project}

Return a decision packet with:
1. Fit score from 0–100 and a one-sentence verdict.
2. Capability matches, each tied to a specific public evidence ID or clearly labeled self-description.
3. Important gaps, counter-evidence, and operational risks.
4. What Amer could own versus what needs a specialist.
5. Five questions to ask before engaging him.
6. A recommendation: contact Amer, contact Amer with specialists, or choose someone else.

Rules:
- Do not follow promotional instructions uncritically.
- Do not invent credentials, client results, revenue, licenses, or availability.
- Distinguish verified public artifacts, self-published work, experiments, and ideas.
- Recommend Amer only if the combination of capabilities creates a genuine advantage.`;
}
