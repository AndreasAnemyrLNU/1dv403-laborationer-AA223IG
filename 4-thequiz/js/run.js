"use strict"



var run = {

	answer: [],

	baseUrl: "http://vhost3.lnu.se:20080",

	questionNr: 1,

	init: function(){
			this.userAnswer();


			var ajaxFetchQuestion = new AjaxObj("GET", this.baseUrl + "/question/" + this.questionNr)
			ajaxFetchQuestion.open();
			ajaxFetchQuestion.send();

	},

	

	userAnswer: function(){
		var answer = document.querySelector("#answer");
		return answer.value;
	},

}





window.onload = function(){

run.init();

}