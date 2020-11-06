
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var SurvivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  // Creating Monkey:
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  //Creating Ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4
  ground.x=ground.width/2;
  console.log(ground.X);
  
  
}

function draw() {
  background(225);
  
  if (ground.x<0){
    ground.x=ground.width/2; 
    SurvivalTime=Math.ceil(frameCount/frameRate());
  }
  
  text("SurvivalTime:"+SurvivalTime,200,50)
  if(keyDown("space")){
    monkey.velocityY = monkey.velocityY=-6;}
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  spawnbanana();
  spawnstone();
drawSprites();
  
}

function spawnbanana (){
  if (frameCount % 75 === 0){
    var banana1 = createSprite(400,200,10,40);
    banana1.addImage(bananaImage)
    banana1.lifeTime=150;
    banana1.scale=0.1
    banana1.velocityX = -6
    banana1 = Math.round(random(120-200))}
  
}
function spawnstone (){
  if (frameCount % 175 === 0){
   var stone = createSprite(400,330,10,40);
    stone.addImage(obstacleImage)
    stone.lifeTime=150;
    stone.scale=0.1
    stone.velocityX = -6}
  
}

function jumpmonkey (){
   monkey.velocityY = -12
}


