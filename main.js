function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("#000000");
    
}
function clearcanvas(){
    background("black");
}

function draw(){
  strokeWeigth(13);
  stoke("white");
  if(mouseIsPressed){
      line(pmouseX, pmouseY, mouseX, mouseY);
  }    
}