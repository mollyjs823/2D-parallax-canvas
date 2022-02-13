import platform from "../img/platform.png";
import background from "../img/background.png";
import hills from "../img/hills.png";
import { Player } from "./player";
import { Platform } from "./platform";
import { GenericObj } from "./genericObject";
import { keyDownAction, keyUpAction, direction, collision } from "./movement";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 360;
canvas.width = 640;

const gravity = 0.5;

function createImage(imgSrc) {
  const image = new Image();
  image.src = imgSrc;
  return image;
}

let player = new Player();

let platformImage = createImage(platform);
let platforms = [];

let genericObjs = [];

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

function init() {
  platformImage = createImage(platform);

  player = new Player();
  platforms = [
    new Platform({ x: -1, y: 250, image: platformImage }),
    new Platform({ x: platformImage.width - 5, y: 250, image: platformImage }),
    new Platform({
      x: platformImage.width * 2.2,
      y: 250,
      image: platformImage,
    }),
  ];

  genericObjs = [
    new GenericObj({
      x: -1,
      y: -1,
      image: createImage(background),
    }),
    new GenericObj({
      x: -1,
      y: -1,
      image: createImage(hills),
    }),
  ];
}

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, window.innerWidth, innerHeight);
  genericObjs.forEach((genericObj) => {
    genericObj.draw(ctx);
  });
  platforms.forEach((platform) => {
    platform.draw(ctx);
  });
  player.update(ctx, canvas, gravity);

  direction(keys, player, canvas, platforms, genericObjs);
  collision(platforms, player);

  if (
    player.position.x >=
    platforms.at(-1).position.x + platforms.at(-1).width + 200
  ) {
    console.log("You win!");
  }

  if (player.position.y > canvas.height + 400) {
    console.log("You lose");
    init();
  }
}
init();
animate();

addEventListener("keydown", ({ keyCode }) => {
  keyDownAction(keyCode, keys, player);
});
addEventListener("keyup", ({ keyCode }) => {
  keyUpAction(keyCode, keys);
});
