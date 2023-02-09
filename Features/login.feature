Feature: Test Login Functionality

  Scenario Outline: user can login with valid credentials
    Given user is on login page
    When user enters <username> and <password>
    And clicks on login button
    Then a success message is displayed

    Examples: 
      | username | password             |
      | tomsmith | SuperSecretPassword! | 


  Scenario Outline: user can't login with invalid credentials
    Given user is on login page
    When user enters <username> and <password>
    And clicks on login button
    Then an error message is displayed

    Examples: 
      | username | password             |
      | user123  | pass123              |
