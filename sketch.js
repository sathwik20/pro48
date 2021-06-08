const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world

var ball,dustbin,ground;
var piller1,piller2,piller3,piller4,piller5,piller6,piller7,piller8;
var box1,box2,box2IMG
var flag=0
var bg
var jump

function preload(){
	box2IMG =loadImage("box2.png")
bg=loadImage("bg.png")
jump=loadSound("jump.mp3")
}


function setup() {
	createCanvas(1300, 700);
	engine = Engine.create();
	world = engine.world;

ball=new Ball(50,600,70,120)


ground= new Ground(400,680,1800,20)
//piller1 = new Piller(200,620,100,50)
piller2 = new Piller(300,500,100,350)
piller3 = new Piller(400,600,100,150)
piller4 = new Piller(500,420,100,500)
piller5 = new Piller(600,550,100,240)
piller6 = new Piller(700,400,100,540)
piller7 = new Piller(800,520,100,300)
piller8 = new Piller(900,420,100,500)
box1 = new Box(1200,620,150,150)


	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(bg);
  
Engine.update(engine)

ball.display()
ground.display()

//dustbinbottom.display()
//piller1.display();
piller2.display();
piller3.display();
piller4.display();
piller5.display();
piller6.display();
piller7.display();
piller8.display();
box1.display();
var collision=Matter.SAT.collides(ball.body,box1.body)
if(collision.collided){

	flag=1

}
if(flag===1){

textSize(30)
text("YOU GOT THE TRESSURE BOX",500,350)
//disappear(box1);
image(box2IMG,1200,600,300,300)


}



// drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

	
	Matter.Body.applyForce(ball.body,ball.body.position,{x:400,y:-300})
	jump.play()

}

}

