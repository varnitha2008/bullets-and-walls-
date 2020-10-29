var wall,thickness ;
var bullet,speed,weight;
var lbullet,lwall;

function setup() {
  createCanvas(1200,800);

  thickness=random(22,83);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="brown";

  bullet=createSprite(200,200,50,50)


 
  speed=random(223,321);
  weight=random(350,52);

}

function draw() {
  background(0,0,0);  
  

  if(hasCollided(wall,bullet)){ 
    bullet.velocityX=0;
   
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10)
{       

  wall.shapeColor=color(255,0,0);
  }
  if(damge<10)
{            
  wall.shapeColor=color(0,255,0)
}

} 
  drawSprites();

}
function hasCollided(lwall,lbullet){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){     
  
    return true 
  }
  else {
    return false 
  }
    
   
}

