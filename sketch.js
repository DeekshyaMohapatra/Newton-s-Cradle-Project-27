
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope3,rope4,rope5;
var bgImage,textImage;

function preload()
{
  bgImage = loadImage("BOBbackground.PNG");
  textImage = loadImage("newton.PNG");
}

function setup() {
	createCanvas(1200, 900);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(600,150,580,40);
	bob1 = new Bob(400,550,this.radius);
	bob2 = new Bob(500,550,this.radius);
	bob3 = new Bob(600,550,this.radius);
	bob4 = new Bob(700,550,this.radius);
	bob5 = new Bob(800,550,this.radius);

	rope1 = new Rope(bob1.body,roof.body,-200,0);
	rope2 = new Rope(bob2.body,roof.body,-100,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,100,0);
	rope5 = new Rope(bob5.body,roof.body,200,0);
      
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  strokeWeight(5); 
  stroke("black");
  imageMode(CENTER); 
  image(bgImage,600,450,1200,900);
  image(textImage,600,700,330,70);
  textSize(32);
  
  text("Press Up Arrow",130,400);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  

  
  //drawSprites();
  
}
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-400,y:-395});
  }
  
}



