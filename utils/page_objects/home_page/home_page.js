const {Element, ElementById, ElementByClass}= require("../base_elements/base_elements");
const BasePage = require("../base_page/base_page");

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = 'https://eli.am/';
        this.filterIcon = new ElementById("filterIcon", "filter_icon");
        this.filterContainer = new ElementById("filterContainer", "filter-field-container");
        this.search = new ElementById("search", "eli-nav-search");
        this.searchInput = new ElementById("searchInput", "s");
        this.itemLink = new Element("itemLink", "(//li[@class='product_cat'])[1]");
        this.itemName = new ElementByClass("itemName", "product_title entry-title");
    }

    open() {
        return super.open(this.url);
    }
}

module.exports = HomePage;