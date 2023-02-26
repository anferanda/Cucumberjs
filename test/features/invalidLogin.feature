Feature: Login KasirAja

Scenario Outline: As a user, I can't login to the website

    Given I am on the login page
    When I login with <username> and <password>
    Then I get error message<message>

    Examples:
      | username                 | password             | message                            |
      | ferandaannisa@yahoo.com  | anferfer03           | Kredensial yang Anda berikan salah |