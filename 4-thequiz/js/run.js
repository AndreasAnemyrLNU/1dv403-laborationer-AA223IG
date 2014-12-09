"use strict"

var run = {

	url: "http://vhost3.lnu.se:20080/question/1",

	questionNr: 1,

	init: function(){			
				this.nextQuestion();
				document.querySelector("#submit").addEventListener("click", this.sendAnswer, false)

	},
	
	nextQuestion: function(){

		var ajaxQuest = new AjaxObj("GET", run.url, true)
		ajaxQuest.open();
		ajaxQuest.send();

		setTimeout(function(){
			document.querySelector("#question").innerHTML = ajaxQuest.data.question;	
			run.url = ajaxQuest.data.nextURL;
		},2000);
	},

	userAnswer: function(){
		var answer = document.querySelector("#answer");
		return answer.value;
	},

	sendAnswer: function(e){
		
		e.preventDefault();

		alert(run.url);

		var ajaxAnswer = new AjaxObj("POST", run.url, true)
		ajaxAnswer.open();
		ajaxAnswer.xhr.setRequestHeader('Content-Type', 'application/json');
		ajaxAnswer.send("{\"answer\": \"" + run.userAnswer() + "\"}");

		setTimeout(function(){

			if(ajaxAnswer.data.message === "Correct answer!")
			{
			alert("Yezzz!");
			run.url = ajaxAnswer.data.nextURL
			run.nextQuestion();
			}

		},2000);
	},
}

window.onload = function(){

run.init();

}