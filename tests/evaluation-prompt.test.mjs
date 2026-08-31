import assert from 'node:assert/strict';
import test from 'node:test';

import { buildEvaluationPrompt } from '../src/utils/evaluationPrompt.js';

test('evaluation prompt preserves the problem and demands evidence', () => {
  const prompt = buildEvaluationPrompt('Launch a German food product in six weeks.');

  assert.match(prompt, /Launch a German food product in six weeks\./);
  assert.match(prompt, /specific public evidence ID/);
  assert.match(prompt, /Do not invent credentials/);
  assert.match(prompt, /choose someone else/);
});

test('evaluation prompt supplies a useful placeholder for empty input', () => {
  const prompt = buildEvaluationPrompt('   ');

  assert.match(prompt, /Describe your problem, constraints, budget, timeline/);
});
