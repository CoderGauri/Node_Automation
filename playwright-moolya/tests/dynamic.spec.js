import {test , expect} from '@playwright/test'

test('dynamic element' , async({page})=> {
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
    await page.getByRole('button',{name : 'Start'}).click();
    const text = page.locator('#finish h4')
    await expect(text).toBeVisible()
    await expect(text).toHaveText('Hello World !');
})