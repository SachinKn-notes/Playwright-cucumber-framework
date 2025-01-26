const { expect } = require("@playwright/test");
const { Given, When, Then } = require("@cucumber/cucumber");

Given(/UAT url with siid: (.*)/, async function (siid) {
    this.url = process.env.Cruise + siid;
    console.log(this.getDate("yyyy-MM-dd_HH-mm-ss"));
});

When("Open Browser & Launch the url", async function () {
    await this.page.goto(this.url);
});

Then(/Validate title should be: (.*)/, async function (title) {
    await expect(this.page).toHaveTitle(title);
});

