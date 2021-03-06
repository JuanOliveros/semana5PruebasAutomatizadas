Feature: Shared board connection

  @user1 @web
  Scenario:  As a user existent I can download current redirects in lab option
    Given I navigate to page "http://localhost:2369/ghost"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
	Then I click on element having link_text "Labs"
	Then I click on element having link_text "Download current redirects"


  @user2 @web
  Scenario:  As a user existent I can open new tab for Find out more in lab option
    Given I navigate to page "http://localhost:2369/ghost"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
	Then I click on element having link_text "Labs"
	Then I click on element having className "gh-setting-title"
	Then I click on element having link_text "Find out more"
