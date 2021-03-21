Feature: Shared board connection

  @user1 @web
  Scenario: As a user existent I need validate website url with specials charters
    Given I navigate to page "http://localhost:2999/ghost"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
	Then I click on element having link_text "Staff"
	Then I click on element having className "apps-card-app-desc"
	Then I enter "325655154821545154141411151515151515151515151" into input field having id "user-website"
	Then I click on element having className "gh-btn-icon"


	


  @user2 @web 
  Scenario: As a user existent I need validate Bio with specials charters
    Given I navigate to page "http://localhost:2999/ghost"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
	Then I click on element having link_text "Staff"
	Then I click on element having className "apps-card-app-desc"
	Then I enter "3256551548215451541414111515151515151515151512789340783278789" into input field having id "user-bio"
	Then I click on element having className "gh-btn-icon"