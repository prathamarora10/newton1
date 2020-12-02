
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball
var point

function preload()
{
	
}

function setup() {
	createCanvas(1000,1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	ball = new Ball(500,600,50)
	point = new Point(ball.body,{x:500,y:100})

	Engine.run(engine);
  
}


function draw() {
  background('gray')

	ball.display();
	point.display();
 
}