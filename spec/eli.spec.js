const { element, browser } = require('protractor');
const chai = require('chai');
const { beforeEach } = require('mocha');
const expect = chai.expect;
const PageFactory = require('../utils/page_objects/pageFactory');
const EC = protractor.ExpectedConditions;

describe('eli am', async function () {
    const getHomePage = await PageFactory.getPage('Home')
    before(async function () {
        browser.waitForAngularEnabled(false);
    });

    beforeEach(async function () {
        getHomePage.open();
        await browser.driver.manage().window().maximize();
        //await PageFactory.getPage('Home').wait(3000);
    });

    it('testing eli am', async function () {
        getHomePage.filterIcon.waitToBeVisible(getHomePage.filterIcon)
        getHomePage.filterIcon.click();
        getHomePage.filterContainer.waitToBeVisible(getHomePage.filterContainer)
        getHomePage.search.click();
        // await PageFactory.getPage('Home').wait(4000);
        getHomePage.searchInput.waitToBeVisible(getHomePage.searchInput)
        getHomePage.searchInput.sendKeys("լամպ\n");
        // await PageFactory.getPage('Home').wait(4000);
        getHomePage.itemLink.waitToBeClickable(getHomePage.itemLink)
        getHomePage.itemLink.click();
        const itemName = await getHomePage.itemName.getText()
        expect(itemName).equal('Լամպ Լուսին');
    });
});