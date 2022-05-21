
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var stand
var block


function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height-10,width,30)
  stand = new Stand(90,450,100,10)
  
  blockf6 = new Block(500,height-70,50,50)
  blockf1 = new Block(550,height-70,50,50)
  blockf2 = new Block(600,height-70,50,50)
  blockf3 = new Block(650,height-70,50,50)
  blockf4 = new Block(700,height-70,50,50)
  blockf5 = new Block(750,height-70,50,50)
  blockf7 = new Block(800,height-70,50,50)
  
  blocks1 = new Block(525,height-130,50,50)
  blocks2 = new Block(575,height-130,50,50)
  blocks3 = new Block(625,height-130,50,50)
  blocks4 = new Block(675,height-130,50,50)
  blocks5 = new Block(725,height-130,50,50)
  blocks6 = new Block(775,height-130,50,50)

  blockst1 = new Block(550,height-190,50,50)
  blockst2 = new Block(600,height-190,50,50)
  blockst3 = new Block(650,height-190,50,50)
  blockst4 = new Block(700,height-190,50,50)
  blockst5 = new Block(750,height-190,50,50)
  
  

  //block1 = new Block(535,50,50,50)
  //block2 = new Block(630,50,50,50)
  //block3 = new Block(480,100,50,50)

}


function draw() 
{
  background(51);
  Engine.update(engine);
  blockf1.display();
  blockf2.display();
  blockf3.display();
  blockf4.display();
  blockf5.display();
  blockf6.display();
  blockf7.display();

  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();

  blockst1.display();
  blockst2.display();
  blockst3.display();
  blockst4.display();
  blockst5.display();




  ground.display();
  stand.display();
}

