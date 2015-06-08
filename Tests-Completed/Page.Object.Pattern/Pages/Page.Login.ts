class LoginPage implements ILoginPage {

    startOnLoginPage = function () {
        //casper.echo("base url is : " + casper.cli.options.baseUrl);
        casper.start(casper.cli.options.baseUrl + '/account');
    };

    fullLogin = function(username : string, password : string) {
        this.startOnLoginPage();
        this.checkPage();
        this.fillForm(username, password);
        this.submitForm();
    };


    checkPage = function () {
        casper.waitForSelector("#Username", function () {
            casper.test.assertUrlMatch('account', 'is on login page');
            casper.test.assertExists('form', 'login page form has been found');
        });
    };

    fillForm = function (username : string, password : string) {
        casper.waitForSelector("#Username", function () {
            casper.fillSelectors('form', {
                "input[name='Username']": username,
                "input[name='Password']": password,
            }, false);
        });
    };

    submitForm = function () {
        casper.then(function () {
            casper.click('form input[type="submit"]');
        });
    };

    checkUsernameValidation = function() {
        casper.waitForSelector("#Username", function () {
            casper.test.assertTextExists("The Username field is required", "username required message shown");
        });
    }

    checkPasswordValidation = function () {
        casper.waitForSelector("#Username", function () {
            casper.test.assertTextExists("The Password field is required", "password required message shown");
        });
    }

}

interface ILoginPage {
    startOnLoginPage:Function;
    fullLogin:Function;
    checkPage:Function;
    fillForm:Function;
    submitForm:Function;
    checkUsernameValidation:Function;
    checkPasswordValidation:Function;
}
