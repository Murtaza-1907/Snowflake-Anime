const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var snow,engine,world
 var snowfall =[]
 function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  // createSprite(400, 200, 50, 50);
 
}
function preload()
{
  snow =loadImage("snow1.jpg")
}
function draw() {
  Engine.update(engine);
  background(snow); 
  if(frameCount%30 === 0)
{
  snowfall.push(new Snow(random(200,700),10,50,25))
}
  drawSprites();

for(var l=0;l<snowfall.length;l++)
{
  snowfall[l].display();
}
console.log(snowfall)
// console.log(particles)
}