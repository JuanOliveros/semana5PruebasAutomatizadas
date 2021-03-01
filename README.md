__myFirstTest.feature__
```gherkin
Feature: Shared board connection

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

```
__Web_steps.rb__
```
if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'

Then(/^I enter "([^\"]*)" into input field having className "([^\"]*)"$/) do |text, className|
    @driver.find_element(:class, className).send_keys(text)
    sleep 10
  end
Then(/^I click on element having className "(.*?)"$/) do |className|
    @driver.find_element(:class, className).click
    sleep 10
  end
end

```
