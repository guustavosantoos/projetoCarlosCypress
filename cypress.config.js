const { defineConfig } = require("cypress");



module.exports = defineConfig({
  integration: {
    setupNodeEvents(on, config) {},
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl:"https://inovafactory.com.br/sistema/public/",
    viewportWidth: 1280,
    viewportHeight: 920,
  },

  


});
