const HomePage = require('./home_page/home_page');

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case 'Home':
                return new HomePage();
        }
    }
}

module.exports = PageFactory;