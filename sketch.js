
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var sling;
var gs = "onSling";




function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	//mangoObjs
	mango1=new mango(1100,100,30);
	mango2 = new mango(Math.round(random(921, 1228)), Math.round(random(210, 270)), 30);
	mango3 = new mango(Math.round(random(921+30, 1228-15)), Math.round(random(210, 270)), 30);
	mango4 = new mango(Math.round(random(921+60, 1228-30)), Math.round(random(210, 270)), 30);
	mango5 = new mango(Math.round(random(921+90, 1228-45)), Math.round(random(210, 270)), 30);
	mango6 = new mango(Math.round(random(1005+120, 1072-60)), Math.round(random(75, 100)), 30);

	treeObj=new tree(1050,605);
	groundObject=new ground(width/2,600,width,20);
	stoneObj = new Stone(240, 490);
	sling = new Slingshot(stoneObj.body, {x: 240, y: 450});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,370,200,300);
  Engine.update(engine)

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  sling.display();


  groundObject.display();
  stoneObj.display();

  //call detectCollision
  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  detectCollision(stoneObj, mango6);

  push();
  stroke("black");
  fill(230);
  strokeWeight(3)
  rectMode(CENTER);
  rect(385,170, 500, 100)

  pop();

  push();

	textSize(20);
	textAlign(CENTER);
	strokeWeight(2);
	fill("blue");
	text("Press space to get back the stone!", 385, 170);

  pop();
 
  
}
function mouseDragged() {
	if(gs === "onSling") {
		Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY});
	}
}
function mouseReleased() {
	sling.fly();
	gs = "launched";
}


function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body, {x: 240, y: 490})
		sling.attach(stoneObj.body);
		gs = "onSling";		
	}
}
function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.radius) {
		Matter.Body.setStatic(lmango.body,false)
	}
}

