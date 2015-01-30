"use strict";
AAPWD = AAPWD || {};
AAPWD.run = AAPWD.run || {	
	
	appNames: ["imageViewerApp", "rssViewerApp", "labbyViewerApp", "memoryViewerApp"],						// Maybe this can be captured auto from links instead?
		
	init: function(){												// 2												
			
		var workingArea = document.getElementById("workingArea");
		

		
		//workingArea.style.width = window.innerWidth;
		//workingArea.style.height = window.innerHeight;
		
		this.appNames.forEach(function(appName){
			AAPWD.run.hookLink(appName);	
		});
		
		AAPWD.events.genericListener();
		
		var menu = document.querySelectorAll(".menu");
		
		menu.addEventListener("click",function(){
			//Lägg till kod för z-index!
			AAPWD.appLoader.highZ += 1;
			this.parentNode.parentNode.style.zIndex = AAPWD.appLoader.highZ;
		},false);
		
	},
	
	hookLink: function(app){									// 3																	
		var initLink = document.getElementById(app);		
		initLink.addEventListener("click", function()
		{			
			return AAPWD.run.initApp(app);
		}, false);
			
	},
	
	initApp: function(app){											// 4
			
		//console.log(app);	
				
		switch(app)
		{	
			case "imageViewerApp": AAPWD.appLoader.init(app); break;
			case "memoryViewerApp": AAPWD.appLoader.init(app); break;
			case "rssViewerApp": AAPWD.appLoader.init(app); break;
			case "labbyViewerApp": AAPWD.appLoader.init(app); break;			
		}				
	}
};

document.addEventListener("load", AAPWD.run.init(), false);					//	1 Initialize AAPWD (after document loaded)
