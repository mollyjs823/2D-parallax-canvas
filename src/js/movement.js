export function keyDownAction(keyCode, keys, player) {
  switch (keyCode) {
    case 38: //up
      player.velocity.y -= 10;
      player.position.y += player.velocity.y;
      break;
    case 40: //down
      break;
    case 37: //left
      keys.left.pressed = true;
      break;
    case 39: //right
      keys.right.pressed = true;
      break;
  }
}

export function keyUpAction(keyCode, keys) {
  switch (keyCode) {
    case 38: //up
      break;
    case 40: //down
      break;
    case 37: //left
      keys.left.pressed = false;
      break;
    case 39: //right
      keys.right.pressed = false;
      break;
  }
}

export function direction(keys, player, canvas, platforms, genericObjs) {
  if (keys.right.pressed && player.position.x < canvas.width - 200) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 200) {
    player.velocity.x = -player.speed;
  } else player.velocity.x = 0;

  if (player.position.x < 200 && keys.left.pressed) {
    platforms.forEach((platform) => {
      platform.position.x += player.speed;
    });
    genericObjs.forEach((genericObj) => {
      genericObj.position.x += player.speed * 0.6;
    });
  } else if (player.position.x >= canvas.width - 200 && keys.right.pressed) {
    platforms.forEach((platform) => {
      platform.position.x -= player.speed;
    });
    genericObjs.forEach((genericObj) => {
      genericObj.position.x -= player.speed * 0.6;
    });
  }
}

export function collision(platforms, player) {
  //add in velocity to account for the frame in which collision happens
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });
}
