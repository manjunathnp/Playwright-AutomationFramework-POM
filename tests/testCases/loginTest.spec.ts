import { test, expect } from '@playwright/test'

import { LoginPage } from '../pages/loginPage'
import { HomePage } from '../pages/homePage'
import  BasePage  from '../testBase/basePage';

test("Login-Logout Test-1", async({page})=>{
    const basePage = new BasePage(page);
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await basePage.navigateTo("https://www.saucedemo.com/");
    await basePage.enterData(loginPage.usernameTextField, "standard_user");
    await basePage.enterData(loginPage.passwordTextField, "secret_sauce");
    await basePage.clickElement(loginPage.loginButton);
    expect(homePage.waitForElementToBeVisible(homePage.productsText));

    await basePage.clickElement(homePage.hamburgerMenu);
    await basePage.clickElement(homePage.logoutLink);
    expect(await loginPage.waitForElementToBeVisible(loginPage.loginButton));
});

test("Login-Logout Test-2" , async({page})=>{
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await page.goto("https://www.saucedemo.com/");
    await loginPage.enterUsername("standard_user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickLoginButton();
    expect(homePage.productsTextVisible).toBeTruthy();

    await homePage.clickHamburgerMenu();
    await homePage.clickLogoutLink();
    expect(loginPage.loginButtonVisibility).toBeTruthy();
});

// test("Test3", async ({ page }) => {
//     console.log("This is Test3");
// });
