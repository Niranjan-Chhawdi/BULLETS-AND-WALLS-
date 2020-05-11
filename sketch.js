var thickness,wall;
var bullet,weight,speed;


function setup() {
  createCanvas(1600,400); 
  bullet = createSprite(50, 200, 50, 50);
 

  wall = createSprite(1200,200,60,400/2);
    


  bullet.velocityX = 6;

   speed = random(55,90); 
  weight = random(400,1500); 
  thickness = random(22,83);

}

function draw() {
  background(255,255,255);

  bullet.shapeColor = ("green"); 
  
  wall.shapeColor = ("black");

 
  
    if(wall.x-bullet.x < (bullet.width + wall.width)/2){

      bullet.velocityX = 0;
      var deformation = 0.5 * weight * speed * speed/22509;

      if(deformation > 180){
         wall.shapeColor = color(255,0,0);   
      }
       
      if (deformation < 180 && deformation > 100){
        wall.shapeColor = color(0,255,0);
      }
    }

  drawSprites();
}