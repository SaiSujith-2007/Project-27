
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rop3, rope4, rope5;
var roof1, roof2, roof3, roof4, roof5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new bob(300,350,20);
bob2=new bob(350,350,20);
bob3=new bob(400,350,20);
bob4=new bob(450,350,20);
bob5=new bob(500,350,20);
roof1=new ground(300,100,100,40);
roof2=new ground(330,100,100,40);
roof3=new ground(370,100,100,40);
roof4=new ground(410,100,100,40);
roof5=new ground(440,100,100,40);
rope1= new rope(bob1.body,roof1.body);
rope2= new rope(bob2.body,roof2.body);
rope3= new rope(bob3.body,roof3.body);
rope4= new rope(bob4.body,roof4.body);
rope5= new rope(bob5.body,roof5.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW){
   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-200,y:-100});
  }
} 

