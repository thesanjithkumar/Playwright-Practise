import { test, expect } from '@playwright/test';

test('secret sauce demo practice as standard user sinlge order', async ({ page }) => {
  const product = process.env.npm_config_product;
  // console.log(product)
  // const products = 'Sauce Labs Bike Light';
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
  test("form interaction", async ({ page }) => {
    await page.getByText("Forms").click();
    await page.getByText("Practice Form").click();
    await page.getByPlaceholder("First").fill("Test");
    await page.getByPlaceholder("Last").fill("User");
    await page.getByPlaceholder("name@example.com").fill("test@gmail.com");
    await page.getByText('Male', { exact: true }).click();
    await page.getByPlaceholder("Mobile").fill("12345678990");
    await page.locator("#dateOfBirthInput").fill("17 dec 2001");
    await page.keyboard.press("Enter")
    // await page.locator("#subjectsInput").fill("Test subject");
    // await page.keyboard.press("Tab");
    await page.getByText("Sports").click();
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator("#uploadPicture").click()
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('sample.png');
    await page.getByPlaceholder("Current Address").fill("Delhi");
    await page.getByText("Select State").click();
    await page.getByText("NCR").click();
    await page.getByText("Select City").click();
    await page.getByText("Delhi").click()
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    await page.screenshot({ path: "form.png", fullPage: true });
    await page.getByText("Close").click();
  })
  test("book store", async ({ page }) => {
    await page.getByText("Book Store Application").click();
    await page.getByRole("button", { name: "Login" }).click();
    await page.getByPlaceholder("UserName").fill("testuser");
    await page.getByPlaceholder("Password").fill("Passw0rd!");
    await page.getByRole("button", { name: "Login" }).click();
    await page.getByText("Git Pocket Guide").click();
    await page.getByRole("button", { name: "Add To Your Collection" }).click();
    // page.on('dialog', async dialog => {
    //   // Verify type of dialog
    //   // expect(dialog.type()).toContain('alert');

    //   // verify message of alert
    //   expect(dialog.message()).toContain('Book added to your collection.');

    //   //click on alert ok button
    //   await dialog.accept();
    // });
    // await page.getByRole("button", { name: "OK" }).click()
    await page.getByText("Profile").click();
    await page.getByRole('button', { name: 'Delete All Books' }).click();
    await page.getByRole("button", { name: "OK" }).click()
    // page.on('dialog', async dialog => {
    //   // Verify type of dialog
    //   // expect(dialog.type()).toContain('alert');

    //   // verify message of alert
    //   expect(dialog.message()).toContain('All Books deleted.');

    //   //click on alert ok button
    //   await dialog.accept();
    // });
    await page.getByText("Book Store", { exact: true }).click();
    await page.getByRole("button", { name: "Log out" }).click();
  })
})