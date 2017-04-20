
var express = require('express');
var mongoose = require('mongoose');
//importing the package or module express 
//require is a javascript function that makes the express application


var app = express();
var server = app.listen(3000);

mongoose.connect('mongodb://localhost/JS_ASSIGN3.2', function(err){
 	if(err){

 		console.log(err);
 	}

 	else{
 		console.log('Connect to Mongodb');
 	}

})


console.log("my socket server is running");

app.use(express.static('public')); //static hosts files that arent changing not dynamic 

var socket = require('socket.io');


var io = socket(server); //keeps track of inputs and outputs - server is an argument of socket the library 

//first event if i have a new connection
// other events i am connected, here's a message, i'm disconnected 

io.sockets.on('connection', newConnection);

function newConnection(socket){



	console.log('new connection:' + socket.id);
	socket.on('mouse',mouseMsg); // if there is a message called mouse trigger this function
	socket.on('positionArray',letterMsg);

	 function mouseMsg(data){

	// 		//send data back to server 
	// 		//send to everyone including self
	// 		//io.sockets.emit".      ""
	// 	socket.broadcast.emit('mouse', data);

	console.log(data);

	 }
		function letterMsg(data){

			//send data back to server 
			//send to everyone including self
			//io.sockets.emit".      ""
		socket.broadcast.emit('PositionArray', data);

		console.log(data);

	}
}

