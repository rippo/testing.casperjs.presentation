phantom.page.injectJs('../Pages/Page.Login.js');
phantom.page.injectJs('../Pages/Page.Account.js');

casper.test.begin('when I login as test1', function (test : Tester) {

    var loginPage = new LoginPage();
    var searchPage = new SearchPage();

    loginPage.fullLogin('test1@test.com', '12345');

    searchPage.checkPage();
    searchPage.fillForm("");
    searchPage.submitForm();
    searchPage.checkValidationMesaageIsShown();

    searchPage.checkPage();
    searchPage.fillForm(2);
    searchPage.submitForm();
    searchPage.checkNumberResultsShown(3);

    searchPage.checkPage();
    searchPage.fillForm("b");
    searchPage.submitForm();
    searchPage.checkNumberResultsShown(1);

    casper.run(function () {
        test.done();
    });
});
