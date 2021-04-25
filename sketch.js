
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


engine = Engine.create();
world = engine.world;
hammer= new Hammer(10,100)
iron =new Iron(300,300)
ground=new Ground(600,height,1200,70)
rubber= new Rubber(700,300,70)	
stone= new Stone(900,300)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display();
  drawSprites();
  ground.display();
  iron.display()
  rubber.display();
  stone.display();
}


