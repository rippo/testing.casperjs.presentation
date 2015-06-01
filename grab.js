var casper = require('casper').create({
    //viewportSize: { height: 800, width: 1024}
});

casper.start('http://www.google.co.uk', function () {
    this.echo(this.getTitle());
});

casper.thenOpen('http://localhost:43502', function () {
    this.echo(this.getTitle());
    this.capture("screen1024.jpg");
});

casper.run();