"use strict";

window.onload = function(){

	var birthday = function(date){
	
	// yyyy-mm-dd
	var re = /^(\d{4})([\/-])(\d{1,2})\2(\d{1,2})$/ ; 
	console.log(re.test(date)); 
	
	var nextBirthDay = new Date(date);
	var now = new Date();
	nextBirthDay.setYear(now.getFullYear());

	//Differans i millisekinder från årets födelsdag vs nuvarande datum
	var milliSeconds = nextBirthDay - now;
	
	//Konvertera millisekunder till avrundade dagar
	var days = Math.ceil(milliSeconds / (1000*60*60*24));
	
	return days;

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};