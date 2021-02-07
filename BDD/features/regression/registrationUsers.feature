Feature: Register on the website
  Scenario: 
  Open the Home page of automation practice
    Given I am on the Home page url as "http://automationpractice.com/index.php"
    When I Click SignIn on the Home page
    Then I should validated new page saying as "AUTHENTICATION"

  Scenario: 
  Enter the emailId and click on Create an account button
     When I entering email address as "testtest65@gmail.com"
     When I Click Create an Account on the AUTHENTICATION section
     Then I should see page with title "CREATE AN ACCOUNT"

  Scenario:
  Enter the personal details and click on click Register button
     When I Enter details in the Your Personal Information section
     | FieldName | FieldValue |
	 | First Name | Yunus     |
	 | Last Name  | Khan      |
	 | password   | Test@123  |
	 | Company    | HCL       |
	 | Address    | Address1  | 
	 | Address 2  | Delhi     |
	 | city       | Noida     |
	 | Zip Code   | 11001     |
	 | Additinal  | 7676784884|
	 | Home Phone | 987654323 |
	 | Mobile     | 8756233234|
    
    When  I Click Register button
    Then  I should Validate on the landing screen - correct name as "Yunus" and Surname as "Khan" is displayed

  Scenario: 
	   When I Click on the Home page logo 
	   When I Click on product image
      When I Click on Add to cart button
      Then I should Validate on the payment screen - correct product name as "Faded Short Sleeve T-shirts" is displayed
      Then I Click on Proceed to the checkout button 