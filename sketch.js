const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(500,200,50);
    iron   = new Iron(200,200);
    stone1  = new Stone(800,200,21);
    stone2  = new Stone(830,200,21);
    stone3  = new Stone(860,200,21);
    stone4  = new Stone(890,200,21);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();

 
}