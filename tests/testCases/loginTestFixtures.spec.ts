import { test, expect } from "../../fixtures/pomFixtures";

test("Login-Logout Test",{tag: ['@Smoke', '@Regression']}, async({ page, basePage, loginPage, homePage })=>{
    /*
    await basePage.navigateTo("https://www.saucedemo.com/");
    await basePage.enterData(loginPage.usernameTextField, "standard_user");
    await basePage.enterData(loginPage.passwordTextField, "secret_sauce");
    await basePage.clickElement(loginPage.loginButton);
    expect(homePage.waitForElementToBeVisible(homePage.productsText));

    await basePage.clickElement(homePage.hamburgerMenu);
    await basePage.clickElement(homePage.logoutLink);
    expect(await loginPage.waitForElementToBeVisible(loginPage.loginButton))*/
    
    
    //await page.goto("https://www.saucedemo.com/");
    await loginPage.enterUsername("standard_user");
    await loginPage.enterPassword("secret_sauce");
    await loginPage.clickLoginButton();
    expect(homePage.productsTextVisible).toBeTruthy();

    await homePage.clickHamburgerMenu();
    await homePage.clickLogoutLink();
    expect(loginPage.loginButtonVisibility).toBeTruthy();
});