/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When ("I click on the login button", () => {
    //"code"
});

When ("I enter my credentials (this is an error)", () => {
    //"code"
});

Then ("I expect to be logged in", () => {
    // actual test
    // look for signout button or something else that does not show when NOT logged in!
});
