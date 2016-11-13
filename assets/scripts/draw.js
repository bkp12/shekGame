window.addEventListener("keydown",clearTutorial,false);
var drawTutorial = true

function draw() { //clear and redraw the entire screen every frame tick
  clearScreen();
  if (titleMode == false) {
    for (var i = 0; i < objectsToDraw.length; i ++) {
		objectsToDraw[i].draw();
    }
  } else {
    drawTitle();
  }
  drawText();
  if (drawTutorial) {
    drawTutorial();
  };
  if (!drawTutorial && objectsToDraw[4].id == "tutorial") {
    objectsToDraw[4].ypos = -500;
  }
  generateStageCheck();
}

function clearScreen() { //will clear the entire screen, erase everything on it
  ctx.clearRect(0, 0, c.width, c.height);
}

function drawTitle() {

}

function clearTutorial() {
  drawTutorial = false;
}
