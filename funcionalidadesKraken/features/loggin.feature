Feature: loggion a paltform

  @user1 @web
  Scenario: As a user existent I can login succesfull with mail account and my password
    Given I navigate to page "http://localhost:2368/ghost"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"


  @user2 @web 
  Scenario: As a user don't existent I can't login succesfull with mail account and my password
   Given I navigate to page "http://localhost:2368/ghost"
    Then I enter "juan.oliveros@initiatve.com" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
