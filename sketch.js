const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball;
var constr;
var ball1
var constr1;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  
  world = engine.world;
  var b_prop={
    restitution: 0.5,
  }
  ball = Bodies.circle(100,100,20,b_prop)
// add to the world
World.add(world,ball)

ball1 = Bodies.circle(100,150,20,b_prop)
// add to the world
World.add(world,ball1)

var c_prop = {
  bodyA: ball,
  pointB: {x:100,y: 20},
   length: 200,
   stiffness: 0.2
}

constr = Matter.Constraint.create(c_prop)
World.add(world,constr);

var c1_prop = {
  bodyA: ball1,
  bodyB: ball,
  length: 200,
  stiffness: 0.2
}

constr1 = Matter.Constraint.create(c1_prop)
// add to the world
World.add(world,constr1);



  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20,20);
  ellipse(ball1.position.x,ball1.position.y,20,20);

  //draw a line to see the constaring 
  //push & pop 
  push();
  strokeWeight(2);
  stroke(255);
  line(ball.position.x,ball.position.y,constr.pointB.x,constr.pointB.y);
  line(ball.position.x,ball.position.y,ball1.position.x,ball1.position.y)
  pop();
}

//capture right arrow key press
function keyPressed(){
  //check right arrow is pressed 
  //ASCII
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  }
  if(keyCode===LEFT_ARROW){
    Matter.Body.applyForce(ball1,{x:0,y:0},{x:-0.05,y:0})
  }
}

