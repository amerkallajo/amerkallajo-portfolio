import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readJson = async (path) => JSON.parse(await readFile(new URL(path, import.meta.url), 'utf8'));

test('Human API capability evidence references resolve', async () => {
  const profile = await readJson('../public/human-api.json');
  const ledger = await readJson('../public/evidence.json');
  const evidenceIds = new Set(ledger.evidence.map((entry) => entry.id));

  for (const capability of profile.capabilities) {
    for (const evidenceId of capability.evidence) {
      assert.ok(evidenceIds.has(evidenceId), `${capability.id} references missing ${evidenceId}`);
    }
  }
});

test('public profile exposes only the intended direct contacts', async () => {
  const profile = await readJson('../public/human-api.json');
  const serialized = JSON.stringify(profile);

  assert.equal(profile.contact.email, 'Amerkallajoo@gmail.com');
  assert.equal(profile.contact.whatsapp, 'https://wa.me/491723773552');
  assert.doesNotMatch(serialized, /\+?963|968908292/);
});
