var phoneDetailPageObj = function () {
    this.gotoPage = function (phoneUrl) {
        browser.get('http://localhost:8000/#' + phoneUrl);
    };
};

module.exports = new phoneDetailPageObj(); 
