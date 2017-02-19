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
    var trafficLight = null; // Used in the race screen to countdown the animation
    var trafficLightMover = null;
    // Wheel # One
    var wheel_01 = null; // Racing Object #1
    var wheel_01Mover = null;
    // Wheel # Two
    var wheel_02 = null; // Racing Object #2
    var wheel_02Mover = null;
    // Wheel # Three
    var wheel_03 = null; // Racing Object #3
    var wheel_03Mover = null;
    // Wheel # Four
    var wheel_04 = null; // Racing Object #4
    var wheel_04Mover = null;
    
    
    // background screens ?? - might not need
    var betScreen = null;
    var summaryScreen = null;
    var raceScreen = null;
    var chooseScreen = null;
    
    
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
        
        // construct the traffic light sprite
	    trafficLight = new createjs.Sprite(spriteSheet);
		trafficLight.x = 250;
		trafficLight.y = 300;
		trafficLight.gotoAndStop("trafficLight");
		stage.addChild(trafficLight);
		trafficLightMover = new Mover(trafficLight, stage);
		trafficLightMover.setSpeed(6);
		trafficLightMover.startMe();
		trafficLightMover.setDirection(2)
        
 
        // construct the wheel sprite
        // For Wheel # One
	    wheel_01 = new createjs.Sprite(spriteSheet);
		wheel_01.x = 50;
		wheel_01.y = 50;
		wheel_01.gotoAndStop("wheel");
		stage.addChild(wheel_01);
		wheel_01Mover = new Mover(wheel_01, stage);
		wheel_01Mover.setSpeed(6);
		wheel_01Mover.startMe();
		wheel_01Mover.setDirection(2)
        
        // For Wheel # Two
        wheel_02 = new createjs.Sprite(spriteSheet);
		wheel_02.x = 50;
		wheel_02.y = 120;
		wheel_02.gotoAndStop("wheel");
		stage.addChild(wheel_02);
		wheel_02Mover = new Mover(wheel_02, stage);
		wheel_02Mover.setSpeed(6);
		wheel_02Mover.startMe();
		wheel_02Mover.setDirection(2)
        
                
        // For Wheel # Three
        wheel_03 = new createjs.Sprite(spriteSheet);
		wheel_03.x = 50;
		wheel_03.y = 190;
		wheel_03.gotoAndStop("wheel");
		stage.addChild(wheel_03);
		wheel_03Mover = new Mover(wheel_03, stage);
		wheel_03Mover.setSpeed(6);
		wheel_03Mover.startMe();
		wheel_03Mover.setDirection(2)
        
                        
        // For Wheel # Four
        wheel_04 = new createjs.Sprite(spriteSheet);
		wheel_04.x = 50;
		wheel_04.y = 260;
		wheel_04.gotoAndStop("wheel");
		stage.addChild(wheel_04);
		wheel_04Mover = new Mover(wheel_04, stage);
		wheel_04Mover.setSpeed(6);
		wheel_04Mover.startMe();
		wheel_04Mover.setDirection(2)

        
		console.log(">> game ready");

	}

	function onTick(e) {
		// TESTING FPS
		document.getElementById("fps").innerHTML = createjs.Ticker.getMeasuredFPS();

        // game loop code here
//	      wheel_01Mover.updateMe();
//        wheel_02Mover.updateMe();
//        wheel_03Mover.updateMe();
//        wheel_04Mover.updateMe();
//        trafficLightMover.updateMe();
        
		// update the stage!
		stage.update();
	}

})();
