const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1, bob2, bob3, bob4, bob5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof();

	bob1 = new Bob(180, 480, 55)
	bob2 = new Bob(290, 480, 55)
	bob3 = new Bob(400, 480, 55)
	bob4 = new Bob(510, 480, 55)
	bob5 = new Bob(620, 480, 55)

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(220);

	drawSprites();
	
	roof.display();

	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
}



