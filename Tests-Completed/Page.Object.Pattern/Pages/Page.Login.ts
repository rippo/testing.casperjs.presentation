class LoginPage implements ILoginPage {

    startOnLoginPage = function () {
        //casper.echo("base url is : " + casper.cli.options.baseUrl);
        casper.start(casper.cli.options.baseUrl + '/account');
    };


    checkWeAreOnTheLoginPage = function () {
        casper.waitForSelector("#Username", function () {
            casper.test.assertUrlMatch('account', 'then check we are currently on the login page');
            casper.test.assertExists('form', 'then check that the login page form has been found');
        });
    };

    fillInThePassword = function (password : string) {
        casper.waitForSelector("#Password", function () {
            casper.fillSelectors('form', {
                "input[name='Password']": password
            }, false);
            casper.test.assertExists('form input[name="Password"]', "then fill in the password with " + password);
        });
    };

    fillInTheUsername = function (username : string) {
        casper.waitForSelector("#Username", function () {
            casper.fillSelectors('form', {
                "input[name='Username']": username
            }, false);
            casper.test.assertExists('form input[name="Username"]', "then fill in the username with " + username);
        });
    };

    submitForm = function () {
        casper.then(function () {
            casper.test.assertExists('form input[type="submit"]', "then submit the login form");
            casper.click('form input[type="submit"]');
        });
    };

    checkUsernameValidationIsShown = function() {
        casper.waitForSelector("#Username", function () {
            casper.test.assertTextExists("The Username field is required", "then check the username required message is shown");
        });
    }

    checkPasswordValidationIsShown = function () {
        casper.waitForSelector("#Username", function () {
            casper.test.assertTextExists("The Password field is required", "then check the password required message is shown");
        });
    }

    fullLogin = function (username : string, password : string) {
        this.startOnLoginPage();
        this.checkWeAreOnTheLoginPage();
        this.fillInTheUsername(username);
        this.fillInThePassword(password);
        this.submitForm();
    };

}

interface ILoginPage {
    startOnLoginPage:Function;
    fullLogin:Function;
    checkWeAreOnTheLoginPage:Function;
    fillInTheUsername:Function;
    fillInThePassword:Function;
    submitForm:Function;
    checkUsernameValidationIsShown:Function;
    checkPasswordValidationIsShown:Function;
}
