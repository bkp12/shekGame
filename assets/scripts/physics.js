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
			object1.ypos < object2.ypos + object2.height && (object1.ypos + object1.height) > object2.ypos) {
			// The objects are touching

		if(object2.id == "grass" || object2.id == "dirt")
		{
			if (object1.ypos + object1.height < (object2.ypos + (object2.height * 1/8))) { //if the objects are colliding only at their tops...
				object1.ypos = object2.ypos - object1.height;
				object1.onGround = true;
			} else if (object1.ypos < (object2.ypos + (object2.height))) {
				if (object1.xpos > object2.xpos && object2.xpos + object2.width > object1.xpos + object1.width) {
					object1.onGround = true;
					object1.ypos = object2.ypos + object2.height;
				} else {
					object1.onGround = true;
					reversePlayer();
				}
			}
		}
		if(object2 instanceof wallBlock)
		{
			object1.onGround = true;
			reversePlayer();
		}
		else if(object2 instanceof lad)
		{
			object1.xpos +=  5 * game.dt;
		}
		return true;

    } else {
		return false;
	}
}

function reversePlayer() {
	scrollSpeed *= -1;
}
