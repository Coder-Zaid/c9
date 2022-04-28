var box 
function setup() {
  createCanvas(600,600);
  box=createSprite (300,300,30,30)
  box.shapeColor="red"
}

function draw() 
{

  background(125,125,125);
  if (keyDown ("RIGHT_ARROW")){
    box.x=box.x+2
  }
  if (keyDown ("LEFT_ARROW")){
    box.x=box.x-2
  }
  if (keyDown ("UP_ARROW")){
    box.y=box.y-2
  }
  if (keyDown ("DOWN_ARROW")){
    box.y=box.y+2
  }
drawSprites()
}




