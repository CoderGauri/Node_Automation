import {test , expect} from '@playwright/test'

test('Login Test' , async({page})=> {
    //actions
await page.goto('https://practicetestautomation.com/practice-test-login/');
await page.getByLabel('username').fill('student');
await page.getByLabel('password').fill('Password123');
await page.getByRole('button' ,{name:"Submit"}).click();
//assertions
await expect(page.getByText('Logged In Successfully')).toBeVisible();
await expect(page).toHaveURL(/logged-in-successfully/);
})