"use strict";
AAPWD = AAPWD || {};
AAPWD.module = AAPWD.module || {};
AAPWD.module.memoryViewerApp = AAPWD.module.memoryViewerApp || {};
AAPWD.module.memoryViewerApp.render = AAPWD.module.memoryViewerApp.render || {
	
	init: function(refViewer){
	
	document.getElementById("dynamicAppId_"+refViewer.instanseNr+"_buttonMove").classList.add("memoryIcon");

	//Generalisera den här också eventuellt
	var dynamicArea = document.getElementById(refViewer.dynamicAppId);
	
	//Här skodar jag en dynamisk meny. Kan vara så att den inte ska vara hårt bunden och mer dynamisk!
	var menu = new AAPWD.core.Menu(AAPWD.module.memoryViewerApp.conf.memoryMenu, refViewer);		
	dynamicArea.appendChild(menu.render(refViewer));

	var appDiv = document.createElement("DIV");
		appDiv.classList.add(refViewer.app);
		//appDiv.setAttribute("id", refViewer.dynamicAppId + "_" + refViewer.app);
		appDiv.setAttribute("id", "memory_" + refViewer.instanseNr);

	dynamicArea.appendChild(appDiv);
		
	}
};










