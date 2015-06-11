phantom.page.injectJs('../Pages/Page.Login.js');

casper.test.begin('Login as an unknown user', function (test) {

    var login = new LoginPage();
    
    casper.start(casper.cli.options.baseUrl + '/account');

    //submit blank form
    casper.then(function() {    
        login.submitForm();
    });
    
    //submit unknown user
    casper.then(function() {
        test.assert(login.checkUsernameValidationIsShown(), "Username required msg is shown");
        test.assert(login.checkPasswordValidationIsShown(), "Password required msg is shown");
        login.fillInTheUsername("zzz");
        login.fillInThePassword("abcdef");
        login.submitForm();
    });

    casper.then(function() {
        test.assert(login.checkUsernameValidationIsShown(), "Username not found msg is shown");
    });
    
    casper.run(function () {
        test.done();
    });
});
