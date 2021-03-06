"use strict";

window.onload = function(){
	
	var min = 0;
	var max = 101;
	var guesses = 0;
	
	function incrementNrOfGuesses(){
		guesses += 1;
	}
	
	var secret = getRandomInt(min,max); // Detta tal behöver bytas ut mot ett slumpat tal.
	
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	// Returns a random integer between min (included) and max (excluded)
	// Using Math.round() will give you a non-uniform distribution!
	function getRandomInt(min, max) {
  	return Math.floor(Math.random() * (max - min)) + min;
	}
	
	
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
			
		//Kasta fel om inmatat värde inte kan tolkas som tal
		if( !isNaN (number))
		{
			if(number == secret)
			{
				incrementNrOfGuesses();
				return [true, "Grattis du vann! Det hemliga talet var " + secret + " och du behövde " + guesses + " gissningar för att hitta det."];
			}
			else if(number < secret && number >= min)
			{
				incrementNrOfGuesses();
				return [false, "Det hemliga talet är högre!"];	
			}
			else if(number > secret && number < max)
			{ 
				incrementNrOfGuesses();
				return [false, "Det hemliga talet är lägre!"];
			}
			else
			{
				return [false, "Talet är utanför intervallet " + min + "-" + max];
			}
		}
		else
		{
			throw "Du måste ange talet med siffror!";	
		}	
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value); // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};