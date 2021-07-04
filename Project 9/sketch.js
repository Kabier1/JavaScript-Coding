var bc;

function setup() {
  createCanvas(400,400);
  bc = createSprite(200,200, 400, 400);
  bc.shapeColor = "black";
}


function draw() 
{
 background(30);

 if (keyDown(RIGHT_ARROW)) {
   bc.shapeColor="green"; 
 }
 if (keyDown(LEFT_ARROW)) {
  bc.shapeColor="red"; 
}
if (keyDown(UP_ARROW)) {
  bc.shapeColor="blue"; 
}
if (keyDown(DOWN_ARROW)) {
  bc.shapeColor="yellow"; 
}
 
 drawSprites();
}