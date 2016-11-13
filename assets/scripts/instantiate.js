var drawTutorial = true;

var level0Stage = [
	[0,0,0,0,0,0,0], //Y pos 0; x Poisition the lengthof this array in the array.
	[0,0,0,0,0,0,0],
	[0,0,0,0],
	[0,0,0,3,0,0,0,0,0,0],
	[1,1,1,1,1,0,1,1,1,1,1,1,1]
];
var level1Stage = [
	[0,0,0,0,0,0,0], //Y pos 0; x Poisition the lengthof this array in the array.
	[0,0,0,0,0,0,0],
	[0,0,0,0],
	[0,0,0,0,0,0,0,3,0,0],
	[1,1,1,0,1,0,1,0]
];

var player1 = new player(200, 360); //look at classes to find the player class
var background1 = new gameObj(0, 0, "background");
var inventory = new gameObj(0, -10, "inventory");
var jumpIcon = new gameObj(0, 50, "jumpArrow");
var tutorial = new gameObj(0, 0, "tutorial");

var objectsToDrawOriginal = [background1, player1, inventory, jumpIcon, tutorial];
var objectsToDraw = objectsToDrawOriginal; //an array of every object we want drawn on canvas
var stageBlocks = []; //used in physics.js for the collision function
var jumpBlocks = []; //used in physics.js for the collision function -- specifically for the jumpIcon object
var scrollExceptionObjects = [background1, player1, inventory, jumpIcon, tutorial];
var inventoryIcons = [jumpIcon];

function generateStageCheck() { //called every frame...
  if (currentLevel == 0 && isLoaded == false) {
		clearArrays();
    generateStage(level0Stage);
  } else if (currentLevel == 1 && isLoaded == false) {
		clearArrays();
    generateStage(level1Stage);
  }
}

function generateStage(level)
{
	for(var col = 0; col < level.length; col++)
	{
		for(var row = 0; row < level[col].length; row++)
		{
			if(level[col][row] == 1)
			{
				var block = new stageBlock((row*128), (col*128), "grass");
				stageBlocks.push(block);
				objectsToDraw.push(block);
			}
			if(level[col][row] == 2)
			{
				var jBlock = new jumpBlock((row*128), (col*128), "jumpArrow");
				stageBlocks.push(jBlock);
				objectsToDraw.push(jBlock);
			}
			if(level[col][row] ==3)
			{
				var flam = new flag((row*128), (col*128), "flag");
				stageBlocks.push(flam);
				objectsToDraw.push(flam);
			}
			if(level[col][row] == 4)
			{
				var wall = new wallBlock((row*128), (col*128), "wall");
				stageBlocks.push(wall);
				objectsToDraw.push(wall);
			}
		}
	}
}

function clearArrays() {
	objectsToDraw = objectsToDrawOriginal;
	isLoaded = true;
	if (currentLevel > 0) {
		for (var i = 0; i < objectsToDraw.length; i ++) {
			if (objectsToDraw[i].id == "grass") {
				objectsToDraw.splice(i, 1); //takes out the stageblock element at that location
				objectsToDraw[i].ypos = -1000;
			} else if (objectsToDraw[i].id == "flag") {
				objectsToDraw[i].ypos = -1000;
			}
		}
	}
}
