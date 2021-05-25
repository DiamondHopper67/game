const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball;
var pole;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,580,1200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution:0.5
    }
    ball = Bodies.circle(200,100,10,ball_options);
    World.add(world,ball);
    pole = Bodies.rectangle(600,200,20,20,ground_options);
    World.add(world,pole);
    rope = new Rope(pole.body, ball.body);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,10,10);
    rect(pole.position.x,pole.position.y,20,20);
    rope.display()
}