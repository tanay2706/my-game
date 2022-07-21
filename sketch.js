var ground
var character;
var bullet;
var time = 0;
var mainshipimage;
var enemyImage;
var gameState = "play"


function preload(){
  bulletImage = loadImage("bullet.png");
  mainshipimage = loadImage("main character.png");
  enemyImage = loadImage("enemy.png");

  character.debug = true;

}

function setup(){
  createCanvas(windowWidth,windowHeight);
  character=createSprite(100,height - 200,20,20);
  ground=createSprite(width/2,height - 50,width,10);
  bulletGroup = createGroup();
  enemiesGroup = createGroup();

  character.addImage(mainshipimage);
  character.scale = 0.3;



}

function draw(){
  background("black");

  if(gameState === "play"){
    if(keyDown(UP_ARROW)){
      character.velocityY = -10;
    }
  
    if(keyDown(DOWN_ARROW)){
      character.velocityY = 10;
    }
    if(enemiesGroup.isTouching(character)){
      gameState = "end";
    }
    
    
  
    character.collide(ground);
    
  
    spawnEnemies();
  
    if(keyDown("space") ){
      time = 0
      time = frameCount;
      console.log(time);
  
      
      bullet = createSprite(character.x,character.y);
      bullet.addImage(bulletImage);
      bullet.velocityX = 20;
      bullet.scale = 0.1;
      bulletGroup.add(bullet);
    }
  
    if(bulletGroup.isTouching(enemiesGroup)){
      enemy.remove();
    }



    if(gameState === "end"){
      enemiesGroup.setVelocityXEach(0);
      textSize(45,50);
      text("game Over",width / 2 - 100,height / 2 );

    }
  }


  
  

    
  
 

  drawSprites();
}

function spawnEnemies(){
  if(frameCount %100 === 0 ){
    enemy = createSprite(width,Math.round(random(50,height - 50)),20,20)
    enemy.addImage(enemyImage);
    enemy.scale = 0.5;
    enemy.velocityX = -5;
    enemiesGroup.add(enemy);
    
  }
  
}