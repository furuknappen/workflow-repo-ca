import { expect, test } from "@playwright/test";
import { config } from "dotenv";
//TODO: bk trenger jeg denne
config();

test.describe("navigation", () => {
  test("should navigate to homepage", async ({ page }) => {
    await page.goto("/");

    const venues = page.locator("#venue-container a");
    await expect(venues.first()).toBeVisible();

    await venues.first().click();

    expect(page).toHaveURL(/venue/i);
    // await page.locator('input[name="email"]')

    // page.locator("#venue-container")[0]

    await expect(page.locator("h1")).toContainText(/Venue details/i);
  });
});

// Navigates to the home page
// Waits for the venue list to load
// Clicks the first venue
// Verifies that the venue details page loads with "Venue details" in the heading
