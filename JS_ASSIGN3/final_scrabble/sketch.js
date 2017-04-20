var Letters = [];
var Images = [];

function preload(){
  
   for (var i = 0; i< 26; i++){
        Images[i] = loadImage("images/letter" + i + ".png"); 
    }
  

}


function setup() {
    createCanvas(600,600);
    
    
  //how many objects or letters do you want on the page
    for (var i=0; i<10; i++) {
     
     var r = floor(random(0, Images.length));
    Letters.push(new Letter(random(50,300),random(50,200), Images[r] ));
    }
  
    
}

function draw() {
  
    background(255);
  
    for (var i=0; i<Letters.length; i++) {

        Letters[i].display(); 
         
    }
  
}

function mouseDragged() {
  
  
     for (var i=0; i<Letters.length; i++) {
         Letters[i].update();
    }
}




// function mousePressed(){
  
//       for(var i=0; i<Letters.length; i++){
        
//         Letters[i].clicked; 
        
//       }
// }



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
          
          
          
          
        // }
        
        
    }
    
    // this.released = function () {
      
        
    //     this.x != mouseX;
    //     this.y != mouseY;
        
    
    // }
 }
