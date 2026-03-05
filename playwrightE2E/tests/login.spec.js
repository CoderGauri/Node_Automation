const {expect , test} = require('@playwright/test');

test('login', async({Page})=> {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
})