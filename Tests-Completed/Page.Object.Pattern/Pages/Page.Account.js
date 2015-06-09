var SearchPage = (function () {
    function SearchPage() {
        this.checkWeAreOnTheSearchPage = function () {
            casper.waitForSelector("#Query", function () {
                casper.test.assertUrlMatch('account/search', 'then check we are on the search page');
                casper.test.assertTextExists('Search', 'then check the search page has been found');
            });
        };
        this.fillInTheSearchBox = function (query) {
            casper.then(function () {
                this.fillSelectors('form', {
                    "input[name='Query']": query
                }, false);
                casper.test.assertExists('form input[name="Query"]', "then fill in the search box with '" + query + "'");
            });
        };
        this.submitForm = function () {
            casper.then(function () {
                casper.test.assertExists('form input[type="submit"]', "then submit the search form");
                this.click('form input[type="submit"]', 'search button clicked');
            });
        };
        this.checkValidationMesaageIsShown = function () {
            casper.waitForSelector("#Query", function () {
                casper.test.assertTextExists('Enter a search term', 'then check the search term required message is shown');
            });
        };
        this.checkNumberResultsShown = function (expectedCount) {
            casper.waitForSelector("table#results ", function () {
                casper.test.assertTextExists('Results', 'then check that the results table is displayed');
                casper.test.assertElementCount('table#results > tbody > tr', expectedCount, "then check that " + expectedCount + ' name(s) have been found');
            });
        };
    }
    return SearchPage;
})();
