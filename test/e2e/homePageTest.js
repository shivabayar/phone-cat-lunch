describe('Home Page', function () {
    
    "use strict";
    var homePage = require('../e2e/support/homePageObj.js'),
    homeDetailPage = require('../e2e/support/phoneDetailPageObj.js'),
    ptor;

    beforeEach(function () {
        ptor = protractor.getInstance();
        homePage.getPage();
    });

    it('Enter nexus and count the search results', function () {
        homePage.searchBox.sendKeys("nexus");

        homePage.getSearchResultsCount().then(function (count) {
            expect(count).toBe(1);
        });
        homePage.clickFirstSearchResult();
        homePage.verifyUrl('/phones/nexus-s');
        ptor.sleep(2000);
    });

    it('Enter nexus and count the search results', function () {
        homePage.searchBox.sendKeys("motorola");

        homePage.getSearchResultsCount().then(function (count) {
            expect(count).toBe(8);
        });
        homePage.clickFirstSearchResult();
        ptor.sleep(2000);
    });

    it('should go to nexus page', function () {
        homeDetailPage.gotoPage('/phones/nexus-s');
        homeDetailPage.verifyPhoneName('Nexus S');
        ptor.sleep(2000);
    });

    it('should verify search results for tablets', function () {
        homePage.searchBox.sendKeys("tablet");
        homePage.verifySearchResults(["Motorola XOOM\u2122 with Wi-Fi","MOTOROLA XOOM\u2122"]);
        ptor.sleep(2000);
    });
});
