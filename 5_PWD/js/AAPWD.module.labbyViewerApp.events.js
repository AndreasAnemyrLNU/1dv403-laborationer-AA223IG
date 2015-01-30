"use strict";
AAPWD = AAPWD || {};
AAPWD.module = AAPWD.module || {};
AAPWD.module.labbyViewerApp = AAPWD.module.labbyViewerApp || {};
AAPWD.module.labbyViewerApp.events = AAPWD.module.labbyViewerApp.events || {
	
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
	
	labbyMenuAliasId_: function(e){
		e.preventDefault();	
		var instanseNr = e.target.id.replace(/\D/g, '');
		var refViewer = AAPWD.appLoader.viewers[instanseNr];
								
		var form = document.getElementById("labbyMenuAliasFormId_" + instanseNr);			
		var checked = form.querySelectorAll("input[type=radio]:checked");
		
		if(checked.length !== 0)
		{
		localStorage.setItem("Alias", checked[0].value);		
		document.querySelector("#statusBox_" + refViewer.instanseNr).innerHTML = "Labby Mezzage: Inloaggad " + localStorage.getItem("Alias");
		};
		
		checked = form.querySelectorAll("input[type=text]");
		if(checked[0].value !== "Valfri input...")
		{
			localStorage.setItem("Alias", checked[0].value);
			document.querySelector("#statusBox_" + refViewer.instanseNr).innerHTML = "Labby Mezzage: Inloaggad " + localStorage.getItem("Alias");
		};
		
		
		var url = localStorage.getItem("Alias");				
	},
	
	labbyMenuUpdateIntervalButtonId_ : function(e){	
		e.preventDefault();
		var instanseNr = e.target.id.replace(/\D/g, '');
		var refViewer = AAPWD.appLoader.viewers[instanseNr];
			
		clearInterval(AAPWD.module.labbyViewerApp.events.labbyIntervalId);
							
		var form = document.getElementById("labbyMenuUpdateIntervalFormIdId_" + instanseNr);
		var checked = form.querySelector("option:checked");	 
	 	var seconds = (checked.value.replace(/\D/g, '')) + "000"; 	
	 		 		
	(function(refViewer){
		
		if(checked.value === "Avsluta")
		{
			clearInterval(refViewer.labbyInterval);	
		}
		else
		{		
		 	clearInterval(refViewer.labbyInterval);
		 		 	
			refViewer.labbyInterval = setInterval(function(){
				var dynamicArea = document.getElementById(refViewer.dynamicAppId + "_labbyViewerApp");
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
			}, seconds);
		}					
	})(refViewer);
								
	},	
				
	labbyMenuUpdateId_ : function(e){
		e.preventDefault();	
		var instanseNr = e.target.id.replace(/\D/g, '');
		var refViewer = AAPWD.appLoader.viewers[instanseNr];
		
		console.warn(refViewer);
		
		var dynamicArea = document.getElementById(refViewer.dynamicAppId + "_labbyViewerApp");
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
	
	labbyMenuNrOfMessages_ : function(e){
		e.preventDefault();	

		var instanseNr = e.target.id.replace(/\D/g, '');
		var refViewer = AAPWD.appLoader.viewers[instanseNr];
		
		var form = document.getElementById("labbyMenuNrOfMessages_" + instanseNr);
		var nrOfMessages = form.querySelector("input");
				
		var dynamicArea = document.getElementById(refViewer.dynamicAppId + "_labbyViewerApp");
		dynamicArea.parentNode.removeChild(dynamicArea);						
			
		refViewer.refXHR.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/getMessage.php?history=" +nrOfMessages.value);
		refViewer.refXHR.send(null);
		document.querySelector("#dynamicAppId_" + refViewer.instanseNr + "_buttonMove").classList.add("ajax");
		var time = new Date();
		
		function addZero(i) {if (i < 10) {i = "0" + i;}return i;}
	    refViewer.lastUpdate = "Senast uppdaterad " + addZero(time.getHours()) + ":" + addZero(time.getMinutes()) + ":" + addZero(time.getSeconds());
		var currentStatusBox = "statusBox_" + instanseNr;
		document.getElementById(currentStatusBox).innerHTML = refViewer.lastUpdate;
		
		nrOfMessages.value="";
		form.reset();		
	},
	
	labbyInputText_: function(e){
		e.preventDefault;
		var instanseNr = e.target.id.replace(/\D/g, '');
		var refViewer = AAPWD.appLoader.viewers[instanseNr];
	},
	
	labbySubmit_ : function(e){
		var instanseNr = e.target.id.replace(/\D/g, '');
		var refViewer = AAPWD.appLoader.viewers[instanseNr];
		var appConfXHR = AAPWD.module.labbyViewerApp.conf.XHR.POST;
				
		var currentResponsUrl = refViewer.refXHR.responseURL;
		console.log(appConfXHR);
	
		var message = document.querySelector("#labbyInputText_" + refViewer.instanseNr);		
		var params = "text="+message.value+"&username=" + localStorage.getItem("Alias");
		
		refViewer.refPostLabbyXHR = new XMLHttpRequest();
		refViewer.refPostLabbyXHR.open(appConfXHR.method, appConfXHR.url, true);
		
		console.log(refViewer.refPostLabbyXHR);


		refViewer.refPostLabbyXHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


		refViewer.refPostLabbyXHR.onreadystatechange = function() {
			if(refViewer.refPostLabbyXHR.readyState == 4 && refViewer.refPostLabbyXHR.status == 200) {
		  		//Vet inte om det går att påverka ett xhr objetk men annars får jag fixka en temp variabel....
				document.getElementById("statusBox_"+refViewer.instanseNr).innerHTML = "Ditt meddelande fick ID: "+refViewer.refPostLabbyXHR.responseText;
		   	}
		};
		refViewer.refPostLabbyXHR.send(params);
		
		
	}
};