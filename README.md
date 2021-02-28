# semana5PruebasAutomatizadas

Funcionalidad 1
Feature: Shared board connection

  @user1 @web
  Scenario: As a first user I say hi to a second user
    Given I navigate to page "https://www.notebookcast.com/"
    Then I click on element having css selector "a#home-start-drawing-button"
    Then I enter "Kraken1" into input field having id "nickName"
    Then I select option with value "2" for dropdown with id "boardType"
    Then I enter "Example Board" into input field having id "boardTitle"
    Then I click on element having id "createBoardButton"
    Then I store a variable with the current url
    Then I send a signal to user 2 containing "hi"
