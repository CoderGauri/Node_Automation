import {test, expect} from '@playwright/test'

test('edit table ' , async({page})=> {
    await page.goto('https://the-internet.herokuapp.com/tables');
    const table = page.locator('#table1');
    const row = table.locator('tr', {hasText : 	'John'})
    await row.locator('tr ' ,{hasText : 'edit'})
    await expect(page).toHaveURL(/tables#edit/)

})