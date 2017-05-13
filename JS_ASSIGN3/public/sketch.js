

var mic;

function setup() {



	createCanvas(400,400);
	background(51);
	
	socket = io.connect('http://127.0.0.1:3000');
	socket.on('mouse', newDrawing);
	


}

function newDrawing(data){

	noStroke();
	fill(0,0,255);
	ellipse(data.x, data.y, 60,60);

}



function mouseDragged(){

	noStroke();
	fill(255);
	ellipse(mouseX, mouseY, 60,60);

	console.log(mouseX  + "," + mouseY);


	var data = {

		x: mouseX,
		y: mouseY

	}

	socket.emit('mouse', data);

}

function draw() {


}

