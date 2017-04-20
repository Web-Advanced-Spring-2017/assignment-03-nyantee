var Letters = [];
var Images = [];

//can't camel toe arrays?
var Oppletters = [];


function preload(){
  
   for (var i = 0; i< 26; i++){
        Images[i] = loadImage("images/letter" + i + ".png"); 
    }
}


function setup() {
    createCanvas(900,900);

     socket = io.connect('http://127.0.0.1:3000');

	//should stay in setup
	//triggering the function when message is received 


     loadingArray();

    socket.on('positionArray', opponentLetters());



}

//////////// MAKE OPPONENT LETTERS GROUP////////
function opponentLetters(data){

  
    Oppletters.push(new Letter(random(50,500),random(400,600), Images[data]));
         
          console.log("Opponent array created");

          console.log(Oppletters.length);

           
}



function returnR() {


		var r = floor(random(0, Images.length));

		return(r); 

		 
}


//// CREATE PLAYER ARRAY/////

function loadingArray(){

	 for (var i=0; i<10; i++) {

    		var r = returnR();

    	  //how many letters do you want on the page
    
        Letters.push(new Letter(random(50,600),random(50,200), Images[r] ));

        console.log(r);

        ///// MAKE THE OBJECT MESSAGE////
        var data = {
        rPos: r
        }

        socket.emit('positionArray', data);
  
	}

    console.log(r);

}


function draw() {
  
    background(100,200,100);
  
    for (var i=0; i<Letters.length; i++) {

        Letters[i].display(); 

    }

}

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
    

 
