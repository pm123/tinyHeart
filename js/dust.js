var dustObj = function() {
	this.dustId;
	this.x = [];
	this.y = [];
	this.alpha;
	this.amp = [];
	
};
dustObj.prototype.num = 30;
dustObj.prototype.init = function() {
	for (var i = 0; i < this.num; i++) {
		this.x[i] = Math.random() * canWidth;
		this.y[i] = Math.random() * canHeight;
		this.amp[i] = 25 + Math.random() * 25;

	}
	this.dustId = Math.floor(Math.random() * 7); //[0,7)
	this.alpha = 0;
};
dustObj.prototype.draw = function(){

	this.alpha += deltaTime * 0.0008;
	var l = Math.sin(this.alpha);

	for (var i = 0; i < this.num; i++) {
		ctx1.drawImage(dustPic[this.dustId], this.x[i] + l * this.amp[i], this.y[i]);

	}
};