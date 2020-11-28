const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world, engine;
//Declare all the variables
var bluro2;
var ast1, ast2, ast3, ast4;
var bomb1, bomb2, bomb3, bomb4;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8;
var border;

function setup() {
  createCanvas(1280,610);
  engine = Engine.create();
  world = engine.world;
//White border
  var options={
    isStatic:true
}

border = Bodies.rectangle(640,305,100,300,options);
World.add(world,border);

  bluro2 = new Bluro();

  ast1 = new Ast(110,110,175,150);
  ast2 = new Ast(1160,110,175,150);
  ast3 = new Ast(110,500,175,150);
  ast4 = new Ast(1160,500,175,150);

  bomb1 = new Bomb(200,150,120,120);
  bomb2 = new Bomb(1070,150,120,120);
  bomb3 = new Bomb(200,500,120,120);
  bomb4 = new Bomb(1070,500,120,120);

  coin1 = new Coin(600,110,30);
  coin2 = new Coin(640,110,30);
  coin3 = new Coin(640,310,30);
  coin4 = new Coin(600,310,30);


  
  Engine.run(engine);
}


function draw() {
  background("#003b59");
  rectMode(CENTER);
  stroke("white");
  strokeWeight(10);
  noFill();
  rect(border.position.x, border.position.y,1250,560);
  ast1.display();
  ast2.display();
  ast3.display();
  ast4.display();

  bomb1.display();
  bomb2.display();
  bomb3.display();
  bomb4.display();

  coin1.display();
  coin2.display();
  coin3.display();
  coin4.display();

  bluro2.display();
  }

  function keyPressed(){
    if(keyCode===UP_ARROW){
    bluro2.body.position.y -= 20;
    }

    if(keyCode===DOWN_ARROW){
      bluro2.body.position.y += 20;
      }

    if(keyCode===RIGHT_ARROW){
      bluro2.body.position.x += 20;
      }

    if(keyCode===LEFT_ARROW){
      bluro2.body.position.x -= 20;
      }
  }

