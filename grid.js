let grid = [];
function createGrid() {
  for (j = 0; j < 10; j++) {
    grid[j] = []
    for (i = 0; i < 10; i++) {
      //this will make a row of 10
      grid[j][i] = new Clickable(20 + i * 30, 20 + j *30);
      grid[j][i].text = "";
      grid[j][i].cornerRadius = 0;
      grid[j][i].width = 30;
      grid[j][i].height = 30;
    } //end i loop
  } //end j loop
} //end createGrid
