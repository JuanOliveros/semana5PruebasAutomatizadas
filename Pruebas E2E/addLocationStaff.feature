Feature: Shared board connection

  @user1 @web
  Scenario: As a user existent I can add succesfull my location
    Given I navigate to page "http://localhost:2999/ghost"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
	Then I click on element having link_text "Staff"
	Then I click on element having className "apps-card-app-desc"
	Then I enter "Bogota" into input field having id "user-location"
	Then I click on element having className "gh-btn-icon"
	Then I click on element having link_text "Tags"
	Then I click on element having link_text "Staff"
	Then I click on element having className "apps-card-app-desc"
	

	


  @user2 @web 
  Scenario: As a user existent I can add succesfull my facebook link
    Given I navigate to page "http://localhost:2999/ghost"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
	Then I click on element having link_text "Staff"
	Then I click on element having className "apps-card-app-desc"
	Then I enter "wwww.facebook.com/JuanOliveros" into input field having id "user-facebook"
	Then I click on element having className "gh-btn-icon"
	Then I click on element having link_text "Tags"
	Then I click on element having link_text "Staff"
	Then I click on element having className "apps-card-app-desc"