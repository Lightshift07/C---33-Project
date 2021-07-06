const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies

var engine, world;
var bgImg
var snowflake

function preload(){
  bgImg = loadImage("snow2.jpg");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
}

function draw() {
  background(0);
  Engine.update(engine);  
  
  if(frameCount % 25 === 0){
    snowflake = new Snow(random(10, 790), 5) 
}
  //snow(); 
  snowflake.display();
  drawSprites();
  

}

function snow(){
   
}
