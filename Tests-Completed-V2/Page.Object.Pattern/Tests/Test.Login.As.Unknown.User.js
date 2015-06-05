phantom.page.injectJs('../Pages/Page.Login.js');

casper.test.begin('Login as an unknown user', function (test) {

    var login = new LoginPage();
    
    casper.start(casper.cli.options.baseUrl + '/account');

    casper.then(function() {    
        login.submitForm();
    });
    
    casper.then(function() {
        test.assert(login.checkUsernameValidation(), "Username required msg is shown");
        test.assert(login.checkPasswordValidation(), "Password required msg is shown");
        login.typeUsername("zzz");
        login.typePassword("abcdef");
        login.submitForm();
    });

    casper.then(function() {
        test.assert(login.checkUsernameValidation(), "Username not found msg is shown");
    });
    
    casper.run(function () {
        test.done();
    });
});
