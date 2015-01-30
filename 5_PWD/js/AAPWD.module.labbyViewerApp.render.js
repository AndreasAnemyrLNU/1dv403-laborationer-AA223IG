"use strict";
AAPWD = AAPWD || {};
AAPWD.module = AAPWD.module || {};
AAPWD.module.labbyViewerApp = AAPWD.module.labbyViewerApp || {};
AAPWD.module.labbyViewerApp.render = AAPWD.module.labbyViewerApp.render || {
	
		init: function(refViewer, data){
		
		//Labby icon
		document.getElementById("dynamicAppId_"+refViewer.instanseNr+"_buttonMove").classList.add("labbyIcon");

		
		if(document.querySelector("#statusBox_" + refViewer.instanseNr).innerHTML === "Status...")
		{
			document.querySelector("#statusBox_" + refViewer.instanseNr).innerHTML = "Labby Mezzage: Inloaggad " + localStorage.getItem("Alias");
		}
		
		//Generalisera den här också eventuellt
		var dynamicArea = document.getElementById(refViewer.dynamicAppId);
			
		//Här skodar jag en dynamisk meny. Kan vara så att den inte ska vara hårt bunden och mer dynamisk!
		
		var menuOrNot = document.querySelector("#labbyMenu_dynamicAppId_" +refViewer.instanseNr);

		//Because rerendering will quit meny ajax...
		if(menuOrNot === null)
		{	
			var menu = new AAPWD.core.Menu(AAPWD.module.labbyViewerApp.conf.labbyMenu, refViewer);		
			dynamicArea.appendChild(menu.render(refViewer));
		}

		
		//DYNAMISK MENY OVAN SKA KUNNA TANSPORTERAS ÖVERALLT I KODEN!
		
			var appDiv = document.createElement("DIV");
				appDiv.classList.add(refViewer.app);
				appDiv.setAttribute("id", refViewer.dynamicAppId + "_" + refViewer.app);
			dynamicArea.appendChild(appDiv);
		
		//Convert XML2HTML...
		
			var html = data.replace("<?xml version='1.0' encoding='UTF-8' ?>", "");
				
				//html = html.replace("<messages>", "<messages>");
				//html = html.replace("/messages>", "</div>");	
				
				//html = html.replace(/message/g, "<div id=\"message\">");
				//html = html.replace("</message>", "</div>");	

				//html = html.replace("<id>", "<span id=\"id\">");
				//html = html.replace("</id>", "</span>");
				
				//html = html.replace("<text>", "<p id=\"text\">");
				//html = html.replace("</text>", "</p>");	
				
				//html = html.replace("<author>", "<span id=\"author\">");
				//html = html.replace("</author>", "</span>");
				
				//html = html.replace("<time>", "<span id=\"time\">");
				//html = html.replace("</time>", "</span>");	
													
				this.appendData(refViewer, html, dynamicArea);
				
				var times = document.querySelectorAll("time:not(.parsedDate)");
				
				function zero(number){
				if(number < 10)
				{
					return "0" +number;
				}		
					return number;
				}
				
				
				for(var i = 0; i < times.length; i++){						
					var m = +times[i].firstChild.nodeValue;									
					times[i].className = "parsedDate";
					var date = new Date(m);
					times[i].firstChild.nodeValue = "";
					times[i].firstChild.nodeValue += date.toLocaleDateString()+" ("+zero(date.getHours())+":"+zero(date.getMinutes())+")";
				};
				
				


		
			
	},
		appendData: function(refViewer, data, dynamicArea){	
		
		var appArea = document.getElementById(refViewer.dynamicAppId + "_" + refViewer.app);			
			
		appArea.innerHTML = "";
		appArea.innerHTML = data;
		
		var objDiv = document.querySelector("#dynamicAppId_" + refViewer.instanseNr + "_" + refViewer.app);
		objDiv.scrollTop = objDiv.scrollHeight;
				
		var labbyInputText = document.createElement("textarea");
		labbyInputText.id = "labbyInputText_" + refViewer.instanseNr;
		labbyInputText.className = "labbyInputText";
		
		var labbySendButton = document.createElement("input");
		labbySendButton.id = "labbySubmit_" + refViewer.instanseNr;
		labbySendButton.type = "submit";
		labbySendButton.value = "Skicka Meddelande";
		labbySendButton.className = "labbySubmitButton";
	
		dynamicArea.appendChild(labbyInputText);
		dynamicArea.appendChild(labbySendButton);
		
		//appArea.parentNode.insertBefore(labbyInputText, appArea.nextSibling);

		
		
	},	
};	










