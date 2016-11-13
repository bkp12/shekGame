// Keycodes:
// a(65), s(83), d(68), w(87), space(32)

// Change the acceleration of player


window.addEventListener("mousemove", move, false);
window.addEventListener("keydown", down, false);
c.addEventListener("mouseup", click, false);

function down(event)
{
	if(event.keyCode == 32 && levelPlay == false) { //space key pressed
		levelPlay = true;
	} else if (event.keyCode == 49 && levelPlay == true) { //the 1 key (for debugging)
		titleMode = false;
	}
}

function click(evt) {
	if (jumpBlocks.length > 0) {
		for (var i = 0; i < jumpBlocks.length; i ++) {
			if (jumpBlocks[i].beingPlaced == true && jumpBlocks[i].exists == true) {
				jumpBlocks[i].placed = true; //can no longer be "beingPlaced"
				jumpBlocks[i].beingPlaced = false;
				jumpBlocks[i].xpos = mousex + scrollX;
				jumpBlocks[i].ypos = mousey;
			}
		}
	}

	for (var i = 0; i < inventoryIcons.length; i ++) {
		if (touchingMouse(inventoryIcons[i])) {
			if(inventoryIcons[i].id == "jumpArrow") //if jump inventory Icon is clicked...
			{
				var jBlock = new jumpBlock(mousex, mousey, "jumpArrow");
				jBlock.beingPlaced = true;
				objectsToDraw.push(jBlock);
				jumpBlocks.push(jBlock);
			}
		}
	}
}

function touchingMouse(object1) {
	if (object1.xpos - scrollX < mousex && object1.xpos + object1.width - scrollX > mousex &&
			object1.ypos < mousey && object1.ypos + object1.height > mousey) {
		return true;
  } else {
		return false;
	}
}

function move(evt) {
	var rect = c.getBoundingClientRect();
	mousex = evt.clientX - rect.left;
	mousey = evt.clientY - rect.top;
}
