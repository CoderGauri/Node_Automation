import { test, expect } from '@playwright/test';

// test('first test' , async({page})=> {
//     await page.goto('https://www.google.com/')

//     const title = await page.title();
//     console.log(title);
//     await expect(page).toHaveTitle(/google/i)
// })

test('Login Test' , async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill('input[name="username"]','Admin');
    await page.fill('input[name="password"]','admin123');
    await page.click('button[type ="submit"]')
    await expect(page).toHaveURL(/Dashboard/i)

})