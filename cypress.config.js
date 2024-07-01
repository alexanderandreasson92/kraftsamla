const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const webpack = require("@cypress/webpack-preprocessor");
const mainUrl = "http://www.google.se";

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: 'kraftsamla',
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  video: false,

  e2e: {
    specPattern: "**/features/**/*.feature",  
    baseUrl: mainUrl,    
    setupNodeEvents,
    experimentalStudio: true
  },
})

