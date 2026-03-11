// 
const { test, expect } = require('@playwright/test');

test("Valid Login", async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.fill('#username', 'student');
    await page.fill('#password', 'Password123');

    await page.click('#submit');

    await expect(page).toHaveURL(/logged-in-successfully/);

});