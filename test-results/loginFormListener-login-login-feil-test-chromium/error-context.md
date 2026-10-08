# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginFormListener.spec.js >> login >> login feil test
- Location: tests\loginFormListener.spec.js:18:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#message-container')
Expected substring: "Invalid email or password"
Received string:    ""
Timeout: 5000ms

Call log:
  - Expect "toContainText" locator('#message-container') with timeout 5000ms
  - waiting for locator('#message-container')
    14 × locator resolved to <div class="mb-4" id="message-container"></div>
       - unexpected value ""

```

```yaml
- banner:
  - navigation:
    - navigation:
      - link "Logo":
        - /url: /
      - link "Home":
        - /url: /
      - link "Login":
        - /url: /login
      - link "Register":
        - /url: /register
- main:
  - heading "Login" [level=1]
  - group:
    - textbox "Email"
    - textbox "Password"
    - button "Login"
```

# Test source

```ts
  1  | import { expect, test } from "@playwright/test";
  2  | import { config } from "dotenv";
  3  | config();
  4  | test.describe("login", () => {
  5  |   test("login functionality test", async ({ page }) => {
  6  |     await page.goto("/login/");
  7  | 
  8  |     await page.locator('input[name="email"]').fill(process.env.TEST_USERNAME);
  9  |     await page
  10 |       .locator('input[name="password"]')
  11 |       .fill(process.env.TEST_PASSWORD);
  12 | 
  13 |     await page.getByRole("button", { name: "Login" }).click();
  14 | 
  15 |     await expect(page.getByRole("button", '[id="logoutButton"]')).toBeVisible();
  16 |   });
  17 | 
  18 |   test("login feil test", async ({ page }) => {
  19 |     await page.goto("/login/");
  20 | 
  21 |     await page.locator('input[name="email"]').fill(process.env.TEST_USERNAME);
  22 |     await page.locator('input[name="password"]').fill("wrongpassword");
  23 | 
  24 |     await page.getByRole("button", { name: "Login" }).click();
  25 |     // await page.pause();
  26 | 
> 27 |     await expect(page.locator("#message-container")).toContainText(
     |                                                      ^ Error: expect(locator).toContainText(expected) failed
  28 |       "Invalid email or password",
  29 |     );
  30 |   });
  31 | });
  32 | 
```