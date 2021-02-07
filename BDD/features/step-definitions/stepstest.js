const { expect } = require('chai');
const {Given, When,Then} = require ('cucumber')
require('chai').should();
const Register = require('../pageobjects/UserRegistration');

//import cm from '../pageobjects/commonmethods.js';
let user = new Register()
user.launchBrowser("");
