import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import securePage from '../pageobjects/secure.page.js';
import penggunaPage from '../pageobjects/Pengguna.page.js';

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

When('I should see my account dashboard', async () => { 
    expect(securePage.Container).toExist()
});

When('I click button pengguna', async () => { 
    await penggunaPage.buttonPengguna.click()
});

When('I see a path of pelanggan', async () => { 
    expect(penggunaPage.pathPengguna).toExist()
});

When('I click button tambah', async () => { 
    await (penggunaPage.buttonTambah).click()
});

When(/^I type nama (\w+)$/, async (nama) => { 
    await penggunaPage.inputNama.setValue(nama)
});

When(/^I type nohp (\w+)$/, async (email) => { 
    await penggunaPage.inputEmail.setValue(email)
});

When(/^I type alamat (\w+)$/, async (password) => { 
    await penggunaPage.inputPassword.setValue(password)
});

When('I click button simpan', async () => { 
    await penggunaPage.buttonSimpan.click()
});

Then(/^I should see a success message(.+)$/, async (message) => { 
    await expect(penggunaPage.alertMsg).toBeExisting();
    await expect(penggunaPage.alertMsg).toHaveTextContaining(message);
    // await browser.pause(5000);
});