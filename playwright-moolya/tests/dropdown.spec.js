import { test, expect } from '@playwright/test'

test('dropdown test', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/dropdown');
    //await page.locator('#dropdown').selectText({label : 'Option 2'});
    const dropdown = page.locator('#dropdown');

    await dropdown.selectOption('2');
    await page.locator('.form-control').selectOption('20');
    await page.locator('#country').selectOption({ label: 'India' })
    // const value = await dropdown.selectOption('2');
    // console.log('Selected Value:', value)
    //await expect(page.locator('#dropdown')).toHaveValue('2');
    await expect(dropdown).toHaveValue('2');

})