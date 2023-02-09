const { Given, When, Then } = require("@wdio/cucumber-framework");
const Hooks = require("../Steps/hooks");
const homePage = require("../PageObjects/homePage");
const loginPage = require("../PageObjects/loginPage");
const secureAreaPage = require("../PageObjects/secureAreaPage");

const pages = {
  home: homePage,
  login: loginPage,
  secure: secureAreaPage,
};

Given("user is on login page", async () => {
  // await browser.url('https://the-internet.herokuapp.com/')
  console.log("Ahmed");
  await new Hooks().open();
  await homePage.navigateToFormAuthentication();
});

When(/^user enters (.*) and (.*)$/, async (username, password) => {
  await loginPage.userLogin(username, password);
});

When("clicks on login button", async () => {
  await loginPage.userClickSubmit();
});

Then("a success message is displayed", async () => {
  await expect(secureAreaPage.alertMsg).toBeExisting();
  await expect(secureAreaPage.alertMsg).toHaveTextContaining(
    "You logged into a secure area!"
  );
});

Then("an error message is displayed", async () => {
  await expect(secureAreaPage.alertMsg).toBeExisting();
  await expect(secureAreaPage.alertMsg).toHaveTextContaining(
    "Your username is invalid!"
  );
});
