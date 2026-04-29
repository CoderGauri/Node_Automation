import {test , expect } from '@playwright/test'

test('valid login', async({page})=> {
    await page.goto("URL");
     await page.selectOption('#region', { label: 'Colorado' });
    await page.fill('#username' , 'Gauri122@gmail.com');
    await page.fill('#password' , 'Gauri 123');
    await page.click('#ligin')
    await expect(page).toHaveURL(/Dashboard/);
    

})

test('download file' , async({page}) => {
    await page.goto("www.//urUrl.com");
    const [download] =  await promise.all([
        page.waitForEvent('download'),
        page.click('#downloadbtn')
    ])
    const filepath = `download/${download.suggestedFilename()}`;
    await download.saveAs(filepath);
    expect(filepath).toBeTruthy();
})