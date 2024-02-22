import { test, expect } from '@playwright/test';

import PlaywrightWrapper from './PlaywrightWrapper';

test('Example Test', async ({ page }) => {
    const wrapper = new PlaywrightWrapper(page);

    await wrapper.goto('https://www.ngpf.org/bank-sim/home?returnUrl=%2F');

    await wrapper.waitAndClick('button#exampleButton');

    const pageTitle = await page.title();
    expect(pageTitle).toContain('Expected Title');
});
