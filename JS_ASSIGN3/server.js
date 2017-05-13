
var express = require('express');
//importing the package or module express 
//require is a javascript function that makes the express application


var app = express();
var server = app.listen(3000);


console.log("my socket server is running");

app.use(express.static('public')); //static hosts files that arent changing not dynamic 

var socket = require('socket.io');


var io = socket(server); //keeps track of inputs and outputs - server is an argument of socket the library 

//first event if i have a new connection
// other events i am connected, here's a message, i'm disconnected 

io.sockets.on('connection', newConnection);

function newConnection(socket){


	console.log('new connection:' + socket.id);
	socket.on('mouse',mouseMsg); // if there is a message called mouse strigger this function


	function mouseMsg(data){

			//send data back to server 
			//send to everyone including self
			//io.sockets.emit".      ""
		socket.broadcast.emit('mouse', data);

		console.log(data);

	}
}

