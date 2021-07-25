const EC = protractor.ExpectedConditions;

class BasePage {

    wait(element) {
        return browser.sleep(waitInMilliseconds);
    }

    open(url) {
        return browser.get(url);
    }
}

module.exports = BasePage;