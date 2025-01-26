const reporter = require("cucumber-html-reporter");
const { format } = require("date-fns");

const today = format(new Date(), "yyyy-MM-dd_HH-mm-ss");

reporter.generate({
    theme: "bootstrap",
    jsonFile: "test-results/CucumberReport.json",
    output: `test-results/HtmlReports/CucumberReport${today}.html`,

    launchReport: true,
    ignoreBadJsonFile: true,

    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    storeScreenshots: false,
    noInlineScreenshots: false,
    screenshotsDirectory: 'test-results/Screenshots/',

    brandTitle: "Automation Report",
    name: "Cruise tests",

    metadata: {
        "App Version": process.env.App_Version,
        "Test Environment": process.env.Test_Environment,
        "Browser": process.env.Browser,
        "Platform": process.env.Platform,
    }
});