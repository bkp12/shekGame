function drawTutorial() {
  tutorial.draw();
  ctx.font = "20px Arial";
  var prompt = "";
  if (currentLevel == 0) {
    prompt = "To complete a level, Shek the swamp monster must reach the flag on the other side of the swamp.  In order for him to reach the flag, he has to avoid dying.  To do this, use items provided in your inventory.  The first item in the inventory (the arrow) is the jump ability.  Place this in Shek's path to make him jump.  Avoid the hole in the middle of the level.  Good Luck! (Press the space key to continue)";
  } else if (currentLevel == 1) {
    prompt = "This level try using the sprint ability of Shek.  He can run outrun a wild donkey and is very dangerous over short distances.  Hold down shift to begin sprinting and watch out for dead trees, as they reverse Shrek's direction.";
  }
  wrapText(prompt, 20, 30, 1000, 40);
}

function loadInventory() {
  if(currentLevel == 0)
  {
    jumpNum = 1;
  }
  else if (currentLevel == 1)
  {
    jumpNum = 3;
    flag.xpos = 1300;
  }

}

function wrapText(text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = ctx.measureText(testLine);
          var testWidth = metrics.width;
          if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
        }
        ctx.fillText(line, x, y);
      }
