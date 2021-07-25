const EC = protractor.ExpectedConditions;
const logger = require('../../../config/logger.config');

class Element {
    constructor(elementName, xpath) {
        this.elementName = elementName;
        this.element = element(by.xpath(xpath));
    }

    click() {
        logger.info(`I am clicking on ${this.elementName} button which is taken by XPATH`)
        return this.element.click();
    }

    waitToBeVisible() {
        return browser.wait(EC.visibilityOf(this.element), 15000)
    }

    waitToBeClickable() {
        logger.info(`I am clicking on ${this.elementName} button which is taken by XPATH`)
        return browser.wait(EC.elementToBeClickable(this.element), 15000)
    }
}

class ElementById {
    constructor(elementName, id) {
        this.elementName = elementName;
        this.element = element(by.id(id));
    }

    click() {
        logger.info(`I am clicking on ${this.elementName} button which is taken by ID`)
        return this.element.click();
    }

    waitToBeVisible() {
        logger.info(`I am waiting for ${this.elementName} button to be visible which is taken by ID`)
        return browser.wait(EC.visibilityOf(this.element), 15000)
    }

    waitToBeClickable() {
        return browser.wait(EC.elementToBeClickable(this.element), 15000)
    }

    isDisplayed() {
        return this.element.isDisplayed();
    }

    sendKeys(input) {
        logger.info(`I am entering ${this.elementName} text`)
        return this.element.sendKeys(input);
    }
}

class ElementByClass {
    constructor(elementName, name) {
        this.elementName = elementName;
        this.element = element(by.className(name));
    }

    waitToBeVisible() {
        return browser.wait(EC.visibilityOf(this.element), 15000)
    }

    waitToBeClickable() {
        return browser.wait(EC.elementToBeClickable(this.element), 15000)
    }

    getText() {
        logger.info(`I am getting ${this.elementName} text`)
        return this.element.getText();
    }
}

module.exports = {
    ElementById,
    Element,
    ElementByClass
};