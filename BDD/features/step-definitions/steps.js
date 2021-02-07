const { expect } = require("chai");
const { Given, When, Then } = require("cucumber");
require("chai").should();
const Register = require("../pageobjects/UserRegistration");
let user = new Register();

Given(/^I am on the Home page url as \"([^\"]*)\"$/, function (string) {
  user.launchBrowser(string);
});

When(/^I Click SignIn on the Home page$/, function () {
  user.clickOnIn();
});

Then(/^I should validated new page saying as \"([^\"]*)\"$/,
  function (authentication) {
    validateRegistrationpage(authentication);
  }
);

When(/^I entering email address as \"([^\"]*)\"$/, function (emailId) {
  user.enteremail();
});

When(/^I Click Create an Account on the AUTHENTICATION section$/, function () {
  $("#SubmitCreate > span").click();
});

Then(/^I should see page with title \"([^\"]*)\"$/,
  function (registrationHeader) {
    user.validateregistrationpage(registrationHeader);
  }
);

When(/^I Enter details in the Your Personal Information section$/,
  function (dataTable) {
    user.fillregistrationpage(dataTable);
  }
);

When(/^I Click Register button$/, function () {
  $("#submitAccount > span").click();
});

Then(/^I should Validate on the landing screen - correct name as \"([^\"]*)\" and Surname as \"([^\"]*)\" is displayed$/,
  function (yunus, khan) {
    var actualusername = "Yunus" + " " + "Khan";
    user.validateregisteredUser(actualusername);
  }
);

When(/^I Click on the Home page logo$/, function () {
  $("#header_logo > a > img").click();
});

When(/^I Click on product image$/, function () {
  // scrolling down
  $("#home-page-tabs > li.active > a").scrollIntoView();
  // click on product image
  $('//*[@id="homefeatured"]/li[1]/div/div[1]/div/a[1]/img').click();
  browser.pause(6000);
});

When(/^I Click on Add to cart button$/, function () {
  user.clickonCart();
});

Then(/^I should Validate on the payment screen - correct product name as \"([^\"]*)\" is displayed$/,
  function (tshirtName) {
    const expectedregisterUser = $(
      '//*[@id="layer_cart_product_title"]'
    ).getText();
    tshirtName.should.equal(expectedregisterUser);
  }
);
Then(/^I Click on Proceed to the checkout button$/, function () {
  $('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a').click();
  browser.pause(2000);
});
