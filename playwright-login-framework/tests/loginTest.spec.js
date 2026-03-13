import {test , expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import {loginData} from '../utils/testData'

test('Valid Login Test',async({page})=>{
const loginPage = new LoginPage(page)
await loginPage.navigate()
await loginPage.login(loginData.username , loginData.password)
await expect(page.locator('.post-title')).toContainText('Logged In Successfully')
})