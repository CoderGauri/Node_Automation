const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: 'https://example.com', // replace with real app
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
}); 