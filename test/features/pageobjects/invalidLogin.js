import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import securePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
    await LoginPage.btnSubmit.click();
});

Then(/^I get error message(.+)$/, async (message) => { 
    await expect(securePage.flashAlert).toBeExisting();
    await expect(securePage.flashAlert).toHaveTextContaining(message);
});

