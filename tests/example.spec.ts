import { test, expect } from '@playwright/test';

test('secret sauce demo practice as standard user sinlge order', async ({ page }) => {
  // const product = process.env.npm_config_product;
  // console.log(product)
  const product = 'Sauce Labs Bike Light';
  await page.goto("https://www.saucedemo.com/", { waitUntil: "commit" });
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByText("Login").click();
  await page.getByText(new RegExp(`${product}`)).click();
  await page.getByRole("button", { name: "Add to cart" }).click();
  await page.getByRole("button", { name: "BACK TO PRODUCTS" }).click();
  await page.locator(".shopping_cart_link").click()
  await page.getByRole("button", { name: "CHECKOUT" }).click();
  await page.getByPlaceholder("First Name").fill("Test");
  await page.getByPlaceholder("Last Name").fill("User");
  await page.getByPlaceholder("Zip").fill("123456");
  await page.getByRole("button", { name: "CONTINUE" }).click()
  await page.screenshot({ path: "checkout.png", fullPage: true })
  await page.getByRole('button', { name: "FINISH" }).click();
  await page.getByRole("button", { name: "BACK HOME" }).click();
})


test("sample login", async ({ page }) => {
  await page.goto("https://demo.applitools.com/", { waitUntil: "commit" });
  await page.getByPlaceholder("Username").fill("Test User");
  await page.getByPlaceholder("Password").fill("Password");
  await page.getByRole("checkbox", { name: "Remember Me" }).click();
  await page.getByRole("link", { name: "Sign in" }).click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: "Afterlogin.png", fullPage: true });
})



test.describe("website interaction on demoqa", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://demoqa.com/", { waitUntil: 'commit' });
  })
  test("book store", async ({ page }) => {
    await page.getByText("Book Store Application").click();
    await page.getByRole("button", { name: "Login" }).click();
    await page.getByPlaceholder("UserName").fill("testuser");
    await page.getByPlaceholder("Password").fill("Passw0rd!");
    await page.getByRole("button", { name: "Login" }).click();
    await page.getByText("Git Pocket Guide").click();
    await page.getByRole("button", { name: "Add To Your Collection" }).click();
    await page.getByText("Profile").click();
    await page.getByRole('button', { name: 'Delete All Books' }).click();
    await page.getByRole("button", { name: "OK" }).click()
    await page.getByText("Book Store", { exact: true }).click();
    await page.getByRole("button", { name: "Log out" }).click();
  })
})

test('Personal Website test', async ({ page }) => {
  await page.goto("https://sanjithkumar.tech", { waitUntil: 'commit' });
  await page.click("text=.project()");
  await page.getByAltText("TEACH QUIZ USING REACT JS").click();
  await page.waitForSelector("text=TEACH QUIZ USING REACT JS");
  await page.waitForTimeout(4000)
  await page.screenshot({ path: "TEACH QUIZ USING REACT JS.png", fullPage: true });
})