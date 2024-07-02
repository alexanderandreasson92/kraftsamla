Feature: Login_Kraftsamla

    Scenario: Login
        Given I visit the start page
        When I click on the login button
        And I enter my credentials
        Then I expect to be logged in 