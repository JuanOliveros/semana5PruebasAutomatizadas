Feature: Shared board connection

  @user1 @web
  Scenario: As a user existent I can delete logo
    Given I navigate to page "http://localhost:2999/ghost"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
	Then I click on element having link_text "General"
	Then I click on element having className "gh-setting-action-smallimg-delete"
	


  @user2 @web 
  Scenario:  As a user existent I can delete cover
    Given I navigate to page "http://localhost:2999/ghost"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
	Then I click on element having link_text "General"
	Then I click on element having className "gh-setting-action-largeimg-delete"