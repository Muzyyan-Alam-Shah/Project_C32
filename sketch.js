var ground1, slingshot, polygon, ball;
var block1, block2,block3,block4 ,block5 ,block6 ,block7 ,block8,block9,block10,
block11 ,block12 ,block13 ,block14 ,block15 ,block16 ,block17 ,block18;


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder, ground2, ground3;


function preload()
{
	polygonImg = loadImage("polygon.png");

  backgroundImg = loadImage("sprites/bg.png");

  getBackgroundimg();
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
  world = engine.world;
  
  

	ground1 = new Ground();
	ground2 = new Ground(800,680,500,20);
	
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
	slingshot = new SlingShot(this.ball,{x:300, y:550});
  
    box1 = new Box(700,600,40,50);
	box2 = new Box(740,600,40,50);
	box3 = new Box(780,600,40,50);
	box4 = new Box(820,600,40,50);
	box5 = new Box(860,600,40,50);
	box6 = new Box(740,560,40,50);
	box7 = new Box(780,560,40,50);
	box8 = new Box(820,560,40,50);
	box9 = new Box(780,510,40,50);
	
	Engine.run(engine);
  
}


function draw() {
  if(backgroundImg){
    background(backgroundImg)
  }
  background(5);
  rectMode(CENTER);

  noStroke();
    textSize(35);
    fill("white");
    text("Score: "+score,width-300,50 );

  ground1.display();
  ground2.display();
 
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  imageMode(CENTER);
  image(polygonImg, ball.position.x, ball.position.y, 40,40);
  slingshot.display();
 
}

function mouseDragged(){
    Body.setPosition(this.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed()
{
    if(keyCode===32){
        slingshot.attach(polygon.body);
    }
}

async function getBackgroundimg(){
  var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON=await response.json();

  console.log(responseJSON);
  var dateTime=responseJSON.datetime;

  console.log(dateTime);
  var hour=dateTime.slice(11,13);
  console.log(hour);

  if(hour>06 && hour<=19){
      bg="sprites/bg.png";
  }else{
      bg="sprites/bg2.jpg";
      
  }
  backgroundImg=loadImage(bg);
  console.log(backgroundImg);
}