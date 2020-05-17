var ball,ballImage;
var paddle,paddleImage; 
var left,topEdge,bottom;
var rand1,rand2;   
var score;  
var cheering;
function preload() {
 ballImage=loadImage("ball.png");
  
 paddleImage=loadImage("paddle.png"); 
  
 cheering=loadSound("cheering/applause7.mp3");
  
}
function setup() {
  createCanvas(400, 400);
  
  paddle=createSprite(395,200,10,70);
  paddle.addImage(paddleImage);
  paddle.scale=0.7
  
  ball=createSprite(385,200,10,10);
  ball.addImage(ballImage);
  ball.scale=0.4
  ball.velocityX=-7
  
  left=createSprite(-2,200,5,400);
  topEdge=createSprite(200,-2,400,5);
  bottom=createSprite(200,402,400,5);
  
  score=0
  
 
  
}

function draw() {
  background(205,153,0);
  
  text("Score:"+score,200,10);
  
  //createEdgeSprites();
  //ball.bounceOff(topEdge);
  
 
  ball.bounceOff(topEdge);
  ball.bounceOff(bottom);
 
  ball.bounceOff(paddle);
  
  if(keyDown(UP_ARROW)){
    paddle.y=paddle.y-20
    
    
  }
  
  if(keyDown(DOWN_ARROW)){
    paddle.y=paddle.y+20
  }
  
  rand1=random(5,10);
  rand2=random(-10,10);
  
  if(ball.bounceOff(left)){   
    ball.velocityX=rand1  
    ball.velocityY=rand2
    score=score+1;
     }
  
  if(ball.x>410){
    ball.y=200;
    ball.x=385
    
    paddle.x=395;
    paddle.y=200;
    
    score=0
  }
  
  if(paddle.y<0||paddle.y>400){
    paddle.x=395;
    paddle.y=200;
         
  }
  
  if(score>0 && score%5===0){
    cheering.play();
     }
  
 
  drawSprites();
  
}




