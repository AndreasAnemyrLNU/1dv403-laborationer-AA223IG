"use strict";
AAPWD = AAPWD || {};
AAPWD.module = AAPWD.module || {};
AAPWD.module.memoryViewerApp = AAPWD.module.memoryViewerApp || {};
AAPWD.module.memoryViewerApp.conf = AAPWD.module.memoryViewerApp.conf || {
	
	XHR:	
	{
		active:	false,
	},
	
	memoryMenu:
	{	
		className: 	"memoryMenu",
		id:		 	"memoryMenuId",		
		links: 		[
//***************************************************											
						{ 
						button: "Spela",
						buttonId: "memoryMenuChooseGameButtonId",
						formId: "memoryMenuChooseGameFormId",			
						href: "#", 
						id: "memoryMenuChooseGameId",
						list: 	[	
								{option: "2 X 2"},
								{option: "3 X 2"},
								{option: "4 X 2"},
								{option: "5 X 2"},
								{option: "6 X 2"},
								{option: "7 X 2"},
								{option: "2 X 4"},
								{option: "3 X 4"},
								{option: "4 X 4"},
								],
						name: "Välj Spelplan",
						type: "select"
						},
//***************************************************						
						{
						href: "#", 
						id: "memoryMenuRestartId",
						name: "Starta Om",
						}
//***************************************************						
					]
	}
	
};


