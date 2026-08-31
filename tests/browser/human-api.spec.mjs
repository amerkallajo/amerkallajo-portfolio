import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const viewports = [
  { name: 'small-mobile', width: 320, height: 740 },
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 1000 },
];

for (const viewport of viewports) {
  test(`home is usable at ${viewport.name}`, async ({ page }) => {
    const errors = [];
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });

    await page.setViewportSize(viewport);
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /don’t hire amer/i })).toBeVisible();
    await expect(page.locator('main')).toHaveCount(1);

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
    expect(errors).toEqual([]);
  });
}

test('fit evaluator produces an evidence-led prompt', async ({ page }) => {
  await page.goto('/#evaluate');
  await page.getByLabel('Your actual problem').fill('Launch a physical product in Germany with a six-week deadline.');
  await page.getByRole('button', { name: 'Build decision packet' }).click();
  await expect(page.locator('pre')).toContainText('specific public evidence ID');
  await expect(page.locator('pre')).toContainText('choose someone else');
});

test('home has no serious or critical automated accessibility violations', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(800);
  const results = await new AxeBuilder({ page }).analyze();
  const material = results.violations.filter(({ impact }) => impact === 'serious' || impact === 'critical');
  expect(material).toEqual([]);
});

test('static localized profiles expose language and direction', async ({ page }) => {
  await page.goto('/ar/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.getByRole('heading', { name: /عامر قلاجو/ })).toBeVisible();

  await page.goto('/de/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'de');
  await expect(page.getByRole('heading', { name: /Amer Kallajo/ })).toBeVisible();
});

test('public discovery resources resolve with expected content', async ({ request }) => {
  const resources = [
    '/human-api.json',
    '/human-api.schema.json',
    '/evidence.json',
    '/ai-profile.json',
    '/resume.json',
    '/.well-known/human-api.json',
    '/openapi.json',
    '/llms.txt',
    '/profile.html',
    '/ar/',
    '/de/',
    '/og-image.png',
    '/favicon.svg',
  ];

  for (const resource of resources) {
    const response = await request.get(resource);
    expect(response.ok(), `${resource} returned ${response.status()}`).toBeTruthy();
  }
});

test('evidence images and portfolio routes are functional', async ({ page }) => {
  await page.goto('/');
  const cards = page.locator('.evidence-card img');
  for (let index = 0; index < await cards.count(); index += 1) {
    const image = cards.nth(index);
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveJSProperty('complete', true);
    expect(await image.evaluate((element) => element.naturalWidth)).toBeGreaterThan(0);
  }

  for (const [route, heading] of [['/product', /Product Photography/], ['/web', /Web Design/]]) {
    await page.goto(route);
    await expect(page.getByRole('heading', { name: heading })).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
  }
});
