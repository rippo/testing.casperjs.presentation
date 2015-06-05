phantom.page.injectJs('../Pages/Page.Login.js');

casper.test.begin('Login as test1@test.com', function (test) {

    var login = new LoginPage();
    
    casper.start(casper.cli.options.baseUrl + '/account');

    casper.then(function() {    
        login.login("test1@test.com", "abcdefg");
    });
    
    casper.then(function() {
        test.assert(login.checkSuccessfullLogin(), "Test1 successfully logged in");
    });
    
    casper.run(function () {
        test.done();
    });
});
