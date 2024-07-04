import { Locator, Page } from '@playwright/test';

export default class BasePage{
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async navigateTo(url: string){
        await this.page.goto(url);
    }

    async enterData(element: Locator, data: string){
        await element.pressSequentially(data);
    }
    async clickElement(element: Locator){
        await element.click();
    }

    async getElementText(element: Locator): Promise<string>{
        return element.innerText();
    }

    async waitForElementToBeVisible(element: Locator){
        await element.isVisible();
    }

    async waitForElementHidden(selector: string){
        await this.page.waitForSelector(selector, { state: 'hidden'});
    }

    async takeScreenshot(filename: string){
        await this.page.screenshot({path: filename});
    }

}