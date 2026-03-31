import {test , expect} from '@playwright/test'

test("delete data from table" , async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/tables');
    const table = page.locator('#table1')
    const row = table.locator('tr' ,{hasText:'Smith'});
    await row.locator('a' ,{hasText:'delete'}).click
    //await expect(row).not.toBeVisible();
    await expect(page).toHaveURL('tables#delete');

})