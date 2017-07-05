var dataObj = function() {
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
};
dataObj.prototype.draw = function() {
	
	ctx1.save();
	ctx1.shadowBlur = "10";
	ctx1.shadowColor = "white";
	ctx1.fillText("double: " + this.double, canWidth * 0.5 , canHeight-60);
	ctx1.fillText("num: " + this.fruitNum, canWidth * 0.5 , canHeight-30);
	ctx1.fillText("SCORE: " + this.score, canWidth * 0.5 , 70);
	if (this.gameOver) {
		this.alpha += deltaTime * 0.0005;
		if(this.alpha > 1) {
			this.alpha = 1;
		}
		ctx1.fillStyle = "rgba(255, 255, 255," + this.alpha + ")";
		ctx1.fillText("GAME OVER" , canWidth * 0.5 , canHeight * 0.5);
	}
	ctx1.restore();
	
}
dataObj.prototype.addScore = function() {
	this.score += 100 * this.fruitNum * this.double;
	this.fruitNum = 0;
	this.double = 1;
};