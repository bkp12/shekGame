//======================GLOBAL VARIABLES===================
var c = document.getElementById("canvas"); //this is a reference to the canvas element in the index.html page
var ctx = c.getContext("2d"); //this is an object that contains useful methods and properties for the canvas element
var levelPlay = false;
var gravConstant = 0.0013;
var scrollX = 0; //-300
var scrollSpeed = 0.13;
var scrollSpeedMultiplier = 1;
var mousex;
var mousey;
var titleMode = false; //should be true
var currentLevel = 0; //Make sure to change this according to the level, do not initiliaze it as 0
var isLoaded = false;
var isDead = false;
var jumpNum = 1;
//=========================================================

var game = { //i created an object which will contain general game properties
  fps: 60, //stands for frames per second (this could be 30 fps for peasants)
  dt: 1000 / 60 //dt stands for DELTA TIME (change in time between each frame)
};

function gameObj(x, y, i) { //this object will be a PARENT to the player object.
  this.xpos = x; //stands for x position on the screen
  this.ypos = y; //y position (measured from the top left corner, so it increases as an object moves down the screen)
  this.id = i; 

  this.draw = function () { //this is the draw function (a method of the gameObj object)
    var img = document.getElementById(this.id); //creates a variable reference to the image linked by its "ID"

    ctx.drawImage(img, this.xpos - scrollX, this.ypos);
    //will draw the image using the xpos and ypos of the object
    this.width = img.width;
    this.height = img.height;
  };
}

setInterval(function(){ //This function will be called on PAGE LOAD.  It sets up "The Game Loop".  The game loop is a funcion that is called every after "tick" or frame
  //of the game.  It consists of two function, UPDATE and DRAW.  Update will manipulate all the objects on the canvas according to input, environment factors, enemies, explosions, etc..

  update(); //While the draw function will simply draw all objects that you want on the canvas, AFTER it erases all the objects that were there previously.
  draw();
}, 1000 / game.fps);
