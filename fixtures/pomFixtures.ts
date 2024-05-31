/*
 *  This file centralizes the setup for page objects, setup and teardown actions
 */

// Imports: Imports the necessary classes and the base test from Playwright.
import {test as baseTest} from '@playwright/test'
import { LoginPage } from '../tests/pages/loginPage'
import { HomePage }  from '../tests/pages/homePage'
import  BasePage  from '../tests/testBase/basePage'

// Type Definition: Defines a pages type that includes basePage, loginPage, and homePage.
type pages = {
    basePage: BasePage,
    loginPage: LoginPage,
    homePage: HomePage,
}

// Extending BaseTest - adds custom fixtures for basePage, loginPage, homePage
const testPages = baseTest.extend<pages>({
    basePage: async({page}, use)=>{
        await use(new BasePage(page));
    },

    loginPage: async({page}, use)=>{
        await use(new LoginPage(page));
    },

    homePage: async({page}, use)=>{
        await use(new HomePage(page));
    }
});

// Setup
testPages.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

// Teardown
testPages.afterEach(async ({ page }) => {
    await page.close();
});

// Export the customized functions allowing other test files to use these extended fixtures
export const test = testPages;
export const expect = testPages.expect;


/* Extends the Playwright test framework with custom page objects */