Feature: Preview link

  @user1 @web
  Scenario: As a user existent I should see the preview link for a draft post
    Given I navigate to page "http://localhost:2368/ghost/#/editor/post/603c40727aa620216082ab93"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
	Then I click on element having className "post-settings"
	Then I click on element having className "post-view-link"


	
	
  @user2 @web
  Scenario: As a user existent I should edit the preview link draft
    Given I navigate to page "http://localhost:2368/ghost/#/editor/post/603c40727aa620216082ab93"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
	Then I click on element having className "post-settings"
	Then I enter "" into input field having className "post-setting-slug"
	Then I enter "nuevolink" into input field having className "post-setting-slug"
	Then I click on element having className "post-view-link"

