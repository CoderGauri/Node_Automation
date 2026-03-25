import { test, expect } from '@playwright/test';

// test('first test' , async({page})=> {
//     await page.goto('https://www.google.com/')

//     const title = await page.title();
//     console.log(title);
//     await expect(page).toHaveTitle(/google/i)
// })

test('Login Test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.getByRole('button', { name: 'Login' }).click()
    console.log(await page.url());
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});