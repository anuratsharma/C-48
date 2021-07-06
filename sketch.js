var b1,b2,b3,b4,b1Img,b2Img,b3Img,b4Img,b5Img,bgImg;
var score = 0 ;

function preload(){
  b1Img=loadImage("Images/b1.png");
  b2Img=loadImage("Images/b2.png");
  b3Img=loadImage("Images/b3.png");
  b4Img=loadImage("Images/b4.png");
  b5Img=loadImage("Images/b5.png");
  bgImg=loadImage("Images/bg.png");
}
function setup(){
    createCanvas(1200,600);
    b1=createSprite(1200,400,20,50);
    b1.addImage(b1Img);
    b1.scale=0.5;

    b2=createSprite(100,400,20,50);
    b2.addImage(b2Img);

    b3=createSprite(300,400,20,50);
    b3.addImage(b3Img);

    b4=createSprite(500,400,20,50);
    b4.addImage(b4Img);

    b5=createSprite(900,400,20,50);
    b5.addImage(b5Img);

    b1.setCollider("circle",0,0,50);
    b1.debug = true;
}
function draw(){
  background(bgImg);
    textSize(20);
    fill("red");
    text("Score : " + score ,100,100);

    b1.velocityX=-2;
   
   if(b1.isTouching(b2)){
      b2.destroy();
      score = score + 1;
    }
    if(b1.isTouching(b3)){
      b3.destroy();
      score = score + 1;
    }
    if(b1.isTouching(b4)){
      b4.destroy();
      score = score + 1;
    }
    if(b1.isTouching(b5)){
      b5.destroy();
      score = score + 1;
    }
    if(score===4){
    text("You Win",600,600);
    }
    if(b1.x === 1000 && score === 4)
    b1.remove();
    
    
    
    drawSprites();
}