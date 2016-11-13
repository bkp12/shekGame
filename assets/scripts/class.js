function player(x, y, i) {
  this.speed = 5;
  this.xVel = 0;
  this.yVel = 0;
  this.xAccel = 0;
  this.yAccel = 0;
  this.onGround = false;
  this.frame = 1;

  gameObj.call(this, x, y, "shek"); //this line is the PARENTING function, where it passes parameters of the child object (player in this case) and gives it to the parent (gameObj)
  //this line does two things.  It gives player ALL of gameObj's properties AND the parameters of player object are passed to the gameObj
}

function stageBlock(x, y, i) {
  gameObj.call(this, x, y, i);
}

function flag(x, y, i) {
  gameObj.call(this, x, y, i);
}

function jumpBlock(x, y, i) {
  gameObj.call(this, x, y, i);
  this.beingPlaced = false;
  this.placed = false;
  this.exists = true;
}

function wallBlock(x, y, i) {
  gameObj.call(this, x, y, i);
}

function swiper(x) {
  var num = x;
  for(var i; i < x; i++)
  {
    console.log("swiper stop swiping");
  }
}
