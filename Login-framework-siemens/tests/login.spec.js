// tests/login.spec.js
const { test, expect } = require('../fixtures/baseTest');

test('@smoke Verify user is logged in', async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL(/inventory/);
});