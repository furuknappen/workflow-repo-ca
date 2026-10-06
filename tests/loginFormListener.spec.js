import { expect, test } from "@playwright/test";
import { config } from "dotenv";
config();
test.describe("login", () => {
  test("login functionality test", async ({ page }) => {
    await page.goto("/login/");

    await page.locator('input[name="email"]').fill(process.env.TEST_USERNAME);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_PASSWORD);

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("login feil test", async ({ page }) => {
    await page.goto("/login/");

    await page.locator('input[name="email"]').fill(process.env.TEST_USERNAME);
    await page.locator('input[name="password"]').fill("wrongpassword");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
