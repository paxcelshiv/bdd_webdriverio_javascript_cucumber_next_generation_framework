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
        console.log(text)
        user.validateCondition(actualmsg,text);
    }
    enteremail(){
    $('#email_create').scrollIntoView();
    var randomstr=user.randomString(7);
    var randonemail=randomstr.concat('@gmail.com')
    console.log(randonemail);
    $('#email_create').setValue(randonemail);
    }
    validateregistrationpage_header(actualmsg){
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
