require('dotnet').config()

module.exports = {
    default : {
        require: [],
        tags: process.env.Tags,
        format: ["json:test-results/CucumberReport.json"],
        parallel: 2,
        retry: 1,
        defaultTimeout: 60000,
        dryRun: false
    },
    worldParameters: {

    }
}