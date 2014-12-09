function AjaxObj(method, url){

	var that = this;
	
	this.data = "";
	
	this.xhr = new XMLHttpRequest();

	this.xhr.onreadystatechange = function(){
		
		if(that.xhr.readyState === 4)
		{
			that.data = JSON.parse(that.xhr.responseText);		
		}
	}

	this.method = function(){
		return method;
	};

	this.url = function(){
		return url;
	};

	this.open = function(){
		this.xhr.open(this.method(), this.url())
	};

	this.send = function(data){	
		this.xhr.send(data);
	}
}
























// "use strict"

// window.onload = function()
// {

// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function(){
	
// 	if(xhr.readyState === 4)
// 	{


// 	var ret = JSON.parse(xhr.responseText);

// 	console.log("id: "+ret.id);
// 	console.log("question: "+ret.question);
// 	console.log("nextURL: "+ret.nextURL);
// 	console.log("message: "+ret.message);


// 	var legend = document.querySelector("#question")

// 	legend.innerHTML = ret.question;

	
// 	}

// };



// var submit = document.querySelector("#submit");

// submit.addEventListener("click", sendAnswer ,false);


// 	function sendAnswer(){

// 		xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);






// 		var xhr2 = new XMLHttpRequest();

// 			if(xhr2.readyState === 4)
// 			{
// 				xhr2.onreadystatechange = function(){

// 					console.log(xhr2.responseText);

// 				};
// 			}


// 		xhr2.open("POST", "http://vhost3.lnu.se:20080/answer/1", true);

// 		xhr2.setRequestHeader('Content-type','application/json');

// 		var answerNode = document.querySelector("#answer")

// 		var answer = answerNode.value;

// 		xhr2.send("{\"answer\": \" + answer + \"}");

// 	}


// }







