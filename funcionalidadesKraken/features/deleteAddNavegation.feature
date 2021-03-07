Feature: add a option

  @user1 @web
  Scenario: As a user existent I should have the add option, and it should be aviable.
    Given I navigate to page "http://localhost:2368/ghost/#/settings/design"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
	Then I click on element having className "gh-blognav-add"

	
	
  @user2 @web
  Scenario: As a user existent I can delete the first navegation link.
    Given I navigate to page "http://localhost:2368/ghost/#/settings/design"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
	Then I click on element having className "gh-blognav-delete"



