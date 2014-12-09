"use strict"

var run = {

	counter: 0,

	currentQuestion: "",

	questions: [],

	url: "http://vhost3.lnu.se:20080/question/1",

	questionNr: 1,

	init: function(){
				run.generateFirsQuestion();			
				document.querySelector("#submit").addEventListener("click", this.sendAnswer, false)
	},
	
	generateFirsQuestion: function(){
		var ajaxQuest = new AjaxObj("GET", run.url, true)
		ajaxQuest.open();
		ajaxQuest.send();
		
		setTimeout(function(){		
				document.querySelector("#question").innerHTML = ajaxQuest.data.question;
			run.url = ajaxQuest.data.nextURL;
		},1000);

	},


	nextQuestion: function(){

		if(run.url === undefined)
		{
			run.renderResults();
		}

		var ajaxQuest = new AjaxObj("GET", run.url, true)
		ajaxQuest.open();
		ajaxQuest.send();

		setTimeout(function(){	
				document.querySelector("#question").innerHTML = ajaxQuest.data.question;
			run.url = ajaxQuest.data.nextURL;
		},1000);


	},

	userAnswer: function(){
		var answer = document.querySelector("#answer");
		return answer.value;
	},

	renderResults: function(){
		var ul = document.querySelector("ul");

		run.questions.forEach(function(question){
			ul.innerHTML += "<li>" + question.question + " (Gissningar: " + question.tries + " ggr)" + "</li>";
		});
	},

	sendAnswer: function(e){		
		e.preventDefault();
		run.counter++;
		var ajaxAnswer = new AjaxObj("POST", run.url, true)
		ajaxAnswer.open();
		ajaxAnswer.xhr.setRequestHeader('Content-Type', 'application/json');
		ajaxAnswer.send("{\"answer\": \"" + run.userAnswer() + "\"}");

		setTimeout(function(){
			if(ajaxAnswer.data.message === "Correct answer!")
			{
				run.currentQuestion = document.querySelector("#question").firstChild.nodeValue;

				run.questions.push(new Question(run.currentQuestion, run.counter));
				run.counter = 0;

				console.log(run.url);

				run.url = ajaxAnswer.data.nextURL;
				run.nextQuestion();
			}
			else
			{
				alert("Fel svar!")
			}
		},500);
	},
}

window.onload = function(){

run.init();

}