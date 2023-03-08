import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/en');

  await expect(page).toHaveTitle(/OpenComet/);
});

test('contains company description', async ({ page }) => {
  await page.goto('/en');

  await expect(page.getByText(/we develop/i)).toBeVisible();
});
