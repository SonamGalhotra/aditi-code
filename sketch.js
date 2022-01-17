const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg;
var backgroungImg;
var walkingGirl;
var girl;
var bird_flying;
var bird1;

function preload() {
  backgroungImg= loadImage("background.jpg");
  walkingGirl = loadAnimation("girl1.png","girl2.png","girl3.png","girl4.png","girl5.png");
  bird_flying = loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png");
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  bg = createSprite(windowWidth/2,windowHeight/2,20,30);
  bg.addImage("moving",backgroungImg);
  bg.scale = 0.75;

  bg.velocityX=-1;


 
  girl = createSprite(90, 1000, 20, 20);
  girl.addAnimation("walking",walkingGirl);
  girl.scale = 1.5;



  bird1=createSprite(800,550,30,40);
  bird1.addAnimation("flying",bird_flying);
  bird1.scale=0.3

}

function draw() {
  background("pink");
  Engine.update(engine);


  drawSprites();
}
