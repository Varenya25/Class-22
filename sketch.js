const Engine = Matter.Engine ;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, object, ball ;
function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  var obj_options = {
    isStatic : true
  }
  var ball_options = {
    restitution : 1.0
  }
  ball = Bodies.circle (200,100,20,ball_options);
  World.add (myWorld, ball);
  object = Bodies.rectangle (200,390,400,20, obj_options);
  World.add (myWorld, object);

  console.log (object);
  
}

function draw() {
  background("blue"); 
  Engine.update (myEngine); 

  rectMode (CENTER);
  rect (object.position.x, object.position.y, 400,20);
  ellipseMode (RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);
}