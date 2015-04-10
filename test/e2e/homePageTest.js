describe('Home Page', function () {
    
    "use strict";
    var hp = require('../e2e/support/homePageObj.js'),
    ptor;

    beforeEach(function () {
        ptor = protractor.getInstance();
        hp.get();
    });

    it('Enter nexus and count the search results', function () {
        hp.searchBox.sendKeys("nexus");
        hp.getSearchResultsCount().then(function (count) {
            expect(count).toBe(1);
        });
        ptor.sleep(3000);
    });
});
