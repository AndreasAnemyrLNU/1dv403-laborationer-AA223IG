"use strict"

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
	
	if(xhr.readyState === 4)
	{


	var ret = JSON.parse(xhr.responseText);

	console.log("id: "+ret.id);
	console.log("question: "+ret.question);
	console.log("nextURL: "+ret.nextURL);
	console.log("message: "+ret.message);
	
	}

};


xhr.open("GET", "http://vhost3.lnu.se:20080/question/1", true);


xhr.send(null);



var xhr2 = new XMLHttpRequest();

	if(xhr2.readyState === 4)
	{
		xhr2.onreadystatechange = function(){

			console.log(xhr2.responseText);

		};
	}


xhr2.open("POST", "http://vhost3.lnu.se:20080/answer/1", true);

xhr2.setRequestHeader('Content-type','application/json');



xhr2.send("{\"answer\": \"2\"}");






