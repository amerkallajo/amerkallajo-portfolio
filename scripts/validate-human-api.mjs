import { readFile } from 'node:fs/promises';
import process from 'node:process';

import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const parse = async (path) => JSON.parse(await readFile(new URL(path, import.meta.url), 'utf8'));
const [schema, profile, ledger, discovery] = await Promise.all([
  parse('../public/human-api.schema.json'),
  parse('../public/human-api.json'),
  parse('../public/evidence.json'),
  parse('../public/.well-known/human-api.json'),
]);

const ajv = new Ajv2020({ allErrors: true });
addFormats(ajv);
const validate = ajv.compile(schema);

if (!validate(profile)) {
  console.error(validate.errors);
  process.exitCode = 1;
}

const evidenceIds = new Set(ledger.evidence.map(({ id }) => id));
const missing = profile.capabilities.flatMap(({ id, evidence }) =>
  evidence.filter((entry) => !evidenceIds.has(entry)).map((entry) => `${id}: ${entry}`),
);

if (missing.length) {
  console.error(`Missing evidence references:\n${missing.join('\n')}`);
  process.exitCode = 1;
}

if (discovery.spec_version !== profile.spec_version || discovery.profile !== '/human-api.json') {
  console.error('Discovery document is not aligned with the canonical Human API profile.');
  process.exitCode = 1;
}

if (!process.exitCode) {
  console.log(`Human API ${profile.spec_version} valid: ${profile.capabilities.length} routes, ${evidenceIds.size} evidence entries.`);
}
