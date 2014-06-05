var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	less = require('less-middleware'),
	mongoose = require('mongoose'),
	nicknames = [],
	count = 1;

server.listen(3000, function () {
    console.log('Serwer działa na porcie 3000');
});

mongoose.connect("mongodb://localhost/schronisko", function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Połączenie z MongoDB");
    }
});

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/strony/index.html');
    app.use(express.static(__dirname + '/bower_components')); // deklaracja css/bootstrap
    app.use(express.static(__dirname + '/strony'));
});

app.use(less({
    src: '/strony/less',
    dest: '/strony/public/css',
    prefix: '/css',
    compress: true
}));