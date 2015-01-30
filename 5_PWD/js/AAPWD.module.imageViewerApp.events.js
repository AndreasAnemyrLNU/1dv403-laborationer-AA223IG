"use strict";
AAPWD = AAPWD || {};
AAPWD.module = AAPWD.module || {};
AAPWD.module.imageViewerApp = AAPWD.module.imageViewerApp || {};
AAPWD.module.imageViewerApp.events = AAPWD.module.imageViewerApp.events || {
	
	changeBackGround: function(e){
		e.preventDefault();
		
		var splitted = e.target.id.split("|");
		var instanseNr = splitted[0].replace(/\D/g, '');
		var imgIndex = splitted[1].replace(/\D/g, '');
		
		var pictureData = AAPWD.appLoader.viewers[instanseNr].imgElementArr[imgIndex];
		
		
		
		document.getElementById("workingArea").style.backgroundImage = "url(" + pictureData.URL + ")";	
	},
	
	loadPicture: function(e){
		e.preventDefault();
		
		var splitted = e.target.id.split("|");
		var instanseNr = splitted[0].replace(/\D/g, '');
		var imgIndex = splitted[1].replace(/\D/g, '');
		
		var pictureData = AAPWD.appLoader.viewers[instanseNr].imgElementArr[imgIndex];
		
					
		AAPWD.appLoader.init("imageViewerApp", pictureData, false, e);
					
	},
		
};