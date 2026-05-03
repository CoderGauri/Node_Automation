import {test , expect} from '@playwright/test'

//explicit wait
test('click button', async({page})=> {
    await page.waitForSelector('#myButton' ,{timeout:5000});
    await page.click('#myButton')
})

//auotwait
test('autoclick button' , async({page})=>{
    const button = page.locator('#myButton');
   await  button.click();
})

await expect(page.locator('#btn')).toBeVisible();
await page.click('#btn');

await page.waitForSelector('#btn');
await page.click('btn');