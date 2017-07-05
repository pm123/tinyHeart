var waveObj = function() {
	this.x = [];
	this.y = [];
	this.alive = [];
	this.r = [];
	this.collision = [];
};
waveObj.prototype.num = 10;
waveObj.prototype.init = function () {
	for (var i = 0; i < this.num; i++) {
		this.x[i] = 0;
		this.y[i] = 0;
		this.alive[i] = false;
		this.r[i] = 0;
		this.collision[i] = "";
	}
};
waveObj.prototype.draw = function() {

	ctx1.save();
	ctx1.lineWidth = 2;
	ctx1.shadowBlur = 3;
	ctx1.shadowColor = "white";
	for (var i = 0; i < this.num; i++) {

		if (this.alive[i]) {
			var alpha = 1;
			this.r[i] += deltaTime * 0.05;
			ctx1.beginPath();
			ctx1.arc(this.x[i], this.y[i], this.r[i], 0, 2*Math.PI);
			if(this.collision[i] == "fruit") {	
				if (this.r[i] > 50) {
					this.r[i] = 50;
					this.alive[i] = false;
					break;
				}
				alpha = 1 - this.r[i] / 50;
				ctx1.strokeStyle = "rgba(255, 255, 255," + alpha + ")";
			}else {
				if (this.r[i] > 100) {
					this.r[i] = 100;
					this.alive[i] = false;
					break;
				}
				alpha = 1 - this.r[i] / 100;
				ctx1.strokeStyle = "rgba(203, 91, 0," + alpha + ")";
			}
			
			ctx1.stroke();

			ctx1.restore();
		}
	}
};
waveObj.prototype.born = function(x, y, collision) {
	for (var i = 0; i < this.num; i++) {
		if (!this.alive[i]) {
			this.alive[i] = true;
			this.r[i] = 20;
			this.x[i] = x;
			this.y[i] = y;
			this.collision[i] = collision;
		}
	}
};