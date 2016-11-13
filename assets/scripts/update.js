function update() { //before the tick draws, it will update all the objects on the screen (ex: move a player right)
  kinematics(player1);
  player1.onGround = false; //you need to assume the player is not on the ground at the beginning of every update
  for (var i = 0; i < stageBlocks.length; i ++) {
    collision(player1, stageBlocks[i]); //we just want collision detection for the player
  }
  for(var i = 0; i < jumpBlocks.length; i++){
    collision(player1, jumpBlocks[i]);
  }
  /*for(var index = 0; i < jumpBlocks.???; i++){        PLACEHOLDER!!
    collsion(player1, jumpBlocks)
}*/
  deathCheck();
  scroll(); //constantly scrolls the stage with shrek
  scrollException();
  animShek();
  updateJumpBlock();
}

function scroll() {
  if (levelPlay) {
    scrollX += scrollSpeed * game.dt;
  }
}

function updateJumpBlock() {
  for (var i = 0; i < jumpBlocks.length; i ++) {//makes unplaced jumpBlocks follow the mouse
    if (jumpBlocks[i].beingPlaced == true) {
      jumpBlocks[i].xpos = mousex + scrollX;
      jumpBlocks[i].ypos = mousey;
    }
  }

  for (var i = 0; i < jumpBlocks.length; i ++) { //makes unplaced jumpBlocks become placed permanately
    if (jumpBlocks[i].beingPlaced == true) {
      jumpBlocks[i].xpos = mousex + scrollX;
      jumpBlocks[i].ypos = mousey;
    }
  }

  for (var i = 0; i < jumpBlocks.length; i ++) {
    if (collision(jumpBlocks[i], player1) ) {
      jumpBlocks[i].exists = false;
      if (player1.onGround == true) {
        player1.onGround = false;
    		player1.ypos -= 5;
    		player1.yVel -= 0.6;
      }
    }
    if (jumpBlocks[i].exists == false) {
      jumpBlocks[i].ypos = -100;
    }
  }

}

function scrollException() {
  for (var i = 0; i < scrollExceptionObjects.length; i ++) {
    if (scrollExceptionObjects[i].frame != undefined) {
      scrollExceptionObjects[i].xpos = scrollX + 100;
    } else if (scrollExceptionObjects[i].id == "inventory") {
      scrollExceptionObjects[i].xpos = scrollX + 1020;
    } else if (scrollExceptionObjects[i].id == "jumpArrow") {
      scrollExceptionObjects[i].xpos = scrollX + 1050;
    } else if (scrollExceptionObjects[i].id == "tutorial"){
      scrollExceptionObjects[i].xpos = scrollX;
    } else {
      scrollExceptionObjects[i].xpos = scrollX;
    }
  }
}

function animShek() {



}
function animShek() {
  if (levelPlay && player1.onGround == true) {
    if(scrollSpeed > 0)
    {
      player1.id = "shekWalkR" + Math.floor(player1.frame);
      player1.frame += 0.1;
      if (Math.floor(player1.frame) == 7) {
        player1.frame = 1;
    }
    }
    if(scrollSpeed<0)
    {
      player1.id = "shekWalkL" + Math.floor(player1.frame);
      player1.frame += 0.1;
      if (Math.floor(player1.frame) == 7) {
        player1.frame = 1;
      }
    }
  } else if (player1.onGround == false) {
    player1.id = "shekJump3";
  } else {
    player1.id = "shek";
  }
}

function nextLevel() {
  levelFinish = false;
  currentLevel += 1;
  isLoaded = false;
  var player1 = new player(200, 360);
  scrollSpeed = 0.13;
  scrollX = 0;
  levelPlay = false;
  isDead = false;
}

function swiper(x) {
  var num = x;
  for(var i = 0; i < x; i++)
  {
    console.log("swiper no swiping");
  }
}

function reloadLevel() {
  var player1 = new player(200, 360);
  scrollSpeed = 0.13;
  scrollX = 0;
  levelPlay = false;
  isDead = false;
  swiper(100);
}

function deathCheck() {
  if(player1.ypos > c.height)
  {
    isDead = true;
    reloadLevel();
    player1.ypos = 360;
  }
}
