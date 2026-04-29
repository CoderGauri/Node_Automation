const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

 use: {
  browserName: 'chromium',
  channel: 'chrome',   // 👈 VERY IMPORTANT
  headless: false,
},

  //globalSetup: './global-setup.js',

  projects: [
    {
      name: 'Chrome',
      use: { browserName: 'chromium' },
    },
  ],
});