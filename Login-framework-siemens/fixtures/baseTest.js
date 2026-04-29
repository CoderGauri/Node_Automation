// fixtures/baseTest.js
const base = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const data = require('../data/login.json');

exports.test = base.test.extend({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(data.username, data.password);
    await use(page);
  },
});

exports.expect = base.expect;