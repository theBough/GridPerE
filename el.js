let l;
let l2;
function createEl(){
  l = new Clickable(600,350);
  l.cornerRadius = 0;
  l.text = ""
  l.resize(30,60);
  l.color = "purple";
  l.onPress = function(){
    l.isClicked = true;
  }//end onPress
  l.onRelease = function(){
    l.isClicked = false;
    l.x = Math.floor(l.x / 30)*30
    l.y = Math.floor(l.y / 30)*30 
    l2.x = l.x;
    l2.y = l.y+30
   findSpotEl(l.x,l.y)
  } //end onrelease 
   l2 = new Clickable(600,380);
  l2.cornerRadius = 0;
  l2.text = ""
  l2.resize(60,30);
  l2.color = "purple";
  l2.onPress = function(){
    l2.isClicked = true;
  }//end onPress
  l2.onRelease = function(){
    l2.isClicked = false;
    l2.x = Math.floor(l2.x / 30)*30
    l2.y = Math.floor(l2.y / 30)*30 
    findSpotEL(l.x, l.y);
  } //end onrelease 
}//end CreateEl

function findSpotEl(thisX, thisY){
  //this function will find out where the 
  //block got dropped
  for(j=0 ; j< 10 ; j++){
    for(i=0 ; i<10 ; i++){
      if(grid[j][i].x == thisX && grid[j][i].y == thisY){
        grid[j][i].color = "yellow";
        grid[j+1][i].color = "yellow";
        grid[j+1][i+1].color = "yellow";
        
      }// end if
    }//end i loop
  }//end j loop
  l.x = 500
  l2.x = 500
}//end find spot
