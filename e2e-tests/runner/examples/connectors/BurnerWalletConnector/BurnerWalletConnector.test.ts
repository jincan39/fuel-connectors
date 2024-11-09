import { getButtonByText, getByAriaLabel, test } from '@fuels/playwright-utils';
import { type Page, expect } from '@playwright/test';

const connectBurner = async (page: Page, walletName = 'Burner Wallet') => {
  await page.bringToFront();
  const connectButton = getButtonByText(page, 'Connect');
  await connectButton.click();
  await getByAriaLabel(page, `Connect to ${walletName}`, true).click();

  await skipBridgeFunds(page);
};

const skipBridgeFunds = async (page: Page) => {
  if (await page.isVisible('text=Bridge Funds')) {
    await page.click('text=Continue to application');
  }
};

test.describe('BurnerWalletConnector', async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.bringToFront();
  });

  test('BurnerWallet Tests', async ({ page }) => {
    await connectBurner(page);

    expect(await page.waitForSelector('text=/Your Fuel Address/')).toBeTruthy();

    await test.step('should connect, disconnect, and reconnect', async () => {
      await page.click('text=Disconnect');
      await page.waitForSelector('text=/Connect Wallet/');

      await connectBurner(page);
      expect(
        await page.waitForSelector('text=/Your Fuel Address/'),
      ).toBeTruthy();
    });

    await test.step('should connect, refresh and stay connected', async () => {
      await page.reload();
      await skipBridgeFunds(page);
      await page.waitForSelector('text=/Your Fuel Address/');
    });

    await test.step('should connect, disconnect, refresh and stay disconnected', async () => {
      await skipBridgeFunds(page);
      await page.click('text=Disconnect');
      await page.waitForSelector('text=/Connect Wallet/');

      await page.reload();
      await page.waitForSelector('text=/Connect Wallet/');
    });
  });
});