import { Locator, Page } from "@playwright/test";
import BasePage from "../testBase/basePage";
////

export class LoginPage extends BasePage{
    readonly page: Page;
    readonly usernameTextField: Locator;
    readonly passwordTextField: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameTextField = page.locator('[data-test="username"]');
        this.passwordTextField = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }

    async enterUsername(username: string){
        await this.enterData(this.usernameTextField, username);
    }

    async enterPassword(password: string){
        await this.enterData(this.passwordTextField, password);
    }

    async clickLoginButton(){
        await this.clickElement(this.loginButton);
    }

    async loginButtonVisibility(){
        await this.loginButton.isVisible();
    }
}