const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.konga.com",
    viewportWidth: 1450,
    viewportHeight: 900,
    testIsolation: false,
    defaultCommandTimeout: 15000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
