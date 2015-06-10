phantom.page.injectJs('../Pages/Page.Login.js');
casper.test.begin('Scenario: When I try to login as an unknown user', function (test) {
    var loginPage = new LoginPage();
    loginPage.startOnLoginPage();
    loginPage.checkWeAreOnTheLoginPage();
    loginPage.submitForm();
    loginPage.checkUsernameValidationIsShown();
    loginPage.checkPasswordValidationIsShown();
    loginPage.fillInTheUsername('unknown@test.com');
    loginPage.submitForm();
    loginPage.checkPasswordValidationIsShown();
    loginPage.fillInThePassword('test');
    loginPage.submitForm();
    loginPage.checkWeAreOnTheLoginPage();
    casper.run(function () {
        test.done();
    });
});
