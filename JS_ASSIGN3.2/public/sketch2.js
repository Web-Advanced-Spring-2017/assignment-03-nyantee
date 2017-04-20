var Letters = [];
var Images = [];


function preload(){
  
   for (var i = 0; i< 26; i++){
        Images[i] = loadImage("images/letter" + i + ".png"); 
    }
  

}


function setup() {
    createCanvas(600,600);

     socket = io.connect('http://127.0.0.1:3000');
	//should stay in setup
	//triggering the function when message is received 
    // socket.on('positionArray', opponentLetters);


      loadingArray();

  
}



function returnR() {


		var r = floor(random(0, Images.length));

		return(r); 

		 
}



function loadingArray(){

	 for (var i=0; i<10; i++) {

    		var r = returnR();

    	  //how many objects or letters do you want on the page
    
    Letters.push(new Letter(random(50,300),random(50,200), Images[r] ));

    	console.log(r);
  
	}


	var data = {

		rPos: r

	}

	socket.emit('positionArray', data);



}




function draw() {
  
    background(255);
  
    for (var i=0; i<Letters.length; i++) {

        Letters[i].display(); 

  
    }


//trigger the function so that it draws every time 

//arbitrary name of data and function name 

    console.log("drawing");
  
}

//get r the position of the image in the array
// and plug it in to get that image

//position is name of data not data name 
// function opponentLetters(position){


//         Letters[position.x].display(); 
         
//     }

// }




function mouseDragged() {
  
  
     for (var i=0; i<Letters.length; i++) {
         Letters[i].update();
    }
}


//class that creates objects array that holds images



function Letter (x, y, img) {
  
    this.x = x;
    this.y = y;
    this.img = img;
    
    this.display = function () {
      
        imageMode(CENTER);
        image(img, this.x, this.y, 100, 100);
    }



    this.update = function () {
      
      
      // var d = dist(mouseX,mouseY,this.x, this.y);
        
        
      //     if (mouseIsPressed & d<20){
        
      //   this.x = mouseX;
      //     this.y = mouseY;
      //     }
          
              
      var d = dist(mouseX,mouseY,this.x, this.y);
        
        
          if (d<20){
        
          this.x = mouseX;
          this.y = mouseY;
      	  }


           var data = {

			x: this.x,
			y: this.y

			}

			//socket.emit('mouse', data);
          	// socket.emit('positionArray', position);
          
    }

           
        
}
    

 
