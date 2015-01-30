"use strict";
AAPWD = AAPWD || {};
AAPWD.module = AAPWD.module || {};
AAPWD.module.memoryViewerApp = AAPWD.module.memoryViewerApp || {};
AAPWD.module.memoryViewerApp.events = AAPWD.module.memoryViewerApp.events || {
	
	lastGame:
	{
		rememberLastCols: "",
		rememberLastRows: "",
	},
	
	memoryMenuChooseGameButtonId_: function(e){
			
		var parsedInstanse = e.target.id.replace(/\D/g, '');
		var refViewer = AAPWD.appLoader.viewers[parsedInstanse];			
		var form = document.querySelector("#memoryMenuChooseGameFormId_" + parsedInstanse);
		var checked = document.querySelector("option:checked");
			
		var firstParam = checked.value[0];
		var secondParam = checked.value[4];
		AAPWD.module.memoryViewerApp.events.lastGame.rememberLastCols = checked.value[0];
		AAPWD.module.memoryViewerApp.events.lastGame.rememberLastRols = checked.value[4];
		
		Memory.run(refViewer, firstParam, secondParam);				
	},
	
	memoryMenuRestartId_: function(e){
		var parsedInstanse = e.target.id.replace(/\D/g, '');
		var refViewer = AAPWD.appLoader.viewers[parsedInstanse];
		Memory.run(refViewer, 
					AAPWD.module.memoryViewerApp.events.lastGame.rememberLastCols,
					AAPWD.module.memoryViewerApp.events.lastGame.rememberLastRols);
	},
	

	
	
	
	
};