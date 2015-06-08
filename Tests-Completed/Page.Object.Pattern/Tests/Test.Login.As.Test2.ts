phantom.page.injectJs('../Pages/Page.Login.js');
phantom.page.injectJs('../Pages/Page.Account.js');


casper.test.begin('when I login as test2', function (test:Tester) {

    var loginPage = new LoginPage();
    var searchPage = new SearchPage();

    loginPage.fullLogin('test2@test.com', '12345');

    searchPage.checkPage();
    searchPage.fillForm("a");
    searchPage.submitForm();
    searchPage.checkNumberResultsShown(4);

    casper.run(function () {
        test.done();
    });
});
