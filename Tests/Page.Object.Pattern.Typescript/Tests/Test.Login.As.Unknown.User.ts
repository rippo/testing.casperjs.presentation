//Simple injects my page object into the DOM
//  so it is available to this test page
phantom.page.injectJs('../Pages/Page.Login.js');

casper.test.begin('Scenario: When I try to login as an unknown user', function (test : Tester) {

    var loginPage : LoginPage = new LoginPage();

    loginPage.startOnLoginPage();
    loginPage.checkWeAreOnTheLoginPage();

    //in effect submit a blank form
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
