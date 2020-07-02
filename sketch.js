
var ground;
var paperObject;
var dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);

	ground = createSprite(600,height,1200,20);
	ground.Bodies = color("yellow")

	engine = Engine.create();
	world = engine.world;

	
	dustbin1 = new dustbin(1000,340,10,100);
	dustbin2 = new dustbin(1050,385,95,10);
	dustbin3 = new dustbin(1100,340,10,100);

	var options= {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2

	}

	paperObject = Bodies.circle(100,370,30,options);
	World.add(world,paperObject);

}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipseMode(RADIUS);
  ellipse(paperObject.position.x,paperObject.position.y,20,20);
  
  drawSprites();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  paperObject.collide(dustbin1);
  paperObject.collide(dustbin2);
  paperObject.collide(dustbin3);
}

function keyPressed(){
	if (KeyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	}
}

