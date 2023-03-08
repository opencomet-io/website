import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';
import * as os from 'os';

dotenv.config();

const PORT = process.env.PORT || 3000;
const baseURL = `http://localhost:${PORT}`;

// Reference: https://playwright.dev/docs/test-configuration.
const config: PlaywrightTestConfig = {
  testDir: './src/e2e',
  // Maximum time one test can run for.
  timeout: 30 * 1000,
  expect: {
    // Maximum time expect() should wait for the condition to be met.
    timeout: 5000,
  },
  // Run tests in files in parallel
  fullyParallel: true,
  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,
  // Retry on CI only
  retries: process.env.CI ? 2 : 0,
  // Opt out of parallel tests on CI.
  workers: process.env.CI ? 1 : undefined,
  maxFailures: process.env.CI ? 10 : undefined,
  // Reporter to use. See https://playwright.dev/docs/test-reporters
  reporter: process.env.CI ? 'github' : [['html', { open: 'never' }]],
  // Folder for test artifacts such as screenshots, videos, traces, etc.
  outputDir: './test-results',

  // Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions.
  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL,
    // Maximum time each action such as `click()` can take. Defaults to 0 (no limit).
    actionTimeout: 0,
    // Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer
    trace: 'on-first-retry',
  },

  // Run your local dev server before starting the tests
  webServer: {
    command: 'yarn run dev',
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  // Configure projects for major browsers
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Desktop Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },

    // WebKit is not supported on newer Linux distributions
    ...(os.platform() !== 'linux' || process.env.CI
      ? [
          {
            name: 'Desktop Safari',
            use: { ...devices['Desktop Safari'] },
          },
          {
            name: 'Mobile Safari',
            use: { ...devices['iPhone 12'] },
          },
        ]
      : []),
  ],
};

export default defineConfig(config);
