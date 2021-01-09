var car,wall;
var speed,weight;

function setup() {
  createCanvas(1300,300);
 
  //setting the var speed and weight to be at any point
  speed=random(60,90);
  weight=random(400,1500);
 
 
  // sprites for move the car and creating car and the wall
  car = createSprite(50, 150, 40, 40);
  car.shapeColor=("magenta")
  car.velocityX=speed;
 
  wall = createSprite(1200, 150, 30,height/2);
  wall.shapeColor=("blue")
}

function draw() {
  background("black");
 
  if(wall.x-car.x<(wall.width/2+car.width/2))
  {
    car.velocityX=0;
    var deformation=0.5 * width * speed *speed/22509
    if(deformation>180)
    {
      car.shapeColor=color(0, 255, 0)
    }
    if(deformation>180 && deformation>100)
    {
      car.shapeColor=color(230, 230, 0)
    }
    if(deformation<100)
    {
      car.shapeColor=color(255, 0, 0)
    }
  }


drawSprites();
}
