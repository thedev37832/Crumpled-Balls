
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box 
var box1
var box2,ground,circle1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Herebox Box
	box = new Box(750,610,20,100)
	box1 = new Box(600,610,20,100)
	box2 = new Box(675,650,130,20)
ground =  new Ground(400,690,800,50)
circle1 = new Paper(20,605,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

ground.display();
box.display();
box1.display();
box2.display();
circle1.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(circle1.body,circle1.body.position,{x:70,y:-75})
	}
}



