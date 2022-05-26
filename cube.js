let c;
function createCube(){
  c = new Clickable(20,350);
  c.cornerRadius = 0;
  c.text = ""
  c.resize(60,60);
  c.color = "purple";
  c.onPress = function(){
    c.isClicked = true;
  }//end onPress
  c.onRelease = function(){
    c.isClicked = false;
    c.x = Math.floor(c.x / 30)*30
    c.y = Math.floor(c.y / 30)*30 
    findSpot(c.x, c.y);
  } //end onrelease 
}//end CreateCube

function findSpot(thisX, thisY){
  //this function will find out where the 
  //block got dropped
  for(j=0 ; j< 10 ; j++){
    for(i=0 ; i<10 ; i++){
      if(grid[j][i].x == thisX && grid[j][i].y == thisY){
        grid[j][i].color = "yellow";
        grid[j+1][i].color = "yellow";
        grid[j][i+1].color = "yellow";
        grid[j+1][i+1].color = "yellow";
      }// end if
    }//end i loop
  }//end j loop
  c.x = 500
}//end find spot
