let bc;
function createBigCube(){
  bc = new Clickable(600,350);
  bc.cornerRadius = 0;
  bc.text = ""
  bc.resize(90,90);
  bc.color = "blue";
  bc.onPress = function(){
    bc.isClicked = true;
  }//end onPress
  bc.onRelease = function(){
    bc.isClicked = false;
    checkInGrid(bc)
    bc.x = Math.floor(bc.x / 30)*30
    bc.y = Math.floor(bc.y / 30)*30 
    findSpotBigCube(bc.x, bc.y);
  } //end onrelease 
}//end CreateCube
function findSpotBigCube(thisX, thisY){
  //this function will find out where the 
  //block got dropped
  for(j=0 ; j< 10 ; j++){
    for(i=0 ; i<10 ; i++){
      if(grid[j][i].x == thisX && grid[j][i].y == thisY){
        grid[j][i].color = "yellow";
        grid[j+1][i].color = "yellow";
        grid[j][i+1].color = "yellow";
        grid[j+1][i+1].color = "yellow";
        grid[j+1][i+2].color = "yellow";
        grid[j+2][i+1].color = "yellow";
        grid[j+2][i].color = "yellow";
        grid[j+2][i+2].color = "yellow";
        grid[j][i+2].color = "yellow";
      }// end if
    }//end i loop
  }//end j loop
  bc.x = 500
}//end find spot
