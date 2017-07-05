var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var bgPic = new Image();

var ane;
var fruit;
var mom;
var baby;
var data;
var wave;
var dust;

var mx;
var my;

var babyTail = [];
var babyEye = [];
var babyBody = [];

var momTail = [];
var momEye = [];
var momBodyOrange = [];
var momBodyBlue = [];
var dustPic = [];

document.body.onload = game;

function game() {
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init() {
	//get canvas context
	can1 = document.getElementById('canvas1'); //fishes, dust, UI, circle
	ctx1 = can1.getContext('2d');

	can2 = document.getElementById('canvas2'); //background, ane, fruits
	ctx2 = can2.getContext('2d');

	can1.addEventListener('mousemove', onMouseMove, false);

	canWidth = can1.width;
	canHeight = can1.height;
	bgPic.src = "./src/background.jpg";
	

	ane = new aneObj();
	ane.init();
	

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	wave = new waveObj();
	wave.init();

	mx = canWidth * 0.5;
	my = canHeight * 0.5;

	data = new dataObj();
	ctx1.fillStyle = "white";
	ctx1.font="20px Verdana";
	ctx1.textAlign="center";

	dust = new dustObj();
	dust.init();

	//babyTail Picture
	for (var i = 0; i < 8; i++) {
		babyTail[i] = new Image();
		babyTail[i].src = "./src/babyTail" + i +".png";
	}
	//babyEye Picture
	for (var i = 0; i < 2; i++) {
		babyEye[i] = new Image();
		babyEye[i].src = "./src/babyEye" + i +".png";
	}
	//babyBody Picture
	for (var i = 0; i < 20; i++) {
		babyBody[i] = new Image();
		babyBody[i].src = "./src/babyFade" + i +".png";
	}

	//momTail Picture
	for (var i = 0; i < 8; i++) {
		momTail[i] = new Image();
		momTail[i].src = "./src/bigTail" + i +".png";
	}
	//momEye Picture
	for (var i = 0; i < 2; i++) {
		momEye[i] = new Image();
		momEye[i].src = "./src/bigEye" + i +".png";
	}
	//momBodyOrange Picture
	for (var i = 0; i < 8; i++) {
		momBodyOrange[i] = new Image();
		momBodyOrange[i].src = "./src/bigSwim" + i +".png";
	}
	//momBodyBlue Picture
	for (var i = 0; i < 8; i++) {
		momBodyBlue[i] = new Image();
		momBodyBlue[i].src = "./src/bigSwimBLue" + i +".png";
	}
	for (var i = 0; i < 7; i++) {
		dustPic[i] = new Image();
		dustPic[i].src = "./src/dust" + i +".png";
	}
}

function gameloop() {

	requestAnimFrame(gameloop);

	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = Date.now();
	if(deltaTime > 40) deltaTime = 40;

	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0, 0, canWidth, canHeight);  //清空给定矩形内的指定像素
	mom.draw();
	baby.draw();
	momFruitCollision();
	momBabyCollision();
	data.draw();
	wave.draw();
	dust.draw();
	
}

function onMouseMove(e) {
	if (!data.gameOver) {
		if (e.offSetX || e.layerX) {
			mx = e.offSetX == undefined ? e.layerX : e.offSetX;
			my = e.offSetY == undefined ? e.layerY : e.offSetX;
		
		}
	}
	
}