const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= Matter.Body;
const Constraint= Matter.Constraint;

var engine,world;
var ground,ball;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12,box13,box14;
var chain;


function setup() {
  createCanvas(1300,700);
engine=Engine.create();
world=engine.world;

ground=new Ground(650,690,1300,20);
ball=new Ball(500,300,30);

box6=new Box(600,100,70,70);
box7=new Box(600,150,70,70);
box1=new Box(600,200,70,70);
box2=new Box(600,300,70,70);
box3=new Box(600,400,70,70);
box4=new Box(600,500,70,70);
box5=new Box(600,600,70,70);

box8=new Box(700,100,70,70);
box9=new Box(700,450,70,70);
box10=new Box(700,200,70,70);
box11=new Box(700,250,70,70);
box12=new Box(700,300,70,70);
box13=new Box(700,350,70,70);
box14=new Box(700,400,70,70);

chain=new Chain(ball.body,{x:500,y:150});

}

function draw() {
  background("red"); 
  Engine.update(engine);
  ground.display();
  
  ball.display();
  box6.display();
  box7.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

  chain.display();


}
function mouseDragged()
{
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}