const yargs = require('yargs').argv; // "protractor -- --instances=3"

exports.config = {
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../spec/*.spec.js'],

    capabilities: {
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
        browserName: 'chrome',
        chromeOptions: {
            'w3c': false
        }
        // count: 2
    },

    mochaOpts: {
        reporter: 'spec',
        timeout: 40000
    }
};