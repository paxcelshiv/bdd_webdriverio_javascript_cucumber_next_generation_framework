
### WebdriverIO-v6 boilerplate code with Cucumber BDD

This repository contains a collection of sample webdriverIO-v6 (Selenium - Node.js/JavaScript) projects and libraries that demonstrate how to use the tool and develop automation script using the Cucumber (v6.x) BDD framework. It uses the `chromedriver` NPM package that wraps the ChromeDriver for you. This service does not require a Selenium server, but uses ChromeDriver to communicate with the browser directly.

It support ES5 to ES8 (via babel-register) and uses Grunt to manage tasks, provides utilities to read data from MS-Excel, executes SQL statements to any database for end to end testing. It generate Spec, JUNIT, Allure, JSON reporters as well.

💡 If you need the wdio-v5 boilerplate project, please take the code from v5 branch: click [here](https://github.com/amiya-pattnaik/webdriverIO-with-cucumberBDD/tree/wdio-v5)

### Installation

This project is tested on **Node v12.0.0** and above.  While earlier versions of node may be compatible, but they have not been verified.

`Node.JS:` Install  from the site - https://nodejs.org/en/  take the LTS version based on your Operating system. Please make sure you install NodeJS globally. To take full advantage of the command line and use grunt tasks you will need to make sure that you have added `node_modules/.bin` to your `$PATH`.  Otherwise you will need to install `npm install -g  grunt-cli` globally.


`JDK 1.8:` It is optional, install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server` on your local environment nothing else.


### Run Some Sample Tests

To execute the entire test suite in local development, you can use any one of the options mentioned below

Option 1: `npm run test-local`. You can also run in SauceLabs and BrowserStack using `npm run test-sauce`, `npm run test-browserstack`.

Option 2: `grunt webdriver:test-local`.  This executes all features in the [`./test/features/*.feature`] directory.
The default option for Grunt run is `webdriver:test-local`. But you can use `webdriver:test-sauce` or `test-browserstack` based on your requirements.

To execute tests on `mobile device` use : `npm run test-mobile`.

Note: Before running mobile tests, perform the requisite Appium setup. For hassle free Appium setup on OSX refer [appium-setup-made-easy-OSX](https://github.com/amiya-pattnaik/appium-setup-made-easy-OSX) OR refer [Appium Docs](http://appium.io/getting-started.html?lang=en)

### Config Files

WebdriverIO uses configuration files to setup and execute tests in specific ways.  The configuration is fully customizable, and different functions can be invoked before, during and after each test or test suite.  Config files can be found in the `/test/config/` directory and all end with `*.conf.js`.  These can be called via the the cli.

### SauceLabs/BrowserStack Integration

`SauceLabs` and `BrowserStack` specific code has been added in the `wdio.sauce.conf.js` and  `wdio.browserstack.conf.js` under the /test/config folder. You just need to provide your SauceLabs/BrowserStack credentials in the config file. To run test on SauceLabs, execute command `npm run test-sauce` and on BrowserStack `npm run test-browserstack`.

### Logs  

Complete set of execution `logs` will be generated during the run time and can be found in the parent folder location /logs.

### Reporters

WebdriverIO uses several different types of test reporters to communicate pass/failure.  

##### Dot

To use the dot reporter just add 'dot' to the reporters array in the config file. The dot reporter prints for each test spec a dot. If colors are enabled on your machine you will see three different colors for dots. Yellow dots mean that at least one browser has executed that spec. A green dot means all browser passed that spec and a red to means that at least one browser failed that spec. All config files have this turned on by default.

##### Spec

Test reporter, that prints detailed results to console.

##### Allure

The Allure Reporter creates [Allure](http://allure.qatools.ru/) test reports which is an HTML generated website with all necessary information to debug your test results and take a look on error screenshots. Add allure to the reporters array in config file and define the output directory of the allure reports.

To generate and view an allure report locally, run `npm run allure-report`. A typical Allure report will look like this

![ScreenShot](https://github.com/allure-framework/allure2/blob/master/.github/readme-img.png)

Allure has several other reporting tools optimized for the CI server of your choice.  You can [view the documentation here](http://wiki.qatools.ru/display/AL/Reporting).

##### junit/xunit

The JUnit reporter helps you to create xml reports for your CI server. Add it to the reports array in the config file and define the directory where the xml files should get stored. webdriverIO will create an xml file for each instance under test and the filename will contain the browser and OS.

To generate and view an junit/xunit report locally, run `npm run junit-report`. A typical junit/xunit report will look like this

![ScreenShot](https://github.com/amiya-pattnaik/snapshots/blob/master/junit-result.png)

##### JSON

The JSON reporter is especially versatile. Since it produces a literal in a key : value pair, help to read, translate execution results to any custom reporter / it can be used to transport reporter events to another process and format them there, or to store the execution results back to any standard RDBMS or to NoSQL like mongodb with very minimal effort.

### Develop automation scripts (for both desktop browser and mobile browser / app)

You can write test by using Cucumber BDD framework. You can choose javascript based design pattern or ES6 based. This project is ES6 friendly (via babel-register)

Refer complete [WebdriverIO v6 API](https://webdriver.io/docs/api.html) methods to write your automation tests.

##### Using Cucumber JavaScript framework

Tests are written in the Cucumber framework using the Gherkin Syntax. More about Gherkin & Cucumber can be found at https://cucumber.io/docs/reference

Tests are place in `*.feature` files in the `/test/features/` directory. A typical test will look similar to this:
```
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
    When I Click on Proceed to the checkout button 
```

### The Page Object Design Pattern

Within your web app's UI there are areas that your tests interact with. A Page Object simply models these as objects within the test code. This reduces the amount of duplicated code and means that if the UI changes, the fix need only be applied in one place. In other wards one of the challenges of writing test automation is keeping your [selectors] (classes, id's, or xpath' etc.) up to date with the latest version of your code.  The next challenge is to keep the code you write nice and DRY (Don't Repeat Yourself).  The page object pattern helps us accomplish this in one solution.  Instead of including our selectors in our step definitions in cucumber, we instead place them in a `<pagename>.js` file where we can manage all these selectors and methods together. Your test file should only call the test methods.

You can also place reusable functions or logic inside of these pages and call them from your step files. The page object serves as a layer of abstraction between tests and code.  When a test fails, it fails on a individual step.  That step may call a selector that is no longer valid, but that selector may be used by many other steps.  By having a single source of truth of what the selector is supposed to be, fixing one selector on the page object could repair a number of failing tests that were affected by the same selector.

An object called `Page` will be created with the prototype model or by ES6 class pattern.  This ensures that every instance of a page object is exported as a stateless construct. Any any changes to that state are handled in the browser, rather than on the server.

It is preferable to separate page objects into individual files that end with `.page.js`.  These will require the basic `page.js` prototype construct / abstract class and create new objects for each individual page.

For more information on the implementation of `Page Object Design Pattern`, refer to the `/test/pageobjects` directory. A typical page class using ES6 syntax will look similar to this:

💡 If you want to use ES5 syntax, refer to the sample.page.js under util-examples.

```
Commonly uses methods
we would create number of methods, but here i have created some method just for framework design
module.exports =class Commons {
     openBrowser(path) {
        browser.maximizeWindow();
        browser.url(path);
        browser.pause(5000);
     console.log('this is common class method')
    }
    validateCondition(actualmsg, expectedmsg){
        actualmsg.should.equal(expectedmsg);
    }
    randomString(len, charSet) {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i = 0; i < len; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz,randomPoz+1);
        }
        return randomString;
    }
}

page specific method like page object factory.
const com = require("./Common");
const user=new com();
module.exports =class UserRegistration {
    launchBrowser(urlpath){
        user.openBrowser(urlpath);
    }
    clickOnIn(){
        $('#header > div.nav > div > div > nav > div.header_user_info > a').click();
        browser.pause(3000);
    }
    validateRegistrationpage(actualmsg){
        const text = $('#center_column > h1').getText();
        user.validateCondition(actualmsg,text);
    }
    enteremail(){
    $('#email_create').scrollIntoView();
    var randomstr=user.randomString(7);
    var randonemail=randomstr.concat('@gmail.com')
    console.log(randonemail);
    $('#email_create').setValue(randonemail);
    }
    validateregistrationpage(actualmsg){
   $('#noSlide > h1').scrollIntoView(); 
    const text1 = $('#noSlide > h1').getText();
    console.log("Actual value :"+text1+" Expected value :"+registrationHeader);
    //registrationHeader.should.equal(text1);
    }
    fillregistrationpage(dataTable){
        const userDetails = dataTable.rowsHash();
        // check radio button for gender
        $('#uniform-id_gender1').click();
       //Enter first name in firstName textbox
       $('#customer_firstname').setValue(userDetails['First Name']);
       //Enter last name in last name textbox
       $('#customer_lastname').setValue(userDetails['Last Name']);
       //Enter password in password textbox
       $('#passwd').setValue(userDetails['password']);
       //select dob
       $('#days > option:nth-child(2)').click();
       $('#months > option:nth-child(3)').click();
       $('#years > option:nth-child(13)').click();
       $('#newsletter').click();
       $('#optin').click();
     // Enter the company in company textbox
       $('#company').setValue(userDetails['Company']);
       // Enter the address in address textbox
       $('#address1').setValue(userDetails['Address']);
       // Enter the address1 in address1 textbox
       $('#address2').setValue(userDetails['Address 2']);
        // Enter the City in city textbox
        $('#city').setValue(userDetails['city']);
       // select state from drop down list
       $('#id_state > option:nth-child(4)').click();
       // Enter the City in city textbox
       $('#postcode').setValue(userDetails['Zip Code']);
       // Enter additional info in add inf textarea
       $('#other').setValue(userDetails['Additinal']);
       // Enter Home phone in homephone textbox
       $('#phone').setValue(userDetails['Home Phone']);
       // Enter Bobile phone in mobilephone textbox
       $('#phone_mobile').setValue(userDetails['Mobile']);
    }
    validateregisteredUser(actualmsg){
        const expectedregisterUser = $('#header > div.nav > div > div > nav > div:nth-child(1) > a > span').getText();
        actualmsg.should.equal(expectedregisterUser);
    }
    clickonCart(){
         // Swtching from window to iframe
    browser.switchToFrame($("//iframe[@class='fancybox-iframe']"));
    console.log('Driver has been switched.')
    $('#add_to_cart > button > span').click();
    }

}