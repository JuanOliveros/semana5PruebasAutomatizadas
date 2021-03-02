Feature: Shared board connection

  @user1 @web
  Scenario: As a user existent I can get delete option  succesfull a tag
    Given I navigate to page "http://localhost:2368/ghost/#/tags/getting-started"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
	Then I click on element having className "gh-btn-red"

	
	
  @user2 @web
  Scenario: As a user existent I can get delete succesfull a tag
    Given I navigate to page "http://localhost:2368/ghost/#/tags/getting-started"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
	Then I click on element having className "gh-btn-red"
	Then I click on element having className "gh-btn-red"
	
	



