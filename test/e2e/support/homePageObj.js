var homePageObj = function () {

    "use strict";

    this.searchBox = element(by.model('query'));

    this.getPage = function () {
        browser.get('http://localhost:8000');
    };
    
    this.getSearchResultsCount = function () {
        var phoneList = element.all(by.repeater('phone in phones'));
        return phoneList.count();
    };
    
    this.clickFirstSearchResult = function () {
        element.all(by.css('.phones li a')).first().click();  
    };
    
    this.verifyUrl = function (urlToMatch) {
        browser.getLocationAbsUrl().then(function(url) {
            expect(url.split('#')[1]).toBe(urlToMatch);
        });
    };
    
    this.verifySearchResults = function (searchResults) {
        var phoneNameColumn = element.all(by.repeater('phone in phones')
                                        .column('phone.name')),
        items = phoneNameColumn.map(function(elm) {
                return elm.getText();
        });

        expect(items).toEqual(searchResults);
    };
};

module.exports = new homePageObj();