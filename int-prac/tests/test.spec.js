import {test , expect} from '@playwright/test';
import { LoginPage } from '../page/LoginPage';

// test('basic login test' , async({page})=>{
//     await page.goto('https://example.com/login');
//     await page.fill('#username', 'testuser');
//     await page.fill('#password', 'password123');
//     await page.click('#loginBtn');
//     await expect(page).toHaveURL(/Dashboard/);
// })

test ('Valid Test' , async({page})=>{
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('student', 'Password123');
    await expect(page).toHaveURL(/logged-in-successfully/);
})
