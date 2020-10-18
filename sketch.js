
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}
var paper;
function setup() {
	createCanvas(800, 700);

/*
}*/
	engine = Engine.create();
	world = engine.world;
	dustbin=new Dustbin(700,680,20,100)
	//Create the Bodies Here.
	dustbin1=new Dustbin(650,670,100,20)
	dustbin2=new Dustbin(630,680,20,100)
	paper=new Paper(200,450,40);

ground=new Ground()
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
dustbin.display()
dustbin1.display()
dustbin2.display()
paper.display()
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === 32) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}

