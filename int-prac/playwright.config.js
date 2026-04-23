const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  retries: 1,

  use: {
    browserName: 'chromium',
    channel: 'chrome', // 👈 THIS IS THE FIX
    headless: false,   // start with false for debugging
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  }
});