const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/index.js',
    setupNodeEvents(on, config) {
      // Čia galima pridėti papildomus pluginus
    },
  },
});  
