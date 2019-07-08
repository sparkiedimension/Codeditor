

var express = require('express');
var socket = require('socket.io');


var app = express();

var port=5006;
var server = app.listen(port, function(){
    console.log('listening for requests on port '+port);
});

app.use(express.static('public'));

var io = socket(server);
io.on('connection', function(socket){
   
  
   socket.on('editor',function(data){
    	io.sockets.emit('editor',data);
       
    });
  
    
});

