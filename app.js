var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	less = require('less-middleware'),
	mongoose = require('mongoose'),
	nicknames = [],
	count = 1;
    wejsc = 0;

server.listen(3000, function () {
    console.log('Serwer działa na porcie 3000');
});

app.use(less({
    src: '/strony/less',
    dest: '/strony/public/css',
    prefix: '/css',
    compress: true
}));