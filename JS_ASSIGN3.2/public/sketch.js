var Letters = [];
var Images = [];
var stop;

//can't camel toe arrays?
var Opponents = [];


function preload(){
  
   for (var i = 0; i< 26; i++){
        Images[i] = loadImage("images/letter" + i + ".png"); 
    }
}
// $document.ready(()=>{
var socket = io()  
// })




function setup() {
    createCanvas(900,900);
    
 


}


function startDealing(){

loadingArray();

console.log("button worked");

}



//////////// MAKE OPPONENT LETTERS GROUP////////

//function receiveMessage() {

    socket.on('positionArray', 

      function(data){

          console.log("data recieved");

                //camelToe for array is no
              //breaks anytime i change data to data.rPos. why?
          console.log("new letter is" + data);


           Opponents.push(new Letter(random(50,800),random(700,900), Images[data]));


          console.log("opponent has," + Opponents.length);

       
      }
    );


//take mouse position and update 

    // socket.on('mousePosition', 

    //   function(data){


    //     Opponents[t].update();

    // }   
    // );  



//// CREATE PLAYER ARRAY/////

function loadingArray(){



	 for (var i=0; i<10; i++) {

    		var r = returnR();

    	  //how many letters do you want on the page
        Letters.push(new Letter(random(50,880),random(50,300), Images[r]));
        console.log(r);




        ///// MAKE THE OBJECT MESSAGE////
        var data = {
        rPos: r
        }


        
        socket.emit('positionArray', data);
  



	 }


  function returnR() {
    var r = floor(random(0, Images.length-1));
    return(r); 
  }
}



function draw() {

   //receiveMessage();
   background(100,200,100);

   //setTimeout(receiveMessage, 60000);

    for (var i=0; i<Letters.length; i++) {

        Letters[i].display(); 
    }


    for (var j=0; j<Opponents.length; j++) {


        Opponents[j].display(); 
    }

 




}


function mouseDragged() {
     for (var i=0; i<Letters.length; i++) {
          
         Letters[i].update();

    }

 for (var i=0; i<Opponents.length; i++) {
          
         Opponents[i].update();

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
      
              
      var d = dist(mouseX,mouseY,this.x, this.y);
        
        
          if (d<20){
        
          this.x = mouseX;
          this.y = mouseY;
      	  }



/////////PACKAGE//////////
   //data 
    //take this data and plug it into a new letter every 5minutes 
     var data = {

			x: this.x,
			y: this.y,
      img:this.img 

			}

        socket.emit('mousePosition', data);

          
    }

                 
}
    

 
