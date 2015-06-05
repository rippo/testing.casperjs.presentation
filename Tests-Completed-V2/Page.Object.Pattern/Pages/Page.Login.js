function LoginPage() {

    this.typeUsername = function(username) {
        casper.fillSelectors('form', {
            "input[name='Username']": username
        }, false);
    };
    
    this.typePassword = function(password) {
        casper.fillSelectors('form', {
            "input[name='Password']": password
        }, false);
    };
    
    this.submitForm = function () {
        casper.then(function () {
            casper.click('form input[type="submit"]', 'login submit button clicked');
        });
    };

    this.login = function(username, password) {
        this.typeUsername(username);
        this.typePassword(password);
        this.submitForm();
    };
    
    this.checkUsernameValidation = function() {
        return casper.evaluate(function() {
             return $("span[data-valmsg-for='Username']").is(":visible");
        });
    };
    
    this.checkPasswordValidation = function () {
        return casper.evaluate(function() {
             return $("span[data-valmsg-for='Password']").is(":visible");
        });
    };

    this.checkSuccessfullLogin = function () {
        return casper.evaluate(function() {
             return $("h2").html() === "Search";
        });
    };
    
};
