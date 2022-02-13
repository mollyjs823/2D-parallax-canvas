import platform from "../img/platform.png";
import background from "../img/background.png";
import hills from "../img/hills.png";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.height = 360;
canvas.width = 640;

const gravity = 0.5;

class Player {
  constructor() {
    this.position = {
      x: innerWidth / 2,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 30;
    this.height = 30;
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity;
  }
}

class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  draw() {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }
}

class GenericObj {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
  }
  draw() {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }
}

function createImage(imgSrc) {
  const image = new Image();
  image.src = imgSrc;
  return image;
}

let platformImage = createImage(platform);

let player = new Player();
let platforms = [
  new Platform({ x: -1, y: 250, image: platformImage }),
  new Platform({ x: platformImage.width - 5, y: 250, image: platformImage }),
  new Platform({
    x: platformImage.width * 2.2,
    y: 250,
    image: platformImage,
  }),
];

let genericObjs = [
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
    genericObj.draw();
  });
  platforms.forEach((platform) => {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < canvas.width - 200) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x > 200) {
    player.velocity.x = -5;
  } else player.velocity.x = 0;

  if (player.position.x < 200 && keys.left.pressed) {
    platforms.forEach((platform) => {
      platform.position.x += 5;
    });
    genericObjs.forEach((genericObj) => {
      genericObj.position.x += 3;
    });
  } else if (player.position.x >= canvas.width - 200 && keys.right.pressed) {
    platforms.forEach((platform) => {
      platform.position.x -= 5;
    });
    genericObjs.forEach((genericObj) => {
      genericObj.position.x -= 3;
    });
  }

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
animate();

addEventListener("keydown", ({ keyCode }) => {
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
});
addEventListener("keyup", ({ keyCode }) => {
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
});
