var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
 bullet= createSprite(50, 200, 50, 10);
 wall=createSprite(1200,200,random(22,83),100);


 speed=random(223,321)
 weight=random(30,42);
thickness=random(22,83)
 bullet.velocityX=speed;
}

function draw() {
  background("black");
 
  
  

  if(wall.x-bullet.x <(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    console.log(damage)
    if(damage===10 || damage>10){
      bullet.shapeColor=color("white");
      wall.shapeColor=color("red");
    }
    if(damage<10){
      bullet.shapeColor=color("white")
      wall.shapeColor=color("green")
    }
   
   
  }
  

  drawSprites();
}