const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');



module.exports = defineConfig({
  projectId: 'e18uoi',
  chromeWebSecurity: false,
  
  
  
  e2e: {
    baseUrl: 'https://www.otorio.com/',
    experimentalSessionAndOrigin: true,
    pageLoadTimeout: 90000,



    
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
    env:{
      url: "https://www.otorio.com/"

    },
    "retries": {
      // Configure retry attempts for `cypress run`
      // Default is 0
      "runMode": 1

    },

  

  },
});

