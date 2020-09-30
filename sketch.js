
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint

var ground, tree,treeImg;
var   mango1,tree1;
var engine, world;

function preload()
{

}

function setup() {
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	createCanvas(1200, 600);
	rectMode(CENTER);
  
  mango1=new Mango(800,250,40,40);

  mango2=new Mango(900,220,40,40);

  mango3=new Mango(1000,250,40,40);

  mango4=new Mango(900,150,40,40);

  tree1=new Tree(900,320,400,500)  
	
  boy1=new Boy(200,500,200,250)

  stone1=new Stone(140,440,40,40)

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("green")

	ground = Bodies.rectangle(width/2, height-35, width,10, {isStatic:true} );
 	World.add(world, ground);

	 throw1 = new Throw(stone1.body,{x:200,y:500});

  
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background(222);
  tree1.display();
  mango1.display();
  boy1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stone1.display();
  throw1.display();
  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased() {
	throw1.fly()
	}



