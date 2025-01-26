const {chromium, firefox, webkit} = require("playwright");
const { Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep, setDefaultTimeout } = require('@cucumber/cucumber');
require("dotenv").config();
setDefaultTimeout(60000);

BeforeAll(async function () {});

AfterAll(async function () {});

Before(async function () {
    if (process.env.Browser.toLowerCase() === 'chromium')
        this.browser = await chromium.launch({ headless: process.env.Execute_In_Headless });
    else if (process.env.Browser.toLowerCase() === 'chrome')
        this.browser = await chromium.launch({ headless: process.env.Execute_In_Headless, channel: "chrome" });
    else if (process.env.Browser.toLowerCase() === 'edge')
        this.browser = await chromium.launch({ headless: process.env.Execute_In_Headless, channel: "msedge" });
    else if (process.env.Browser.toLowerCase() === 'firefox')
        this.browser = await firefox.launch({ headless: process.env.Execute_In_Headless });
    else if (process.env.Browser.toLowerCase() === 'webkit')
        this.browser = await webkit.launch({ headless: process.env.Execute_In_Headless });
    
    this.context = await this.browser.newContext({
        viewport: {width: 1707, height: 960},
        acceptDownloads: true,
        screenshot: 'on',
        video: 'off',
        recordVideo: {
            dir: "test-results/Videos/",
            size: {width: 1707, height: 960}
        }
    });
    this.page = await this.context.newPage();

    this.page.setDefaultTimeout(60000);
    this.page.setDefaultNavigationTimeout(60000);

    this.startTime = new Date().getTime();
});

After(async function (scenario) {
    const endTime = new Date().getTime();
    const elapsedTime = endTime - this.startTime;
    const timeTaken = this.convertToMinAndSec(elapsedTime);

    if (scenario.result.status === "FAILED") {
        this.page.waitForTimeout(5000);
        this.attach(await this.page.screenshot({encoding: 'base64'}), "image/png");
    }

    this.attach(`Execution time taken: ${timeTaken.minutes}m ${timeTaken.seconds}s ${timeTaken.milliSeconds}ms`);

    this.browser?.close();
    this.context?.close();
    this.page?.close();
});

BeforeStep(async function () {});

AfterStep(async function () {});
