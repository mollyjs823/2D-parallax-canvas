/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./src/js/player.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./platform */ "./src/js/platform.js");
/* harmony import */ var _genericObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./genericObject */ "./src/js/genericObject.js");
/* harmony import */ var _movement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movement */ "./src/js/movement.js");







var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.height = 360;
canvas.width = 640;
var gravity = 0.5;

function createImage(imgSrc) {
  var image = new Image();
  image.src = imgSrc;
  return image;
}

var player = new _player__WEBPACK_IMPORTED_MODULE_3__["Player"]();
var platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var platforms = [];
var genericObjs = [];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};

function init() {
  platformImage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new _player__WEBPACK_IMPORTED_MODULE_3__["Player"]();
  platforms = [new _platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]({
    x: -1,
    y: 250,
    image: platformImage
  }), new _platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]({
    x: platformImage.width - 5,
    y: 250,
    image: platformImage
  }), new _platform__WEBPACK_IMPORTED_MODULE_4__["Platform"]({
    x: platformImage.width * 2.2,
    y: 250,
    image: platformImage
  })];
  genericObjs = [new _genericObject__WEBPACK_IMPORTED_MODULE_5__["GenericObj"]({
    x: -1,
    y: -1,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  }), new _genericObject__WEBPACK_IMPORTED_MODULE_5__["GenericObj"]({
    x: -1,
    y: -1,
    image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  })];
}

function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, window.innerWidth, innerHeight);
  genericObjs.forEach(function (genericObj) {
    genericObj.draw(ctx);
  });
  platforms.forEach(function (platform) {
    platform.draw(ctx);
  });
  player.update(ctx, canvas, gravity);
  Object(_movement__WEBPACK_IMPORTED_MODULE_6__["direction"])(keys, player, canvas, platforms, genericObjs);
  Object(_movement__WEBPACK_IMPORTED_MODULE_6__["collision"])(platforms, player);

  if (player.position.x >= platforms.at(-1).position.x + platforms.at(-1).width + 200) {
    console.log("You win!");
  }

  if (player.position.y > canvas.height + 400) {
    console.log("You lose");
    init();
  }
}

init();
animate();
addEventListener("keydown", function (_ref) {
  var keyCode = _ref.keyCode;
  Object(_movement__WEBPACK_IMPORTED_MODULE_6__["keyDownAction"])(keyCode, keys, player);
});
addEventListener("keyup", function (_ref2) {
  var keyCode = _ref2.keyCode;
  Object(_movement__WEBPACK_IMPORTED_MODULE_6__["keyUpAction"])(keyCode, keys);
});

/***/ }),

/***/ "./src/js/genericObject.js":
/*!*********************************!*\
  !*** ./src/js/genericObject.js ***!
  \*********************************/
/*! exports provided: GenericObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericObj", function() { return GenericObj; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var GenericObj = /*#__PURE__*/function () {
  function GenericObj(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, GenericObj);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
  }

  _createClass(GenericObj, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return GenericObj;
}();

/***/ }),

/***/ "./src/js/movement.js":
/*!****************************!*\
  !*** ./src/js/movement.js ***!
  \****************************/
/*! exports provided: keyDownAction, keyUpAction, direction, collision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyDownAction", function() { return keyDownAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyUpAction", function() { return keyUpAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "direction", function() { return direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collision", function() { return collision; });
function keyDownAction(keyCode, keys, player) {
  switch (keyCode) {
    case 38:
      //up
      player.velocity.y -= 10;
      player.position.y += player.velocity.y;
      break;

    case 40:
      //down
      break;

    case 37:
      //left
      keys.left.pressed = true;
      break;

    case 39:
      //right
      keys.right.pressed = true;
      break;
  }
}
function keyUpAction(keyCode, keys) {
  switch (keyCode) {
    case 38:
      //up
      break;

    case 40:
      //down
      break;

    case 37:
      //left
      keys.left.pressed = false;
      break;

    case 39:
      //right
      keys.right.pressed = false;
      break;
  }
}
function direction(keys, player, canvas, platforms, genericObjs) {
  if (keys.right.pressed && player.position.x < canvas.width - 200) {
    player.velocity.x = player.speed;
  } else if (keys.left.pressed && player.position.x > 200) {
    player.velocity.x = -player.speed;
  } else player.velocity.x = 0;

  if (player.position.x < 200 && keys.left.pressed) {
    platforms.forEach(function (platform) {
      platform.position.x += player.speed;
    });
    genericObjs.forEach(function (genericObj) {
      genericObj.position.x += player.speed * 0.6;
    });
  } else if (player.position.x >= canvas.width - 200 && keys.right.pressed) {
    platforms.forEach(function (platform) {
      platform.position.x -= player.speed;
    });
    genericObjs.forEach(function (genericObj) {
      genericObj.position.x -= player.speed * 0.6;
    });
  }
}
function collision(platforms, player) {
  //add in velocity to account for the frame in which collision happens
  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  });
}

/***/ }),

/***/ "./src/js/platform.js":
/*!****************************!*\
  !*** ./src/js/platform.js ***!
  \****************************/
/*! exports provided: Platform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: innerWidth / 2,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 30;
    this.height = 30;
    this.speed = 5;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = "red";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update(ctx, canvas, gravity) {
      this.draw(ctx);
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }]);

  return Player;
}();

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map