import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {

  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').fill('Password123');

  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page).toHaveURL(/logged-in-successfully/);
  await expect(page.getByText('Logged In Successfully')).toBeVisible();
});

test("Invalid test" , async({page})=> {
await page.goto('https://practicetestautomation.com/practice-test-login/');
 await page.getByLabel('Username').fill('student1');
  await page.getByLabel('Password').fill('Password1234');

  await page.getByRole('button', { name: 'Submit' }).click();

  //await expect(page).toHaveURL(/logged-in-successfully/);
  await expect(page.getByText('Your username is invalid!')).toBeVisible();
});

test("open google" , async({page})=>{
  await page.goto('https://www.google.com/');
  await page.getByRole('textbox',{name:'search'}).fill('Playwright automation');
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/search/);
  await expect(page.locator('h3')).toContainText(/playwright/)
})

test('open dropdown' , async({page})=>{
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  const dropdown = page.locator('#dropdown');
  await dropdown.selectOption('2')
  await expect(dropdown).toHaveValue('2');
})
