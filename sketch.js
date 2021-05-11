const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var bg;
var ice = [];

function preload(){
     bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);

  if(frameCount % 250 === 0){
    for(var i=0; i<150; i++){
    ice.push(new Snow(random(20,1000),random(20,1000),20));
    }
    }

  
}
 

function draw() {
  Engine.update(engine);
  background(bg);  
  
  for(var i = 0;i < 150; i++){
    ice[i].display();
    ice[i].updateY();
    }  

 

  drawSprites();
}