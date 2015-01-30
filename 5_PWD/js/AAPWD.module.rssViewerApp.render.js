"use strict";
AAPWD = AAPWD || {};
AAPWD.module = AAPWD.module || {};
AAPWD.module.rssViewerApp = AAPWD.module.rssViewerApp || {};
AAPWD.module.rssViewerApp.render = AAPWD.module.rssViewerApp.render || {
	
		init: function(refViewer, data){
				
		
		//Generalisera den här också eventuellt
		var dynamicArea = document.getElementById(refViewer.dynamicAppId);
			
		
		//Rss icon
		document.getElementById("dynamicAppId_"+refViewer.instanseNr+"_buttonMove").classList.add("rssIcon");


		
		
		//Här skodar jag en dynamisk meny. Kan vara så att den inte ska vara hårt bunden och mer dynamisk!
		var menu = new AAPWD.core.Menu(AAPWD.module.rssViewerApp.conf.rssMenu, refViewer);		
		dynamicArea.appendChild(menu.render(refViewer));
		

		
		//DYNAMISK MENY OVAN SKA KUNNA TANSPORTERAS ÖVERALLT I KODEN!
		
			var appDiv = document.createElement("DIV");
				appDiv.classList.add(refViewer.app);
				appDiv.setAttribute("id", refViewer.dynamicAppId + "_" + refViewer.app);
	
	

			dynamicArea.appendChild(appDiv);
		//}
		//Det här är inte DRY!
	
							
		this.appendData(refViewer, data);
			
	},
		appendData: function(refViewer, data){	
		var appArea = document.getElementById(refViewer.dynamicAppId + "_" + refViewer.app);			
			
		appArea.innerHTML = "";
		appArea.innerHTML = data;		
	},
	

};










