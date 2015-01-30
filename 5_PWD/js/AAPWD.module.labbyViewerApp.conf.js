"use strict";
AAPWD = AAPWD || {};
AAPWD.module = AAPWD.module || {};
AAPWD.module.labbyViewerApp = AAPWD.module.labbyViewerApp || {};
AAPWD.module.labbyViewerApp.conf = AAPWD.module.labbyViewerApp.conf || {
	
	XHR:	
	{
		active:		true,
		json:		false,
		xml:		true,
		url:		["http://homepage.lnu.se/staff/tstjo/labbyServer/getMessage.php?history=20"],
		method:		"GET",
		POST:	{	
				name: "Labby Mezzage (Skrivning)",
				url: "http://homepage.lnu.se/staff/tstjo/labbyServer/setMessage.php",
				method: "POST",				
				},
	},
	
	
	
	labbyMenu:
	{	
		className: 	"labbyMenu",
		id:		 	"labbyMenuId",		
		links: 		[
//**************************************************
						{ 
						button: "Nytt Alias",
						buttonId: "labbyMenuAliasId",
						formId: "labbyMenuAliasFormId",				
						href: "#", 
						id: "labbyMenuAliasTitleId", 
						list:  [
								{	
								name: "Anonymous",
								href: "Anonymous",
								},	
								{	
								name: "Guest",
								href: "Guest",
								},								
								],
						name: "Alias",
						type: "radio"   
						},
//***************************************************											
						{ 
						button: "Ändra",
						buttonId: "labbyMenuUpdateIntervalButtonId",
						formId: "labbyMenuUpdateIntervalFormIdId",			
						href: "#", 
						id: "labbyMenuUpdateIntervalId",
						list: 	[	
								{option: "10 sekunder"},
								{option: "20 sekunder"},	
								{option: "30 sekunder"},
							  	{option: "40 sekunder"},
							  	{option: "50 sekunder"},
							  	{option: "60 sekunder"},
							  	{option: "Avsluta"}
								],
						name: "Uppdateringsintervall",
						type: "select"
						},
						
//***************************************************	
						{ 
						button: "Ändra",
						buttonId: "labbyMenuNrOfMessages",
						formId: "labbyMenuNrOfMessages",			
						href: "#", 
						id: "labbyMenuNrOfMessages",
						list: [],
						name: "Antal meddelanden",
						type: "number"
						},	
//***************************************************	
						{
						formId: "labbyMenuUpdateIntervalFormIdId",
						href: "#", 
						id: "labbyMenuUpdateId",
						name: "Uppdatera nu",
						}
//***************************************************						
					]
	}
	
};


