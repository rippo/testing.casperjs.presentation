class SearchPage implements ISearchPage {

    checkWeAreOnTheSearchPage = function () {
        casper.waitForSelector("#Query", function () {
            casper.test.assertUrlMatch('account/search', 'then check we are on the search page');
            casper.test.assertTextExists('Search', 'then check the search page has been found');
        });
    };

    fillInTheSearchBox = function (query : string) {
        casper.then(function () {
            this.fillSelectors('form', {
                "input[name='Query']": query
            }, false);
            casper.test.assertExists('form input[name="Query"]', "then fill in the search box with '" + query + "'");
        });
    };

    submitForm = function () {
        casper.then(function () {
            casper.test.assertExists('form input[type="submit"]', "then submit the search form");
            this.click('form input[type="submit"]', 'search button clicked');
        });
    };

    checkValidationMesaageIsShown = function () {
        casper.waitForSelector("#Query", function () {
            casper.test.assertTextExists('Enter a search term', 'then check the search term required message is shown');
        });
    };

    checkNumberResultsShown = function (expectedCount : number) {
        casper.waitForSelector("table#results ", function () {
            casper.test.assertTextExists('Results', 'then check that the results table is displayed');
            casper.test.assertElementCount('table#results > tbody > tr', expectedCount, "then check that " + expectedCount + ' name(s) have been found');
        });
    };

}

interface ISearchPage {
    checkWeAreOnTheSearchPage : Function;
    fillInTheSearchBox : Function;
    submitForm : Function;
    checkValidationMesaageIsShown : Function;
    checkNumberResultsShown : Function;
    
}
