let c;
function createCube(){
  c = new Clickable(20,350);
  c.cornerRadius = 0;
  c.text = ""
  c.resize(60,60);
  c.color = "purple";
  c.onPress = function(){
    c.isClicked = true;
  }
  c.onRelease = function(){
    c.isClicked = false;
  }
  
}
