
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ball1 = new Ball(400,400,100,100)
	ball2 = new Ball(400,300,100,100)
	ball3 = new Ball(300,400,100,100)
	ball4 = new Ball(400,400,200,100)
	ball5 = new Ball(400,400,100,200)

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

}



