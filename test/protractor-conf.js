exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },


  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  suites : {
      homePage: ['e2e/homePageTest.js' , 'e2e/homePageObj.js'],
      scenes : ['e2e/scenarios.js']
  },
  onPrepare: function() {
       browser.driver.manage().window().maximize();
   }

};
