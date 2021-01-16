var canvas;
var music;
var ball , edge1 ,edge2,edge3,edge4, sur1 , sur2 ,sur3 , sur4 ;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    ball=createSprite(random(20,750))
    ball.scale=0.2
    ball.shapeColor="white"
    ball.velocityX=-4
    ball.velocityY=4
    //create 4 different surfaces
     sur1=createSprite(100,580,200,20)
     sur1.shapeColor="blue"

     sur2=createSprite(305,580,200,20)
     sur2.shapeColor="orange"

     sur3=createSprite(510,580,200,20)
     sur3.shapeColor="purple"
     
     sur4=createSprite(715,580,200,20)
     sur4.shapeColor="green"

     edge1=createSprite(0,150,10,900)
     edge1.visible=false

     edge2=createSprite(800,150,10,900)
     edge2.visible=false

     edge3=createSprite(500,0,1000,10)
     edge3.visible=false

     edge4=createSprite(500,600,1000,10)
     edge4.visible=false


 
    }
 
    function draw(){

      background("black")

      if(ball.bounceOff(edge1)){
          ball.velocityX=4
      }

      if(ball.bounceOff(edge4)){
        ball.velocityy=4
    }

    if(ball.bounceOff(edge2)){
        ball.velocityX=-4
    }

    if(ball.bounceOff(edge3)){
        ball.velocityX=-4
    }


    if(ball.isTouching(sur1)&& ball.bounceOff(sur1)){
        ball.shapeColor="blue"
        ball.velocityY=-4
    }

    if(ball.isTouching(sur2)&& ball.bounceOff(sur2)){
        ball.shapeColor="orange"
        ball.velocityY=0
        ball.velocityX=0
        music.play();
    }
    if(ball.isTouching(sur3)&& ball.bounceOff(sur3)){
        ball.shapeColor="purple"
        ball.velocityY=-4
    }   
     if(ball.isTouching(sur4)&& ball.bounceOff(sur4)){
        ball.shapeColor="green"
        ball.velocityY=-4
    }
















        drawSprites();






    }

  

 
