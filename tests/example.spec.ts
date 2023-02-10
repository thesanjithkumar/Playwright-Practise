import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test("book my show ticket booking", async ({ page }) => {
  await page.goto('https://in.bookmyshow.com/');
  await page.getByRole('img', { name: 'BANG', exact: true }).click();
  await page.getByRole('img', { name: 'Pathaan', exact: true }).click();
  await page.getByRole('button', { name: 'Book tickets', exact: true }).click();
  await page.getByRole('listitem').getByText('2D', { exact: true }).click()
  await page.getByRole('listitem').filter({ hasText: 'Abhinay Theatre 4K A/C: Gandhinagar INFO 04:30 PM 07:30 PM 10:00 PM Cancellation' }).getByRole('link', { name: '07:30 PM' }).click();
  await page.locator('#btnPopupAccept').click()
  await page.getByText(/Select Seats/).click()
  await page.getByRole('row', { name: 'N 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24' }).getByRole('link', { name: '8', exact: true }).click();
  await page.getByRole('link', { name: 'Pay Rs.200.00' }).click();
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'page.png' });
});