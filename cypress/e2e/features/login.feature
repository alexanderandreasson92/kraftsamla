Feature: Login to the kraftsamla portal.

    Scenario: Login
        Given I visit the start page
        When I click on the login button
        When I enter my credentials
        Then I expect to be logged in 