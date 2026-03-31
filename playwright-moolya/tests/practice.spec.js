import {test , expect} from '@playwright/test'

test('Login Senario' , async({page})=> {
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    const username = await page.locator('#username').fill('student');
    const password = await page.locator('#password').fill('Password123');
    await page.getByRole('button' , {name :'Submit'}).click();
    await expect(page).toHaveURL(/logged-in-successfully/)
    
})
await page.getByText('product 3').click()