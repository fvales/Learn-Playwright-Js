import { test, expect } from '@playwright/test';
import { WEB_URL } from '../constants/global.constants';

test('Locators', async ({ page }) => {
  await page.goto(WEB_URL);
  await page.locator('id=login2').click();

  await page.locator('id=loginusername').fill('freeda');
  await page.locator('id=loginpassword').fill('freeda');

  await page.locator('button', { hasText: 'Log in' }).click();
  const logOutBtn = page.locator('a', { hasText: 'Log out' });
  await expect(logOutBtn).toBeVisible();

  await page.close();
});
