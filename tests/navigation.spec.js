import { expect, test } from "@playwright/test";
import { config } from "dotenv";
//TODO: bk trenger jeg denne?
config();

test.describe("navigation", () => {
  test("should navigate from homepage to venue details page", async ({
    page,
  }) => {
    await page.goto("/");
    const venues = page.locator("#venue-container a");
    await expect(venues.first()).toBeVisible();

    await venues.first().click();

    await expect(page).toHaveURL(/venue/i);

    await expect(page.locator("h1")).toContainText(/Venue details/i);
  });
});
