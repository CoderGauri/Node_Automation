import {test , expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'
import {loginData} from '../utils/testData'

let loginPage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    await loginPage.navigate()
})
test('@smoke Valid Login Test',async({page})=>{
const loginPage = new LoginPage(page)
await loginPage.navigate()
await loginPage.login(loginData.username , loginData.password)
await expect(page.locator('.post-title')).toContainText('Logged In Successfully')
await expect(page.locator('.post-title')).toBeVisible()
await expect (page).toHaveURL(/logged-in-successfully/)
})

// test('@regression  Invalid Login Test' , async({page})=>{
//     const loginPage = new LoginPage(page)
//     await loginPage.navigate();
//     await loginPage.login('wrongUser' , 'wrongPassword')
//     console.log(await page.content())
//     //validation
// await expect(loginPage.getErrorMessage()).toContainText('Your username is invalid!')
//     await expect(loginPage.getErrorMessage()).toContainText('Your username is invalid')
// })
//category

test('@regression Invalid Login Test', async ({ page }) => {

const loginPage = new LoginPage(page)

await loginPage.navigate()

await loginPage.login('wrongUser', 'wrongPassword')

// Wait for error
await page.waitForSelector('#error')

// Validation
await expect(page.locator('#error'))
    .toHaveText('Your username is invalid!')

})