var back
var astronaut


function preload(){
bg = loadImage("Images/iss.png")
sleep = loadImage("Images/sleep.png")
brush = loadImage("Images/brush.png")
eat = loadAnimation("Images/eat1.png","Images/eat2.png")
gym = loadAnimation("Images/gym1.png","Images/gym2.png","Images/gym11.png","Images/gym12.png",)
back = loadImage("Images/iss.png");
move = loadAnimation("Images/move.png","Images/move.png","Images/move1.png","Images/move1.png");
sleep = loadImage("Images/sleep.png");
bath = loadAnimation("Images/bath1.png","Images/bath2.png");
}

function setup() {
  createCanvas(800,400);
  
  

 astronaut = createSprite(400,230,10,10)
 astronaut.addImage("sleep",sleep);
 astronaut.scale = 0.1

 edges = createEdgeSprites()
}

function draw() {
  
  
  background(bg);
  
  textSize(20)
  fill("white");
  text("Insructions:",50,50)  ;
  text("Up Arrow = Brushing",50,70); 
  text("Down Arrow = Gymming",50,90);  
  text("Left Arrow = Eating",50,110); 
  text("Right Arrow = Bathing",50,130);  
  text("Space Key = Moving",50,150);
  
  astronaut.bounceOff(edges);

 

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y = 230
    astronaut.x = 500
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming")
    astronaut.y = 230
    astronaut.x = 400
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y = 150
    astronaut.x = 100
    astronaut.velocityX = 2;
    astronaut.velocityY = 3;
    
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y = 230
    astronaut.x = 300
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
  }
  
  if(keyDown("SPACE")){
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.velocityX = 2;
    astronaut.velocityY = 3;
   
  }
  
  
  
  drawSprites();
}