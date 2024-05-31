import { Locator, Page } from "@playwright/test";
import BasePage from "../testBase/basePage";

export class HomePage extends BasePage{
    readonly page: Page;
    readonly hamburgerMenu: Locator;
    readonly productsText: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page){
        super(page);
        this.hamburgerMenu = page.getByRole('button', { name: 'Open Menu' });
        this.logoutLink = page.locator('[data-test="logout-sidebar-link"]');
        this.productsText = page.locator('[data-test="title"]');
    }

    async productsTextVisible(){
        await this.productsText.isVisible();
    }

    async clickHamburgerMenu(){
        await this.hamburgerMenu.click({timeout: 20_000});
    }

    async clickLogoutLink(){
        await this.logoutLink.click();
    }
}

