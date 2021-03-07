Feature: Loggin and create title a post

  @user1 @web
  Scenario: As a user existent I can login succesfull and creat a  title for a post
    Given I navigate to page "http://localhost:2368/ghost/#/posts"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
	Then I click on element having className "gh-btn-green"
	Then I enter "Hola Mundo" into input field having className "gh-editor-title"
	
	
  @user2 @web
  Scenario: As a user existent I can login succesfull and creat a  title for a post but with  specials chareters
    Given I navigate to page "http://localhost:2368/ghost/#/posts"
    Then I enter "j.oliverosv@uniandes.edu.co" into input field having className "email"
    Then I enter "Almendra1.*" into input field having className "password"
    Then I click on element having className "login"
    Then I click on element having className "gh-btn-green"
	Then I enter "#$%&/()&/()=" into input field having className "gh-editor-title"
	
	





