function setup() {
  createCanvas(400, 400);
  createGrid();
} //end setup

function draw() {
  background(220);
  for (j = 0; j < 10; j++) {
    for (i = 0; i < 10; i++) {
      grid[j][i].draw();
    } //end i loop
  } //end j loop
} //end draw
