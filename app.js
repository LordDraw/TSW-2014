var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	less = require('less-middleware'),
	mongoose = require('mongoose'),
    users = {};

server.listen(3000, function () {
    console.log('Serwer działa na porcie 3000');
});

mongoose.connect("mongodb://localhost/serwisinformacyjny", function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Połączenie z MongoDB");
    }
});

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/pages/index.html');
    app.use(express.static(__dirname + '/bower_components')); // deklaracja css/bootstrap
    app.use(express.static(__dirname + '/pages'));
});

app.use(less({
    src: '/pages/less',
    dest: '/assets/css',
    prefix: '/css',
    compress: true
}));



var chatSchema = mongoose.Schema({
    title: String,
    nick: String,
    msg: String,
    created: {type: Date, default: Date.now}
});

var Chat = mongoose.model('Message', chatSchema);

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket){
    var query = Chat.find({});
    query.sort('-created').limit(8).exec(function(err, docs){
        if(err) throw err;
        socket.emit('load old msgs', docs);
    });
    
    socket.on('new user', function(data, callback){
        if (data in users){
            callback(false);
        } else{
            callback(true);
            socket.nickname = data;
            users[socket.nickname] = socket;
            updateNicknames();
        }
    });
    
    function updateNicknames(){
        io.sockets.emit('usernames', Object.keys(users));
    }

    socket.on('send message', function(data, callback){
       // var msg = data.trim();
      //  console.log('after trimming message is: ' + msg);

            var newMsg = new Chat({title:data.title,msg: data.mess, nick: socket.nickname});
            newMsg.save(function(err){
                if(err) throw err;
                io.sockets.emit('new message', {title:data.title, msg: data.mess, nick: socket.nickname});
            });
        
    });
    
    socket.on('disconnect', function(data){
        if(!socket.nickname) return;
        delete users[socket.nickname];
        updateNicknames();
    });

    });