if ENV["ADB_DEVICE_ARG"].nil?
  require 'kraken-mobile/steps/web/kraken_steps'

Then(/^I enter "([^\"]*)" into input field having className "([^\"]*)"$/) do |text, className|
    @driver.find_element(:class, className).send_keys(text)
  	@driver.save_screenshot("..//imagenes//1//02.png")
    sleep 1
  end
Then(/^I click on element having className "(.*?)"$/) do |className|
    @driver.find_element(:class, className).click
    @driver.save_screenshot("..//imagenes//1//02.png")
    sleep 1
  end
  
Then(/^I click on element having link_text "(.*?)"$/) do |link_text|
    @driver.find_element(:link, link_text).click
    @driver.save_screenshot("..//imagenes//1//02.png")
    sleep 1
  end
Then(/^I enter "(.?)" into input field having id "(.?)"$/) do |text_id,id|
    @driver.find_element(:id, id).send_keys(text_id)
    @driver.save_screenshot("..//imagenes//1//02.png")
    sleep 1
  end

Then(/^I enter "(.?)" into input field having className2 "(.?)"$/) do |text_id,className2|
    @driver.find_element(:class, className2).send_keys(text_id)
    @driver.save_screenshot("..//imagenes//1//02.png")
    sleep 1
  end

end

