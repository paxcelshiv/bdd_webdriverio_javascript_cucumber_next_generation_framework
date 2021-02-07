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