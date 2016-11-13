var drawTutorial = true;

var level0Stage = [
	[0,0,0,0,0,0,0], //Y pos 0; x Poisition the lengthof this array in the array.
	[0,0,0,0,0,0,0],
	[0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,3],
	[1,1,1,1,1,0,1,1,1,1,1,1,1]
];
var level1Stage = [
	[1,0,0,0,0,0,0], //Y pos 0; x Poisition the lengthof this array in the array.
	[5,1,0,0,0,0,0],
	[5,5,1,0,0,0,1],
	[0,0,0,0,1,1,5,0,0,0,3],
	[1,1,1,1,5,5,5,0,0,1,1]
];
var level2Stage = [
	[0,0,0,0,0,0,0], //Y pos 0; x Poisition the lengthof this array in the array.
	[0,0,0,0,0,0,0],
	[0,0,0,0,0,0,1],
	[0,0,0,0,1,1,5,0,0,0,3],
	[1,1,1,1,5,5,5,0,0,1,1]
];

var player1 = new player(200, 360); //look at classes to find the player class
var dancingArray = ["shekJump1", "shekJump2", "shekJump1", "shekJump2", "shekJump3", "shekWalkL1", "shekWalkL2", "shekWalkL3", "shekWalkL4", "shekWalkL1", "shekWalkL2", "shekWalkL3", "shek"];
var background1 = new gameObj(0, 0, "background");
var inventory = new gameObj(0, -10, "inventory");
var jumpIcon = new gameObj(0, 50, "jumpArrow");
var tutorial = new gameObj(0, 0, "tutorial");
var ladIcon = new gameObj(100,100, "LadIcon");
var flag = new flag(1000, 350, "flag");

var objectsToDrawOriginal = [background1, player1, inventory, jumpIcon, flag];
var objectsToDraw = objectsToDrawOriginal; //an array of every object we want drawn on canvas
var stageBlocks = []; //used in physics.js for the collision function
var jumpBlocks = []; //used in physics.js for the collision function -- specifically for the jumpIcon object
var lads = [];
var scrollExceptionObjects = [background1, player1, inventory, jumpIcon, ladIcon, tutorial];
var inventoryIcons = [jumpIcon,bridgeIcon];

function generateStageCheck() { //called every frame...
  if (currentLevel == 0 && isLoaded == false) {
		clearArrays();
    generateStage(level0Stage);
  } else if (currentLevel == 1 && isLoaded == false) {
		clearArrays();
    generateStage(level1Stage);
  } else if (currentLevel == 1 && isLoaded == false) {
		clearArrays();
		generateStage(level2Stage);
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

			if(level[col][row] == 4)
			{
				var wall = new wallBlock((row*128), (col*128), "wall");
				stageBlocks.push(wall);
				objectsToDraw.push(wall);
			}
			if(level[col][row] ==5)
			{
				var dirt = new stageBlock((row*128), (col*128), "dirt");
				stageBlocks.push(dirt);
				objectsToDraw.push(dirt);
			}
		}
	}
}

function clearArrays() {
	objectsToDraw = objectsToDrawOriginal;
	isLoaded = true;
	if (currentLevel > 0) {
		for (var i = 0; i < objectsToDraw.length; i ++) {
			if (objectsToDraw[i] instanceof stageBlock) {
				objectsToDraw.splice(i, 1); //takes out the stageblock element at that location
				objectsToDraw[i].ypos = -1000;
				stageBlocks.splice(i, 1);
			}
		}
	}
}
