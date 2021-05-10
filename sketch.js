const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bg,snow;
function preload(){
bg=loadImage("snow1.jpg");

}
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
	world = engine.world;
  
  Engine.run(engine);
}

function draw() {
  background(bg);  
    
  
  if (frameCount%10==0){
    snow= new Snow(random(100,1100),0,25);









   snow.display();
    }
 
    
  }
  
