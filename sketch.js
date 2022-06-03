function setup() {
  createCanvas(400, 600);
  createGrid();
  createBigCube();
  createCube();
  createEl();
  pickThree()
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
  l.draw();
  l2.draw();
  checkIsClicked(c);
  checkIsClicked(bc);
  checkIsClicked(l);
} //end draw
function pickThree(){
  let rndNum = Math.floor(random(3));
  if(rndNum == 0){
    c.x = 30;
  }
}
function checkIsClicked(thisTetramino) {
  //console.log(secondTetramino)
  /*this function will receive a shape, and 
  make that shape follow the mouse
 */
  if (thisTetramino === l && thisTetramino.isClicked) {
    l.locate(mouseX, mouseY);
    l2.locate(mouseX, mouseY + 30);
  } else {
    if (thisTetramino.isClicked) {
      thisTetramino.locate(mouseX - 15, mouseY - 15);
    }//end if
  }//end else
}//end checkIsClicked
