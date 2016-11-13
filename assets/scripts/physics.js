function kinematics(obj)
{
	obj.xpos += obj.xVel * game.dt;
	obj.xVel += obj.xAccel * game.dt;
	obj.ypos += obj.yVel * game.dt;
	if(obj.onGround) {
		obj.yVel = 0;
	}
	obj.yVel += gravConstant * game.dt;
}

function collision(object1, object2) {
	if (object1.xpos < object2.xpos + object2.width  && object1.xpos + object1.width > object2.xpos &&
			object1.ypos < object2.ypos + object2.height && (object1.ypos + object1.height + 5) > object2.ypos) {
			// The objects are touching

		if(object2 instanceof stageBlock)
		{
			if((object1.ypos + object1.height - 5) < object2.ypos)
				object1.onGround = true;
			if((object1.ypos + object1.height) < (object2.ypos + (object2.height/2)))
				object1.ypos = object2.ypos - object1.height;
		}
		if(object2 instanceof wallBlock)
		{
			object1.onGround = true;
			scrollSpeed *= -1;
		}
		if(object2 instanceof flag)
		{
			player1.id = "shekJump1"
			player1.id = "shekJump2"
			player1.id = "shekJump1"
			player1.id = "shekJump2"
			player1.id = "shekJump1"
			player1.id = "shekJump2"
			player1.id = "shekJump1"
			player1.id = "shekJump2"
			player1.id = "shekJump1"
			player1.id = "shekJump2"
			player1.id = "shekJump1"
			player1.id = "shekJump2"
			player1.id = "shekJump1"
			nextLevel();
		}
		return true;

/*
		if(object2 instanceof jumpBlock)
		{
			object1.onGround = false;
			object1.yVel = 0.5;

			//Jump function
		}
*/
    } else {
		return false;
	}
}


//grid overlapping level grid
//
