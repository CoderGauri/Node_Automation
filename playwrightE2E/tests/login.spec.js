const {expect , test} = require('@playwright/test');

test('login', async({Page})=> {
    await Page.goto('https://practicetestautomation.com/practice-test-login/');
    await Page.locator("input[name='username']").type("student");
    await Page.locator("input[name='password']").type("Password123")
    await Page.locator("(//button[normalize-space()='Submit'])[1]").click();
})