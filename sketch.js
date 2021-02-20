var fr,mr

function setup() {
  createCanvas(800,400);
  fr=createSprite(400, 200, 50, 50);
  fr.shapeColor="red"
  mr=createSprite(400, 200, 90, 50);
   mr.shapeColor="red"
}

function draw() {
  background("yellow");  
  mr.x=mouseX
  mr.y=mouseY
  var d = mr.x-fr.x  //distance 
  console.log(d)
  if(mr.x-fr.x<fr.width/2+mr.width/2 && fr.x-mr.x<fr.width/2+mr.width/2 && mr.y-fr.y<fr.height/2+mr.height/2 && fr.y-mr.y<fr.height/2+mr.height/2)
  {
  mr.shapeColor="blue"
  fr.shapeColor="blue"
  }
  else
  {
    mr.shapeColor="red"
    fr.shapeColor="red"
  }
  drawSprites();
}
