function setup() {
  createCanvas(400, 400);
  createGrid();
  createCube();
  createBigCube();
} //end setup

function draw() {
  background(220);
  for (j = 0; j < 10; j++) {
    for (i = 0; i < 10; i++) {
      grid[j][i].draw();
    } //end i loop
  } //end j loop
  
  c.draw();
  bc.draw();
  checkIsClicked(c);
  checkIsClicked(bc);
} //end draw

function checkIsClicked(thisTetramino){
  /*this function will receive a shape, and 
  make that shape follow the mouse
  */
  if(thisTetramino.isClicked){
    thisTetramino.locate(mouseX -15 , mouseY-15);
  }
}
