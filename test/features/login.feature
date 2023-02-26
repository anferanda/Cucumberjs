Feature: Login KasirAja

  Scenario Outline: As a user, I can log in to the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see my account dashboard

    Examples:
      | username                | password  |
      | ferandaannisa@yahoo.com | anferfer03|
