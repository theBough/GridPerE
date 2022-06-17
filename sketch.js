let position = 30;
let pickedNums = [];
let numOfShapes = 3;
let whatShape = 0;
function setup() {
  createCanvas(400, 600);
  createGrid();
  createBigCube();
  createCube();
  createEl();
  pickThree();
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

function pickThree() {
  let rndNum = Math.floor(random(numOfShapes));
  pickedNums = [];
  position = 30;
  for (i = 0; i < 3; i++) {
    while (pickedNums.includes(rndNum)) {
      rndNum = Math.floor(random(numOfShapes));
    } //end while loop
    pickedNums.push(rndNum);
    if (rndNum == 0) {
      c.x = position;
      c.y  =360
    } else if (rndNum == 1) {
      bc.x = position;
      bc.y = 360
    } else if (rndNum == 2) {
      l.x = position;
      l2.x = position;
      l.y = 360;
      l2.y = l.y+30
    } //end if block
    position += 150;
    rndNum = Math.floor(random(numOfShapes));
  } //loop
}
function NewPickThree() {
  /*this function will check to see if the
  third shape has been placed from the bottom.
  If it has, it will place three new shapes
  */
  whatShape += 1;
  if (whatShape == 3) {
    pickThree();
    whatShape = 0;
  }
} //
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
    } //end if
  } //end else
} //end checkIsClicked
