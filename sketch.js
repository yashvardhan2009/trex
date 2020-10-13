var car,carImage;

var wall;

function preload(){

carImage = loadImage("car1.png");



}

function setup() {
  createCanvas(600,600);
  car = createSprite(35, 290, 10,10);
  car.addImage(carImage);
  car.scale = 0.1;
  car.shapeColor = ("yellow")

  wall = createSprite(580,300,50,600);
  wall.shapeColor = "green";

}

function draw() {
  background(170); 

  console.log(car.x)
  
  if(keyDown(RIGHT_ARROW)){

    car.velocityX = 3.5;

  }

if (car.x >  535)  {

car.x = 535;

}

  if (wall.x - car.x < (wall.width + car.width)/10) {
 
      wall.shapeColor = "red";
      car.x = 35;
      car.velocityX = 0;
      
    }
else {
  wall.shapeColor = "grey";
}

  drawSprites();
}