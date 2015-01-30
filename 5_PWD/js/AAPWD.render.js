"use strict";
AAPWD = AAPWD || {};
AAPWD.render = AAPWD.render || {
	

	
	appWindow: function(refViewer){												
						
		var workingArea = document.getElementById("workingArea");
		
		//v === viewer
		var v = document.createElement("DIV");
		
		refViewer.refAppDiv = v;
		
		//Snabb genväg för att komma åt divens referens direktt på objektet. Utan att selekter överallt. Fungerar ?
		
		
		v.id = refViewer.dynamicAppId;	
		v.classList.add("Viewer");
		v.classList.add("visible");
		
		v.style.left = refViewer.left;
		v.style.top = refViewer.top;
		v.style.zIndex = refViewer.zIndex;
			
		this.appMenu(refViewer, v);
			
		workingArea.appendChild(v);
		
		//Jag måste koppla en hanterat som kan dra runt fönstret :)
		AAPWD.events.switcButtonEvent(refViewer, v.id);	
	},
	
	appMenu: function(refViewer, v){
		
		var menuName = document.createElement("A");
		var appName = 	document.createTextNode(refViewer.app);		
		menuName.appendChild(appName);
		
		var menu = 		document.createElement("DIV");	
			menu.id = "menu_" + refViewer.instanseNr;
			menu.classList.add("menu");
		
		var menuButtonMove =	document.createElement("A");
			menuButtonMove.id = refViewer.dynamicAppId + "_buttonMove";	
			menuButtonMove.setAttribute("href", "#");
			menuButtonMove.classList.add("ajax");
		var menuFocusDiv =	document.createElement("DIV");
			menuFocusDiv.id = refViewer.dynamicAppId + "_focusDiv";
		var menuButtonClose = document.createElement("A");
			menuButtonClose.id = refViewer.dynamicAppId + "_buttonClose";	
			menuButtonClose.classList.add("buttonClose");
		var menuButtonMinimize = document.createElement("A");
			menuButtonMinimize.id = refViewer.dynamicAppId + "_buttonMinimize";	
			menuButtonMinimize.classList.add("buttonMinimize");
		var menuButtonScale = document.createElement("A");
			menuButtonScale.id = refViewer.dynamicAppId + "_buttonScale";
			menuButtonScale.setAttribute("class", "scale");

		menu.appendChild(menuButtonMove);
		menuButtonMove.appendChild(menuFocusDiv);							
		menu.appendChild(menuName);
		menu.appendChild(menuButtonClose);
		menu.appendChild(menuButtonMinimize);
		menu.appendChild(menuButtonScale); 
		 
		v.appendChild(menu);
		
		var statusBox = document.createElement("DIV");
		statusBox.className = "statusBox";
		statusBox.id = "statusBox_" + refViewer.instanseNr;	
		var statusText = document.createTextNode("Status...");	
		statusBox.appendChild(statusText);
		v.appendChild(statusBox);
				
	},
	
	appContent:	function(refViewer, data, e){
		
		document.querySelector("#dynamicAppId_" + refViewer.instanseNr + "_buttonMove").classList.remove("ajax");
		
							
		switch(refViewer.app)
		{							
			case "imageViewerApp": 
				AAPWD.module.imageViewerApp.render.init(refViewer, data, e); 
			break;

			case "rssViewerApp": 
				AAPWD.module.rssViewerApp.render.init(refViewer, data);
			break;
			
			
			case "memoryViewerApp":	
				AAPWD.module.memoryViewerApp.render.init(refViewer);
			break;
			
			case "labbyViewerApp":	
				AAPWD.module.labbyViewerApp.render.init(refViewer, data);
			break;
		};
	},
};

