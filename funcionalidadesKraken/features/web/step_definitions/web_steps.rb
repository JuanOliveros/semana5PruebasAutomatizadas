if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'

Then(/^I enter "([^\"]*)" into input field having className "([^\"]*)"$/) do |text, className|
    @driver.find_element(:class, className).send_keys(text)
    sleep 1
  end
Then(/^I click on element having className "(.*?)"$/) do |className|
    @driver.find_element(:class, className).click
    sleep 1
  end

end