Feature: Add Pengguna KasirAja

Scenario Outline: As a user, I can add a Pengguna

    Given I am on the login page
    When I login with <username> and <password>
    When I should see my account dashboard
    When I click button Pengguna
    When I see a path of Pengguna
    When I click button tambah
    When I type nama <nama>
    When I type email <email>
    When I type password <password>
    Then I should see a success message<message>

    Examples:
      | username                | password             | message          | nama | email           | password   |
      | ferandaannisa@yahoo.com | anferfer03           | item ditambahkan | Auto | auto@yahoo.com  | auto123    |