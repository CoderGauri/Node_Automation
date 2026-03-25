import { defineConfig, devices } from '@playwright/test';
import {ENV} from './utils/env'

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  workers: 3,

  use: {
    headless: false,
    baseURL: ENV.baseURL
  },

  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});