(function () {
	"use strict";

	

	window.addEventListener("load", onInit);

	// game variables
    var stage = null;
	var canvas = null;

	// frame rate of game
    var frameRate = 24;
	// spritesheet object
	var spriteSheet = null;
	// game objects




	// spritesheet data object
	var data = {
	"framerate":24,
        "images":["lib/assets.png"],
        "frames":[
    [0, 0, 600, 200, 0, 0, 0],
    [600, 0, 600, 200, 0, 0, 0],
    [1200, 0, 600, 200, 0, 0, 0],
    [1800, 0, 600, 200, 0, 0, 0],
    [2400, 0, 600, 200, 0, 0, 0],
    [3000, 0, 600, 200, 0, 0, 0],
    [0, 200, 600, 200, 0, 0, 0],
    [600, 200, 600, 200, 0, 0, 0],
    [1200, 200, 600, 200, 0, 0, 0],
    [1800, 200, 600, 200, 0, 0, 0],
    [2400, 200, 600, 200, 0, 0, 0],
    [3000, 200, 600, 200, 0, 0, 0],
    [0, 400, 600, 200, 0, 0, 0],
    [600, 400, 600, 200, 0, 0, 0],
    [1200, 400, 600, 200, 0, 0, 0],
    [1800, 400, 600, 200, 0, 0, 0],
    [2400, 400, 600, 200, 0, 0, 0],
    [3000, 400, 600, 200, 0, 0, 0],
    [0, 600, 600, 200, 0, 0, 0],
    [600, 600, 600, 200, 0, 0, 0],
    [1200, 600, 600, 200, 0, 0, 0],
    [1800, 600, 600, 200, 0, 0, 0],
    [2400, 600, 600, 200, 0, 0, 0],
    [3000, 600, 600, 200, 0, 0, 0],
    [0, 800, 600, 200, 0, 0, 0],
    [600, 800, 600, 200, 0, 0, 0],
    [1200, 800, 600, 200, 0, 0, 0],
    [1800, 800, 600, 200, 0, 0, 0],
    [2400, 800, 600, 200, 0, 0, 0],
    [3000, 800, 600, 200, 0, 0, 0],
    [0, 1000, 600, 200, 0, 0, 0],
    [600, 1000, 600, 200, 0, 0, 0]
],
"animations":{
    "btn4_over": {"speed": 1, "frames": [15]},
    "btnContinue_over": {"speed": 1, "frames": [7]},
    "btn3_over": {"speed": 1, "frames": [13]},
    "trafficLight": {
        "speed": 1,
        "frames": [
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            20,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            21,
            22,
            22,
            22,
            22,
            22,
            22
        ]
    },
    "summaryScreen": {"speed": 1, "frames": [19]},
    "chooseScreen": {"speed": 1, "frames": [17]},
    "btnHalf_over": {"speed": 1, "frames": [3]},
    "btnAll_over": {"speed": 1, "frames": [5]},
    "btn3_up": {"speed": 1, "frames": [12]},
    "betScreen": {"speed": 1, "frames": [16]},
    "wheel": {
        "speed": 1,
        "frames": [23, 24, 25, 26, 27, 28, 29, 30, 31, 23]
    },
    "btnContinue_up": {"speed": 1, "frames": [6]},
    "btn1_up": {"speed": 1, "frames": [8]},
    "raceScreen": {"speed": 1, "frames": [18]},
    "btn4_up": {"speed": 1, "frames": [14]},
    "btnQuarter_up": {"speed": 1, "frames": [0]},
    "btnQuarter_over": {"speed": 1, "frames": [1]},
    "btn1_over": {"speed": 1, "frames": [9]},
    "btn2_up": {"speed": 1, "frames": [10]},
    "btn2_over": {"speed": 1, "frames": [11]},
    "btnAll_up": {"speed": 1, "frames": [4]},
    "btnHalf_up": {"speed": 1, "frames": [2]}
}
}
	// ------------------------------------------------------------ event handlers
	function onInit() {
		console.log(">> initializing");

		// get reference to canvas
		canvas = document.getElementById("stage");
		// set canvas to as wide/high as the browser window
		canvas.width = 600;
		canvas.height = 600;
		// create stage object
		stage = new createjs.Stage(canvas);

		// construct Spritesheet object using data - will preload the assets.png
		spriteSheet = new createjs.SpriteSheet(data);
		if (spriteSheet.complete == false) spriteSheet.addEventListener("complete", onReady);
		else onReady();

		// startup the ticker
		createjs.Ticker.setFPS(frameRate);
		createjs.Ticker.addEventListener("tick", onTick);
	}

	function onReady(e) {
		console.log(">> adding sprites to game");
		spriteSheet.removeEventListener("complete", onReady);

        
		console.log(">> game ready");

	}

	function onTick(e) {
		// TESTING FPS
		document.getElementById("fps").innerHTML = createjs.Ticker.getMeasuredFPS();

		// game loop code here
		
		// update the stage!
	}

})();