phantom.page.injectJs('../Pages/Page.Login.js');

casper.test.begin('when I login as an unknown user', function (test : Tester) {

    var loginPage = new LoginPage();

    loginPage.startOnLoginPage();
    loginPage.checkPage();

    loginPage.fillForm('', '');
    loginPage.submitForm();
    loginPage.checkUsernameValidation();
    loginPage.checkPasswordValidation();
    loginPage.checkPage();

    loginPage.fillForm('unknown@test.com', '');
    loginPage.submitForm();
    loginPage.checkPasswordValidation();
    loginPage.checkPage();

    loginPage.fillForm('unknown@test.com', 'test');
    loginPage.submitForm();
    loginPage.checkPage();

    casper.run(function () {
        test.done();
    });
});
