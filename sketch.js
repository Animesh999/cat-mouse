

 var cat,catImg;
 var mouse,mouseImg;
 var cheesse,cheesseImg;
 var ground,groundImg;
var rock ,rockImg;
var invisibleGround;
 function preload(){

catImg=loadImage("images/cat.png");
mouseImg=loadImage("images/mouse.png");
cheesseImg=loadImage("images/cheesse.png"); 
groundImg=loadImage("images/ground.jpg");
rockImg=loadImage("images/rock.png");


 }
 
 function setup() {
  createCanvas(1920,800);
 
  cat=createSprite(100,620,50);
  cat.addImage(catImg);
  cat .scale=0.7;

  mouse=createSprite(400,650,50);
  mouse.addImage(mouseImg);
  mouse.scale=0.2;

  //rock=createSprite(650,700,50);
  //rock.addImage(rockImg);
  //rock.scale=0.3;

  //cheesse=createSprite(700,700,50,50);
  //cheesse.addImage(cheesseImg);
 // cheesse.scale=0.2;


 invisibleGround=createSprite(1000,780,2000,50)
 invisibleGround.visible=false;


}

function draw() {
  background(0);  
image(groundImg,0,0,1920,800)
if(keyDown ("UP_ARROW")){
  cat.velocityY=-20;
}

if(keyDown("w")){
   mouse.velocityY=-20;
}
mouse.velocityY+=5;
cat.velocityY+=5;

mouse.collide(invisibleGround);
cat.collide(invisibleGround);

if(keyDown("enter")){
  cat.velocityX=10;
  mouse.velocityX=10;
}
if(cat.x>2000||mouse.x>2000){
  cat.x=100;
  mouse.x=400;
}

  drawSprites();
}