const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine ,world , shape1,shape2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    stick1 = new Log(810,260,300, PI/2);
    stick2 =  new Log(810,180,300, PI/2);
    stick3 = new Log(760,120,150, PI/7);
    stick4 = new Log(870,120,150, -PI/7);



}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    stick1.display();
    stick2.display();
    stick3.display();
    stick4.display();

}