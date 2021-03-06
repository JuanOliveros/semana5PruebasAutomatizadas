Feature: Shared board connection

  @user1 @web
  Scenario: As a user existent I see activate member in lab option
    Given I navigate to page "http://localhost:2368/ghost"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
	Then I click on element having link_text "Labs"
	Then I click on element having className "gh-setting-title"
	Then I click on element having className "input-toggle-component"
	Then I click on element having className "gh-btn-icon"
	Then I click on element having link_text "General"
	Then I click on element having link_text "Labs"
	

  @user2 @web 
  Scenario:  As a user existent I can sownload a current routes.yaml
    Given I navigate to page "http://localhost:2368/ghost"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
	Then I click on element having link_text "Labs"
	Then I click on element having link_text "Download current routes.yaml"

