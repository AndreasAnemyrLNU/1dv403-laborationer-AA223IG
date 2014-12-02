"use strict"
function Brick(nr, id){

this.aTag = null;

this.isTurned = false;

this.getId = function(){return id};

this.getNr = function(){ return nr};

this.renderHTML = function(){
	var a = document.createElement("a");
	a.className = "brickBox brickBox_0";
	a.href = "#";
	a.id = this.getId();
	a.value = this.getNr();
	this.aTag = a;
	return a;
	}

Brick.setTimeoutIsRunning = false;

}

Brick.prototype.toString = function(){
	return this.getNr();
};

Brick.prototype.equalsTo = function(brickObj){
	return this.toString() === brickObj.toString() ? true : false;
};






