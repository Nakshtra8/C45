var bg,bgimg;
var balloon,balloonimg;
var bottomGround,topGround;

function preload(){
bgimg=loadImage("assets/bg.png")
balloonimg=loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
  bg = createSprite(165,485,10,10);
  bg.addImage(bgimg)
  bg.scale=1.7

  balloon = createSprite(100,200,20,50)
  balloon.addAnimation("balloon",balloonimg)
  balloon.scale=0.2
  //creating bottomGround
  bottomGround = createSprite(200,390,800,20)
  bottomGround.visible = false
  //creating topGround
  topGround = createSprite(200,10,800,20)
  topGround.visible = false

}

function draw(){
  background("black")
  //making the hotair balloon jump
  if(keyDown("space")){
    balloon.velocityY = -6
  }
  //adding gravity
  balloon.velocityY += 2
drawSprites()
}