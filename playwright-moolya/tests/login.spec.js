import {test , expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'

test('Valid Login Test' , async({page})=> {
    const loginpage = new LoginPage(page);
    await loginpage.navigate();
    await loginpage.login('Admin' , 'admin123');
    await expect(page).toHaveURL(/dashboard/);
    await expect(loginpage.dashboardHeading).toBeVisible();
})

test ('Invalid Login Test' , async({page})=> {
    const loginpage = new LoginPage(page);
    await loginpage.navigate();
    await loginpage.login('wronguser','weongpassword');

    await expect(page.getByText('Invalid Credentials')).toBeVisible();
})