const {test , expect} = require('@playwright/test')

test("Valid Login",async({page})=>{
    await page.goto('https://example.com/login');
 await page.fill('#username','validUser');
 await page.fill('#password','validPassword');
 await page.locator('#loginBtn').click();
 await expect(page).toHaveURL(/dashboard/);
 await expect(page.locator('#welcomeMsg')).toHaveText('Welcome , valid user')
})