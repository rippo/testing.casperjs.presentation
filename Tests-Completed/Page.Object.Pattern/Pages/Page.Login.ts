class LoginPage implements ILoginPage {

    private usernameLocator = "#Username";
    private passwordLocator = "#Password";
    private submitButtonLocator = "form input[type='submit']";

    startOnLoginPage = () => {
        //casper.echo("base url is : " + casper.cli.options.baseUrl);
        casper.start(casper.cli.options.baseUrl + '/account');
    };

    checkWeAreOnTheLoginPage = () => {
        casper.waitForSelector(this.usernameLocator, function () {
            casper.test.assertUrlMatch('account', 'then check we are currently on the login page');
            casper.test.assertExists('form', 'then check that the login page form has been found');
        });
    };

    fillInThePassword = (password : string) => {
        casper.waitForSelector(this.passwordLocator, () => {
            var params = {};
            params[this.passwordLocator] = password;

            casper.fillSelectors('form', params, false);
            casper.test.assertExists(this.passwordLocator, "then fill in the password with " + password);
        });
    };

    fillInTheUsername = (username : string) => {
        casper.waitForSelector(this.usernameLocator,  () => {
            var params = {};
            params[this.usernameLocator] = username;

            casper.fillSelectors('form', params, false);
            casper.test.assertExists(this.usernameLocator, "then fill in the username with " + username);
        });
    };

    submitForm = () => {
        casper.then(() => {
            casper.test.assertExists(this.submitButtonLocator, "then submit the login form");
            casper.click(this.submitButtonLocator);
        });
    };

    checkUsernameValidationIsShown = () => {
        casper.waitForSelector(this.usernameLocator, () => {
            casper.test.assertTextExists("The Username field is required", "then check the username required message is shown");
        });
    }

    checkPasswordValidationIsShown = () => {
        casper.waitForSelector(this.usernameLocator, () => {
            casper.test.assertTextExists("The Password field is required", "then check the password required message is shown");
        });
    }

    fullLogin = (username : string, password : string) => {
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
