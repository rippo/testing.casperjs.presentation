
casper.test.begin('Timings tests', 2, function (test) {

    casper.start('http://localhost:43502/timings');

    casper.then(function () {
        test.assertExists("button#btnModal", "Launch button is shown");
        this.click("button#btnModal");
    });

    casper.wait(400, function () {
        this.capture("timings.jpg");
        test.assertVisible("#myModal");
    });

    casper.run(function () { test.done(); });
});