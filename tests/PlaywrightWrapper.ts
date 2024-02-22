import { Page } from '@playwright/test'

export default class PlaywrightWrapper {
  private page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goto(url: string) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' })
  }

  async waitAndClick(locator: string) {
    const element = await this.page.waitForSelector(locator)
    await element.click()
  }

  async navigateTo(link: string) {
    await Promise.all([this.page.waitForNavigation(), this.page.click(link)])
  }
}
