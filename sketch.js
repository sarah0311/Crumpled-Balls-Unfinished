
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin1, dustbin2, dustbin3, ground;

function setup() {
	createCanvas(800,300);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(70, 40, 10);

	//dustbin1 = new Dustbin()

	ground = new Ground(400,250,800,10);

	Engine.run(engine);
}

function draw() {
  //rectMode(CENTER);
  background(0);
  
  paper.display();

  ground.display();

  drawSprites();
 
}



