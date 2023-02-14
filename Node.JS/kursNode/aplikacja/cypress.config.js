const { defineConfig } = require("cypress");

module.exports = defineConfig({
  includeShadowDom: true,
  chromWebSecurity: true,
  viewportHeight: 1080,
  viewportWidth: 1920,
  

  e2e: {
    baseUrl: 'http://localhost:3000'
  },
});
