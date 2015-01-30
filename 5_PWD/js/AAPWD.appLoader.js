"use strict";
AAPWD = AAPWD || {};
AAPWD.appLoader = AAPWD.appLoader || {	
		
	left:	200,
	top:	200,
	//refXHR: null,
	viewers: [],
	//Sätts unikt när ett appWindow rendreras med unikt id baserat på antalet "dynamicAppId" + antalt objekt i viewers 
	appDiv: null,
	higherZ: 100,															// All Viewers DIFFERENT viewers list here!
				
	init: function(app, data, loadXHR, e){	
		

		
		this.viewers.push(new this.Viewer(app));
		var refViewer = this.viewers[this.viewers.length -1];
		
		
		//LÄSER IN SPECIFIK CONF FÖR APPEN I FRÅGA DYNAMISKT!
		for(var module in AAPWD.module)
		{
			if(module.toString() === app)
			{		
				refViewer.conf = AAPWD.module[app].conf;				
			}
		};

		AAPWD.render.appWindow(this.viewers[this.viewers.length-1]);

		//Om det finns konfiguration för att skapa ett XHR sp skapas detta och sidan rendreras ifrån onreadystachange i xhrs....
		if(refViewer.conf.XHR.active && loadXHR !== false)
		{
			AAPWD.XHR.newXHR(refViewer, refViewer.conf.XHR.method, refViewer.conf.XHR.url[0]);
		}
		//Om rendrering inte är beroende av ett xhr-objek (sidan är statiskt programmerad typ memory...)
		else
		{				
			AAPWD.render.appContent(refViewer, data, e);		
		}
																												
	    //AAPWD.render.appWindow(this.viewers[this.viewers.length-1]);		// 3 Send last ref position to renderfunction. Here's data for window
		AAPWD.appLoader.calcNextWindowPosition(10);
	},
	
	calcNextWindowPosition: function(value){
		AAPWD.appLoader.left += value;
		AAPWD.appLoader.top += value;	
	},
	
	//This construction "Viewer" is for every specific modul app!!!
	Viewer: function(app){
		
		//Appens individuell konfigurationer!
		this.conf = null;
		
		//referens att spar undan för sanbb åtkoms till Viewerns div så att man slipper parsa hela tiden...
		//Initieras AAPWD.render appWindow
		this.refAppDiv = null;
		
		
		//App timer XHR intervalls...
		this.refInterval;
		//Testar då jag haft en del bekymmer med intervall som inte stoppas....
		this.labbyInterval;
		this.lastUpdate;
				
				
		this.app = app;					
		this.instanseNr = AAPWD.appLoader.viewers.length;
		this.dynamicAppId = "dynamicAppId_" + (AAPWD.appLoader.viewers.length);
		this.draggabled = false;
			
		//Dynamic css styling when an app starts		
		this.zIndex = AAPWD.appLoader.higherZ;
		
		this.left = AAPWD.appLoader.left + "px";
		this.top = AAPWD.appLoader.top + "px";
		this.height = "";
		this.width = "";
				
	},
	
		
	//Den här metoden anropas från XHR i context av current context. Refviewer som  referns :)
	updateViewer: 	function(refViewer, data){			
		AAPWD.render.appContent(refViewer, data);
	},			
};





