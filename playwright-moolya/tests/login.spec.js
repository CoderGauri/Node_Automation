import {test , expect} from '@playwright/test'
//import {loginData} from '../utils/testData'
import {LoginPage} from '../pages/LoginPage'
import {ENV} from '../utils/env'


test('Valid Login Test' , async({page})=> {
    const loginpage = new LoginPage(page);
    await loginpage.navigate();
    await loginpage.login(ENV.username , ENV.password);
    await expect(page).toHaveURL(/dashboard/);
    await expect(loginpage.dashboardHeading).toBeVisible();
})

test ('Invalid Login Test' , async({page})=> {
    const loginpage = new LoginPage(page);
    await loginpage.navigate();
    await loginpage.login('wronguser','weongpassword');

    await expect(page.getByText('Invalid Credentials')).toBeVisible();
})

const response = await request.post('api/login' , {
    data:{
        usename: 'Admin',
        password: 'admin123'

    }
})

