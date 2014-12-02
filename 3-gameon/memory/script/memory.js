"use strict";
var Memory = {

	divMemory: document.querySelector("#memory"),

	memoryArr: [],

	testArr: [null, null],

	counter: {

		totalPair: 0,
		pairOfBricks: 0,
		tries: 0,
		gameTimeStart: null,
		gameTimeEnd: null,
		gameTotalTime: 0
	},

	addBrickEvent: function(){
		var that = this;
		NodeList.prototype.forEach = Array.prototype.forEach;
		var aTags = document.querySelectorAll("a");
		aTags.forEach(function(aTag){
			aTag.addEventListener("click", that.turnBrick, false)
			aTag.addEventListener("click", that.testBrick, false)	
			aTag.addEventListener("click", that.turnBrickBack, false)
		});

	},

	convertMilliSeconds: function(milliSeconds){

		var mydate = new Date(milliSeconds);
		var humandate = mydate.getUTCHours()+" tim, "+mydate.getUTCMinutes()+" min and "+mydate.getUTCSeconds()+" sek"

		return humandate;
	},

	convertNrsArrToBrickArr: function(memoryArr){
		var that = this;	
		this.memoryArr.forEach(function(nr, index){
		that.memoryArr[index] = that.renderBrick(nr, index);
		});
	},

	flashScreen: function(){
		setTimeout(function()
		{
			document.body.style.backgroundColor = "yellow";
		}, 150)

		setTimeout(function()
		{
			document.body.style.backgroundColor = "white";
		}, 250)
		
	},

	run: function(col, row){
		
		var div = document.querySelector("#memory")
		div.style.width = col * 4 +"em"; 


		this.memoryArr = this.renderMemory(col, row);
		this.counter.totalPair = this.memoryArr.length / 2
		this.convertNrsArrToBrickArr();
		this.renderHTML();
		this.addBrickEvent();
		this.renderClock();
	},

	renderClock: function(){

		var that = this;
		var pClock = document.querySelector("#clock");

		function zero(number){
			if(number < 10)
			{
				return "0" +number;
			}		
			return number;
		}
		
		that.counter.setTimeoutId = setTimeout(function(){
			


			that.renderClock();
			var milliSeconds = new Date() - that.counter.gameTimeStart;

			var mydate = new Date(milliSeconds);
			var humandate = zero(mydate.getHours() -1)
			+":"+zero(mydate.getMinutes())
			+":"+zero(mydate.getSeconds());

			pClock.innerHTML = humandate;
			//console.log(humandate);


		}, 500
		);



	},

	renderHTML: function(){
		
		var that = this;

		var divMemory = document.querySelector("#memory");
		this.memoryArr.forEach(function(brick){
		divMemory.appendChild(brick.renderHTML());

		});	

	},

	renderMemory: function(rows, cols){
		return RandomGenerator.getPictureArray(rows, cols);
	},

	renderBrick: function(nr, id){
		return new Brick(nr, id);
	},

	renderStatusBox: function(){

		var statusDiv = document.createElement("div")
		statusDiv.className = "status";


		var pPairOfBricks = document.createElement("p");
		var pTries = document.createElement("p");
		var pTextTime = document.createElement("p");

		var textPairOfBricks = document.createTextNode("Antal par: " +this.counter.pairOfBricks);
		var textTries = document.createTextNode("Försök gjorda: " +this.counter.tries);
		var textTime = document.createTextNode("Tid: " +this.convertMilliSeconds(this.counter.gameTotalTime));

		pPairOfBricks.appendChild(textPairOfBricks);
		pTries.appendChild(textTries);
		pTextTime.appendChild(textTime);

		statusDiv.appendChild(pPairOfBricks);
		statusDiv.appendChild(pTries);
		statusDiv.appendChild(pTextTime);
		this.divMemory.appendChild(statusDiv);
	},

	pairOfBricks: function(){
		var that = this;
		that.counter.pairOfBricks += 1;
	},

	pushBrickIntoArr: function(brick){	
				this.memoryArr.push(brick);
	},

	triesCounter: function(){
		var that = this;
		that.counter.tries += 1;
	},

	turnBrick: function(){
		var that = Memory;


		if(that.counter.gameTimeStart === null)
		{
			that.counter.gameTimeStart = new Date();
		}

		if(!Brick.setTimeoutIsRunning)
		{


			if(that.testArr[0] === null && that.memoryArr[this.id].isTurned !== true)
			{	
				this.className = "brickBox brickBox_" +this.value;
				that.testArr[0] = that.memoryArr[this.id];
				that.testArr[0].isTurned = true;
			}
			else if(that.testArr[1] === null && that.memoryArr[this.id].isTurned !== true)
			{
				this.className = "brickBox brickBox_" +this.value;
				that.testArr[1] = that.memoryArr[this.id];
				that.testArr[1].isTurned = true;
			}
		}
		else
		{
			alert("Wait");
		}
	},

	testBrick: function(){

		var that = Memory;

		if(that.testArr[0] instanceof Brick && that.testArr[1] instanceof Brick)
		{
			if(that.testArr[0].equalsTo(that.testArr[1]))
			{
				that.pairOfBricks();
				that.flashScreen();
				that.testArr = [null, null];
			}
			else
			{
				var tmpReference_0 = that.testArr[0];
				var tmpReference_1 = that.testArr[1];
				
				that.testArr[0] = null;
				that.testArr[1] = null;
				
				Brick.setTimeoutIsRunning = true
				setTimeout(function(){		
					tmpReference_0.aTag.className = "brickBox brickBox_0";	
					tmpReference_1.aTag.className = "brickBox brickBox_0";		
					tmpReference_0.isTurned = false;
					tmpReference_1.isTurned = false;
					Brick.setTimeoutIsRunning = false;
				}, 500);
			}
		that.triesCounter();
		}
		
		if(that.counter.pairOfBricks === that.counter.totalPair)
		{
			that.counter.gameTimeEnd = new Date();
			that.counter.gameTotalTime = that.counter.gameTimeEnd - that.counter.gameTimeStart;
			that.renderStatusBox();
		}
	},





}

window.onload = function(){

	Memory.run(prompt("Ange kolumner!"),prompt("Ange rader!"));

}