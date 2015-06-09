function LoginPage() {

    this.fillInTheUsername = function(username) {
        casper.fillSelectors('form', {
            "input[name='Username']": username
        }, false);
    };
    
    this.fillInThePassword = function(password) {
        casper.fillSelectors('form', {
            "input[name='Password']": password
        }, false);
    };
    
    this.submitForm = function () {
        casper.then(function () {
            casper.click('form input[type="submit"]', 'login submit button clicked');
        });
    };

    this.fullLogin = function(username, password) {
        this.fillInTheUsername(username);
        this.fillInThePassword(password);
        this.submitForm();
    };
    
    this.checkUsernameValidationIsShown = function() {
        return casper.evaluate(function() {
             return $("span[data-valmsg-for='Username']").is(":visible");
        });
    };
    
    this.checkPasswordValidationIsShown = function () {
        return casper.evaluate(function() {
             return $("span[data-valmsg-for='Password']").is(":visible");
        });
    };

    this.checkWeAreOntheAccountPage = function () {
        return casper.evaluate(function() {
             return $("h2").html() === "Search";
        });
    };
    
};
