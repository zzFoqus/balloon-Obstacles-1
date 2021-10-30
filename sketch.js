var bgImg,bg
var topGround,bottomGround
var balloon,balloonImg


function preload() {
  bgImg=loadImage("sprites/bg.png")
  balloonImg=loadAnimation("sprites/balloon1.png","sprites/balloon2.png","sprites/balloon3.png")
}

function setup(){
   bg=createSprite(170,400)
   bg.addImage(bgImg)
   bg.scale=1.1

   topGround=createSprite(200,10,700,20)
   topGround.visible=false

   bottomGround=createSprite(200,390,700,20)
   bottomGround.visible=false

   balloon=createSprite(100,200,20,50)
   balloon.addAnimation("balloon",balloonImg)
   balloon.scale=0.2
}

function draw(){
   background("black")

    if(keyDown("space")){

        balloon.velocityY=-6

    }

    balloon.velocityY=balloon.velocityY+2



























   drawSprites()

}





/*async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}*/