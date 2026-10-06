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
    2 × waiting for "http://localhost:5500/" navigation to finish...
      - navigated to "http://localhost:5500/"

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
  - heading "Welcome to this site" [level=1]
  - link:
    - /url: /venue/?id=a0a8da1f-4ed2-464d-b7c5-56f7c2105d18
  - link:
    - /url: /venue/?id=e75a61fe-dbdb-4c6a-9935-8399a003a1b6
  - link:
    - /url: /venue/?id=f5e1bd43-ede6-4e96-85ec-49b2401bbf48
  - link:
    - /url: /venue/?id=1d17d7a8-b299-4a8c-94e0-6bdb6cd3cbf7
  - link:
    - /url: /venue/?id=561e92d1-48d1-4a43-a674-0f93b5e21bd1
  - link:
    - /url: /venue/?id=26813c53-5e7b-4f89-ab30-8479a7699649
  - link:
    - /url: /venue/?id=23519b73-b8f7-40a7-a5d2-1dbbb225e0dd
  - link:
    - /url: /venue/?id=8f3a72b0-0f10-41d5-854a-a39921da9045
  - link:
    - /url: /venue/?id=d3643ec5-c61e-4a1a-a93b-b2aa3eb6894b
  - link:
    - /url: /venue/?id=45ac47d2-54d3-4255-b2b8-ddd4f39885f4
  - link:
    - /url: /venue/?id=135198a1-6a6c-4246-8ba8-932f6aa0ae92
  - link:
    - /url: /venue/?id=4c57b4a9-0af9-4a6a-8ada-1782e2ddb3a7
  - link:
    - /url: /venue/?id=51b30f8f-2f44-4b2c-ba87-518cde2a2087
  - link:
    - /url: /venue/?id=938e0108-c326-412b-b1fe-7d00a36f42ae
  - link:
    - /url: /venue/?id=8a982a86-a581-46cb-a81f-449b58f452a6
  - link:
    - /url: /venue/?id=c1c3ec82-e503-4b0a-a840-0215c764ddc6
  - link:
    - /url: /venue/?id=fa24591c-9434-4e09-b830-0f3edd5300d2
  - link:
    - /url: /venue/?id=59221c30-3ff3-4d1b-ba16-7187ae745b1b
  - link:
    - /url: /venue/?id=9794669c-3a58-4c56-9572-18f5bce6432c
  - link:
    - /url: /venue/?id=7064e450-0bf9-4203-be55-e661c79e8795
  - link:
    - /url: /venue/?id=8e825164-bd87-49cb-bfec-bb1cd9830be9
  - link:
    - /url: /venue/?id=4aff8fbb-3d91-477a-8609-1c4745d0d724
  - link:
    - /url: /venue/?id=1a7af917-d074-46be-a4fa-ab9f3758eb23
  - link:
    - /url: /venue/?id=bed10b1f-b7f0-4725-b64a-fe60d6bc1767
  - link:
    - /url: /venue/?id=8a1c3e2b-feb2-4d9b-9fad-da47723e5ae7
  - link:
    - /url: /venue/?id=d429c3f9-f179-45d7-b075-861dd9f26379
  - link:
    - /url: /venue/?id=f3377377-aa71-4b72-a92c-07ef768af20f
  - link:
    - /url: /venue/?id=cbc22983-2409-49eb-9c57-4db2606c5c33
  - link:
    - /url: /venue/?id=a3f21765-1f78-41aa-aafb-e685b26d62aa
  - link:
    - /url: /venue/?id=27b2ab35-38b1-4e5b-bf04-84d90837d51d
  - link:
    - /url: /venue/?id=5acc2124-336c-473c-8dbe-ac7378a18a94
  - link:
    - /url: /venue/?id=7d3eab6f-858f-49bb-b4b9-83ae1c9d02ac
  - link:
    - /url: /venue/?id=0c4874b6-10a1-4980-9bff-3addc1438277
  - link:
    - /url: /venue/?id=c7a097b5-3de8-4e43-aa80-784f5acdb458
  - link:
    - /url: /venue/?id=8d75739a-1b5b-4c4e-ab1a-a9180adb0e96
  - link:
    - /url: /venue/?id=3325c693-ff4c-4dab-bdb4-a7c473c8adb7
  - link:
    - /url: /venue/?id=3e51b9c0-be13-4e09-8feb-7895349fec97
  - link:
    - /url: /venue/?id=6947b55e-835c-410c-9046-aeef4d26e99d
  - link:
    - /url: /venue/?id=b4546e81-b161-4ec2-9dd8-3ae21e7b8279
  - link:
    - /url: /venue/?id=204c14f1-e16c-4ffd-9790-a60dd84d8ba6
  - link:
    - /url: /venue/?id=4f09c224-1dcc-41b8-a6a1-84c4f00b207e
  - link:
    - /url: /venue/?id=753ecc5f-4321-4b9b-94a8-d34fc217dd8a
  - link:
    - /url: /venue/?id=dcacda5b-1b64-411f-b08c-53a57a6b2185
  - link:
    - /url: /venue/?id=3ba24e75-d670-4851-9f04-192b585b17df
  - link:
    - /url: /venue/?id=b290355a-4212-4e4c-ad8d-3fb19f0647ea
  - link:
    - /url: /venue/?id=8087acec-3ba4-4234-8558-1bd71aee0a0d
  - link:
    - /url: /venue/?id=f71b04f0-7fa1-4d24-a064-179d0acd26e4
  - link:
    - /url: /venue/?id=7961b2ba-a038-4250-9877-7002cd77037a
  - link:
    - /url: /venue/?id=52c76a50-e7de-4189-8501-f7d1e64fa06c
  - link:
    - /url: /venue/?id=159e7b5e-2eba-4670-af49-7afb21c1465d
  - link:
    - /url: /venue/?id=38eee3b0-6195-4052-b321-08a1040b6f2f
  - link:
    - /url: /venue/?id=53b7ba25-e6e0-43f4-8e63-9a69f70ecaad
  - link:
    - /url: /venue/?id=1cfa088c-71b7-486b-a280-5aca28d17561
  - link:
    - /url: /venue/?id=feecebf1-3c2f-4890-a274-12dc646f2292
  - link:
    - /url: /venue/?id=c42b620d-d886-4d38-99b3-a3c8e6dd5846
  - link:
    - /url: /venue/?id=bf76a515-edf0-4c21-b57c-f383577a4465
  - link:
    - /url: /venue/?id=175a3934-fa9d-4448-a9e9-59be283f08db
  - link:
    - /url: /venue/?id=9020fe6a-6a2d-402e-88c2-2f26272ade94
  - link:
    - /url: /venue/?id=1fdf7377-b8a5-42eb-9e8d-09a4c0ce443a
  - link:
    - /url: /venue/?id=de9384eb-2163-4e78-bda5-11678c5fc6dd
  - link:
    - /url: /venue/?id=42e97f2a-6a52-4921-a403-26abed73d386
  - link:
    - /url: /venue/?id=940e55bd-8c27-43b9-9a6b-65f0f1ed2c0b
  - link:
    - /url: /venue/?id=560888ac-a10f-4ef1-9fd5-0bf8094ea082
  - link:
    - /url: /venue/?id=6e5b5aeb-728d-4703-9df4-55d19b20e68d
  - link:
    - /url: /venue/?id=9af9de40-6015-4dd1-a72c-88434401417d
  - link:
    - /url: /venue/?id=7d8c01dd-7443-4f7e-9ce3-6855e89bb461
  - link:
    - /url: /venue/?id=5fc12992-c704-415b-b9b1-95a7bf8302bf
  - link:
    - /url: /venue/?id=e8ea8df4-ff0b-49fb-9ebc-1d24c901dcd5
  - link:
    - /url: /venue/?id=9ae3eb27-bca4-4820-9bd5-46d332378c61
  - link:
    - /url: /venue/?id=e1710586-580a-4ae2-96f4-3f2d0bd9128f
  - link:
    - /url: /venue/?id=40c69904-f7b1-4c1e-9fd2-3a4dd4b6cd55
  - link:
    - /url: /venue/?id=b69d6c6a-efb4-4472-ace0-9535e4ee35e1
  - link:
    - /url: /venue/?id=a8adeef5-0fb0-43ef-98f1-818acea01e82
  - link:
    - /url: /venue/?id=566d27e0-8fae-42d5-a34d-5a92a4f37ccb
  - link:
    - /url: /venue/?id=4b5757ce-cbe7-4b03-a01a-0686dd3dad34
  - link:
    - /url: /venue/?id=532fa587-c0c8-448e-b2da-5993ba7d6fd1
  - link:
    - /url: /venue/?id=8b4ba718-01ac-4abb-8b2d-b8b225dc87ee
  - link:
    - /url: /venue/?id=f9db075f-26f3-419d-b40e-f2145ade4802
  - link:
    - /url: /venue/?id=073b7cc8-7ee6-4a9b-8295-c5153e9bb6b9
  - link:
    - /url: /venue/?id=2c5cd1f2-da10-46d3-9f73-567c2d83e157
  - link:
    - /url: /venue/?id=85a5a9b8-ef5c-4ab1-8c5f-e9eb4948adfd
  - link:
    - /url: /venue/?id=76a46bb7-7ac0-4f39-ab07-43057b7af809
  - link:
    - /url: /venue/?id=5081c98e-0c65-4359-a337-6ef016cc0160
  - link:
    - /url: /venue/?id=3f0f0154-632c-48dc-bb8c-771eff00e217
  - link:
    - /url: /venue/?id=98a30b07-482c-4385-b587-94a225cd3d29
  - link:
    - /url: /venue/?id=b32ac75e-6cd3-458e-bfc9-dde8baf28b4f
  - link:
    - /url: /venue/?id=0f841894-1977-49f4-a242-6455d0d6d5aa
  - link:
    - /url: /venue/?id=49f51a2c-868d-4bb2-a3ee-fc7100a8d9a8
  - link:
    - /url: /venue/?id=3d10f8c3-0dcd-4793-852e-f77f487621f9
  - link:
    - /url: /venue/?id=2fcdafb3-9d55-4ccc-81c9-ec09754d7967
  - link:
    - /url: /venue/?id=a3425920-49b1-4b17-9f5a-f99134f517d5
  - link:
    - /url: /venue/?id=5dd88dbf-93f9-4be2-b680-a4bb998eb1f7
  - link:
    - /url: /venue/?id=1cc74a6a-d651-49ca-8047-597f5de5c483
  - link:
    - /url: /venue/?id=92601d02-5d36-4bc3-8aa0-49ad164bf3c6
  - link:
    - /url: /venue/?id=759c7ee1-f6fc-49e5-9edd-346ed2dc4905
  - link:
    - /url: /venue/?id=d4a570d9-6763-4e06-8d78-e29ec2afb8b9
  - link:
    - /url: /venue/?id=3d549204-ee7e-4bdb-9b17-114412465ca9
  - link:
    - /url: /venue/?id=fd41e24c-0fe0-4519-b5da-9ddd5b97a505
  - link:
    - /url: /venue/?id=126e5a27-9765-4587-8515-73ac4e55d52f
  - link:
    - /url: /venue/?id=189e6c43-0885-4b45-83dd-5ae4521915f2
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