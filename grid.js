let grid = [];
function createGrid() {
  for (i = 0; i < 10; i++) {
    grid[i] = new Clickable(20 + i * 20, 20);
    grid[i].text = "";
    grid[i].cornerRadius = 0;
    grid[i].width = 30;
    grid[i].height = 30;
  } //end loop
} //end createGrid
