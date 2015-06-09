var LoginPage = (function () {
    function LoginPage() {
        this.startOnLoginPage = function () {
            //casper.echo("base url is : " + casper.cli.options.baseUrl);
            casper.start(casper.cli.options.baseUrl + '/account');
        };
        this.fullLogin = function (username, password) {
            this.startOnLoginPage();
            this.checkWeAreOnTheLoginPage();
            this.fillInTheUsername(username);
            this.fillInThePassword(password);
            this.submitForm();
        };
        this.checkWeAreOnTheLoginPage = function () {
            casper.waitForSelector("#Username", function () {
                casper.test.assertUrlMatch('account', 'then check we are currently on the login page');
                casper.test.assertExists('form', 'then check that the login page form has been found');
            });
        };
        this.fillInThePassword = function (password) {
            casper.waitForSelector("#Password", function () {
                casper.fillSelectors('form', {
                    "input[name='Password']": password
                }, false);
                casper.test.assertExists('form input[name="Password"]', "then fill in the password with " + password);
            });
        };
        this.fillInTheUsername = function (username) {
            casper.waitForSelector("#Username", function () {
                casper.fillSelectors('form', {
                    "input[name='Username']": username
                }, false);
                casper.test.assertExists('form input[name="Username"]', "then fill in the username with " + username);
            });
        };
        this.submitForm = function () {
            casper.then(function () {
                casper.test.assertExists('form input[type="submit"]', "then submit the login form");
                casper.click('form input[type="submit"]');
            });
        };
        this.checkUsernameValidationIsShown = function () {
            casper.waitForSelector("#Username", function () {
                casper.test.assertTextExists("The Username field is required", "then check the username required message is shown");
            });
        };
        this.checkPasswordValidationIsShown = function () {
            casper.waitForSelector("#Username", function () {
                casper.test.assertTextExists("The Password field is required", "then check the password required message is shown");
            });
        };
    }
    return LoginPage;
})();
