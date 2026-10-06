# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginFormListener.spec.js >> login >> login functionality test
- Location: tests\loginFormListener.spec.js:5:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Logout' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('button', { name: 'Logout' }) with timeout 5000ms
  - waiting for getByRole('button', { name: 'Logout' })
    - waiting for "http://localhost:5500/" navigation to finish...
    - navigated to "http://localhost:5500/"

```

```yaml
- banner:
  - navigation
- main:
  - heading "Welcome to this site" [level=1]
  - text: Loading...
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
> 15 |     await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
     |                                                                ^ Error: expect(locator).toBeVisible() failed
  16 |   });
  17 | 
  18 |   test("login feil test", async ({ page }) => {
  19 |     await page.goto("/login/");
  20 | 
  21 |     await page.locator('input[name="email"]').fill(process.env.TEST_USERNAME);
  22 |     await page.locator('input[name="password"]').fill("wrongpassword");
  23 | 
  24 |     await page.getByRole("button", { name: "Login" }).click();
  25 | 
  26 |     await expect(page.locator("#message-container")).toContainText(
  27 |       "Invalid email or password",
  28 |     );
  29 |   });
  30 | });
  31 | 
```