var phoneDetailPageObj = function () {
    this.gotoPage = function (phoneUrl) {
        browser.get('http://localhost:8000/#' + phoneUrl);
    };

    this.verifyPhoneName = function (name) {
        expect(element(by.binding('phone.name')).getText()).toBe(name);
    };
};

module.exports = new phoneDetailPageObj(); 
