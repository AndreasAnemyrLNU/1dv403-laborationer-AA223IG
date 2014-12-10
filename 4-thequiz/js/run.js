"use strict"

var run = {

	counter: 0,

	currentQuestion: "",

	questions: [],

	url: "http://vhost3.lnu.se:20080/question/1",

	questionNr: 1,

	init: function(){
				run.generateFirsQuestion();			
				document.querySelector("#submit").addEventListener("click", this.sendAnswer, false);
				run.testAnimation();
	},
	
	testAnimation: function(){
		setTimeout(function() {
			document.querySelector("h1").classList.toggle("h1_anim");
			run.testAnimation();
		}, 5000);	
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
			var content = document.querySelector("#content");
			var form = document.querySelector("form");
			console.log(content);
			console.log(form);
			content.removeChild(form);
			run.renderResults();
		}

		var ajaxQuest = new AjaxObj("GET", run.url, true)
		ajaxQuest.open();
		ajaxQuest.send();
		
		document.querySelector("#answer").classList.add("ajaxLoader");

		setTimeout(function(){	
				document.querySelector("#answer").classList.remove("right");
				document.querySelector("#question").innerHTML = ajaxQuest.data.question;
				document.querySelector("#answer").classList.remove("ajaxLoader");
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
			ul.innerHTML += "<li>" + question.question + " (Försök: " + question.tries + " ggr)" + "</li>";
		});
	},

	resetAnswer: function(){
		document.querySelector("#answer").value = "";
	},
	
	sendAnswer: function(e){		
		e.preventDefault();
		document.querySelector("#answer").classList.remove("wrong");
		run.counter++;
		var ajaxAnswer = new AjaxObj("POST", run.url, true)
		ajaxAnswer.open();
		ajaxAnswer.xhr.setRequestHeader('Content-Type', 'application/json');
		ajaxAnswer.send("{\"answer\": \"" + run.userAnswer() + "\"}");

		setTimeout(function(){
			if(ajaxAnswer.data.message === "Correct answer!")
			{
				
				document.querySelector("#answer").classList.add("right");

				run.currentQuestion = document.querySelector("#question").firstChild.nodeValue;

				run.questions.push(new Question(run.currentQuestion, run.counter));
				
				document.querySelector("#question").firstChild.nodeValue = "";

				run.counter = 0;

				console.log(run.url);

				run.url = ajaxAnswer.data.nextURL;
				run.nextQuestion();
				document.querySelector("#answer").value = "";
			}
			else
			{
				document.querySelector("#answer").classList.add("ajaxLoader");
				document.querySelector("#answer").classList.add("wrong");
				
				setTimeout(function(){
					document.querySelector("#answer").classList.remove("ajaxLoader");
					document.querySelector("#answer").value = "";
				}, 500);
				
			}
		},1000);
	},
};

window.onload = function(){

run.init();

};



arr.forEach();