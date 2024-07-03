/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given ("I visit the start page", () => {
    cy.visit('/'); //visit baseUrl
});