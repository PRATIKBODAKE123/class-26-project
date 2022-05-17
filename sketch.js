const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var paperImg,dustbinImg,button;
var radius = 70;


function preload(){

paperImg = loadImage("a.png")
dustbinImg = loadImage("b.png")
}


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	button = createImg('up.png');
	button.position(20,30);
	button.size(100,100);
	button.mouseClicked(Force);

	engine = Engine.create();
	world = engine.world;

	
	var ball_options={
		restitution: 0.95,
		frictionAir:0.01,
	}

	ball = Bodies.circle(260,100,radius/2.6,ball_options);
	World.add(world,ball);

	ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,10,120);
	rightSide = new Ground(1270,600,10,120);
	bottomSide = new Ground(1185,650,150,20);

	Engine.run(engine);
  
}


function draw() {
	background(255,255,255);
	rectMode(CENTER);


	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();


   	image(paperImg,10,575,100,100);
  
	
	image(dustbinImg,1085,465,200,200)



}

function Force() {


		Body.applyForce(ball,{x:0,y:0},{x:85,y:-85});
    
  	}

