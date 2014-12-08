"use strict"



var run = {

	url: "http://vhost3.lnu.se:20080/question/1",

	questionNr: 1,

	init: function(){
				
				this.nextQuestion();

	},

	
	nextQuestion: function(){

		var ajaxQuest = new AjaxObj("GET", this.url)
		ajaxQuest.open();
		ajaxQuest.send();

		setTimeout(function(){
			document.querySelector("#question").innerHTML = ajaxQuest.data.question;	

			this.url = ajaxQuest.data.nextURL;

			alert(this.url);

		},2000);
	},



	userAnswer: function(){
		var answer = document.querySelector("#answer");
		return answer.value;
	},

}





window.onload = function(){

run.init();

}