var homePageObj = function () {

    "use strict";

    this.searchBox = element(by.model('query'));

    this.get = function () {
        browser.get('http://localhost:8000');
    };
    
    this.getSearchResultsCount = function () {
        var phoneList = element.all(by.repeater('phone in phones'));
        return phoneList.count();
    };
};

module.exports = new homePageObj();