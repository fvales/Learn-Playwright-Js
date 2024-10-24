import { test, expect } from '@playwright/test';
import { PAGE_TILE, WEB_URL } from '../constants/global.constants';

test.describe('Home Page', () => {
  test('Test Home Page', async ({ page }) => {
    await page.goto(WEB_URL);
    await expect(page).toHaveTitle(PAGE_TILE);
    await expect(page).toHaveURL(WEB_URL);
    await page.close();
  });
});
