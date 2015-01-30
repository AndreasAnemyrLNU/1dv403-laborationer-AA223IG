"use strict";
AAPWD = AAPWD || {};
AAPWD.module = AAPWD.module || {};
AAPWD.module.rssViewerApp = AAPWD.module.rssViewerApp || {};
AAPWD.module.rssViewerApp.events = AAPWD.module.rssViewerApp.events || {
	
	//rssMenu_source: function(e){
		
	//	console.log("E i rssEvents:" + e);
		//Splice away everything but not digits! Result = index of current Viewer in viewers
	//	var index = e.target.parentNode.parentNode.id.replace(/\D/g, '');
		
	//	var refViewer = AAPWD.appLoader.viewers[index];

	//	var dynamicArea = document.getElementById(refViewer.dynamicAppId + "_rssViewerApp");

	//	dynamicArea.parentNode.removeChild(dynamicArea);


	//	refViewer.refXHR.open("GET", AAPWD.module.rssViewerApp.conf.XHR.url[1]);		
	//	refViewer.refXHR.send(null);	
	//},
	
	formInputText: function(e){
		e.target.value = "";
	},
	
	rssMenuSrcButtonId_: function(e){
		e.preventDefault();
		
		var instanseNr = e.target.id.replace(/\D/g, '');
								
		var form = document.getElementById("rssMenuSrcFormId_" + instanseNr);	
			

		var ownUrl = "";
		
		if(form.querySelector("#formInputText").value === "Valfri input..." 
		|| form.querySelector("#formInputText").value === "")
		{
			var checked = form.querySelector("input[type=radio]:checked");
			var url = checked.value;
		}
		else{
			url = form.querySelector("#formInputText").value ;
   			url = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape(url);
		}	
			
								
		//var index = e.target.parentNode.parentNode.parentNode.id.replace(/\D/g, '');
		
		var refViewer = AAPWD.appLoader.viewers[instanseNr];
		var dynamicArea = document.getElementById(refViewer.dynamicAppId + "_rssViewerApp");

		dynamicArea.parentNode.removeChild(dynamicArea);

		refViewer.refXHR.open("GET", url);		
		refViewer.refXHR.send(null);
		
		document.querySelector("#dynamicAppId_" + refViewer.instanseNr + "_buttonMove").classList.add("ajax");

		
		form.reset();
	
	},
	
	rssMenuUpdateIntervalButtonId_ : function(e){	
		e.preventDefault();
		var instanseNr = e.target.id.replace(/\D/g, '');
		var refViewer = AAPWD.appLoader.viewers[instanseNr];
			
		var form = document.getElementById("rssMenuUpdateIntervalFormIdId_" + instanseNr);

		var interval = form.querySelector("option:checked");
										  	      	
	 	if(interval.value === "Avsluta")
	 	{
	 			clearInterval(refViewer.refInterval);
	 	}
	 	else
	 	{
	 	var seconds = (interval.value.replace(/\D/g, '')) + "000"; 	
	 	var interval = seconds * 60;
	 	refViewer.refInterval = setInterval(function(){
	 								var dynamicArea = document.getElementById(refViewer.dynamicAppId + "_rssViewerApp");
									dynamicArea.parentNode.removeChild(dynamicArea);						
	 								refViewer.refXHR.open("GET", refViewer.refXHR.responseURL);
	 								refViewer.refXHR.send(null);	
	 								document.querySelector("#dynamicAppId_" + refViewer.instanseNr + "_buttonMove").classList.add("ajax");
	 								//function addZero if < 10... 0 "00"!
	 								function addZero(i) {if (i < 10) {i = "0" + i;}return i;}
	    							var time = new Date();
	    							refViewer.lastUpdate = "Senast uppdaterad " + addZero(time.getHours()) + ":" + addZero(time.getMinutes()) + ":" + addZero(time.getSeconds());
									var currentStatusBox = "statusBox_" + instanseNr;
									document.getElementById(currentStatusBox).innerHTML = refViewer.lastUpdate;
	 							}, interval); 							
	 	};	
	},	
	
	rssMenuUpdateId_ : function(e){
		e.preventDefault();	
		var instanseNr = e.target.id.replace(/\D/g, '');
		var refViewer = AAPWD.appLoader.viewers[instanseNr];
		
		console.warn(refViewer);
		
		var dynamicArea = document.getElementById(refViewer.dynamicAppId + "_rssViewerApp");
		dynamicArea.parentNode.removeChild(dynamicArea);						
		refViewer.refXHR.open("GET", refViewer.refXHR.responseURL);
		refViewer.refXHR.send(null);
		document.querySelector("#dynamicAppId_" + refViewer.instanseNr + "_buttonMove").classList.add("ajax");
		var time = new Date();
		
		function addZero(i) {if (i < 10) {i = "0" + i;}return i;}
	    refViewer.lastUpdate = "Senast uppdaterad " + addZero(time.getHours()) + ":" + addZero(time.getMinutes()) + ":" + addZero(time.getSeconds());
		var currentStatusBox = "statusBox_" + instanseNr;
		document.getElementById(currentStatusBox).innerHTML = refViewer.lastUpdate;
	},
};