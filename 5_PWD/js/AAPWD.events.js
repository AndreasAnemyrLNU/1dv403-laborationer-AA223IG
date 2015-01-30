"use strict";
AAPWD = AAPWD || {};
AAPWD.events = AAPWD.events || {	
		
	//Generic listener call method in moduel...
	genericListener: function(){
		document.body.addEventListener("click", this.genericListenerSwitch ,false);
	},
	
		
	genericListenerSwitch: function(e){	
	var event = e || window.event;
						
		if(event.target.className === "menu")
		{
			AAPWD.events.higherZ(event);
		};
		
		if(event.target.className === "thumbNail")
		{		
			AAPWD.module.imageViewerApp.events.loadPicture(event);
		}
					
		if(AAPWD.module.rssViewerApp.events[e.target.id.toString().replace(/[0-9]/g, '')])
		{					
			e.preventDefault();			
			AAPWD.module.rssViewerApp.events[(e.target.id.toString().replace(/[0-9]/g, ''))](e);
		};
		
		if(AAPWD.module.memoryViewerApp.events[e.target.id.toString().replace(/[0-9]/g, '')])
		{					
			e.preventDefault();			
			AAPWD.module.memoryViewerApp.events[(e.target.id.toString().replace(/[0-9]/g, ''))](e);
		};
		if(AAPWD.module.labbyViewerApp.events[e.target.id.toString().replace(/[0-9]/g, '')])
		{					
			e.preventDefault();			
			AAPWD.module.labbyViewerApp.events[(e.target.id.toString().replace(/[0-9]/g, ''))](e);
		};
		
		if(e.target.id === "formInputText")
		{
			AAPWD.module.rssViewerApp.events[e.target.id](e);
		};		
	},
	
	tmpEventData:	
	{	
		initX: null,
		initY: null,
	},
		
	switcButtonEvent: function(refViewer, dynamicAppId){
		
		var buttonClose = document.getElementById(dynamicAppId + "_buttonClose");
			buttonClose.addEventListener("click", function(){ return AAPWD.events.viewerClose(refViewer, dynamicAppId);}, false);

		//Hook buttonMinimize
		var buttonMinimize = document.getElementById(dynamicAppId + "_buttonMinimize");
			buttonMinimize.addEventListener("click", function(){ return AAPWD.events.viewerMinimize(dynamicAppId);}, false);
			
		var buttonMove = document.getElementById(dynamicAppId + "_buttonMove");
			buttonMove.addEventListener("mousedown", function(e){ 
				return AAPWD.events.dragActivated(e, refViewer, dynamicAppId);
			}, false);

		var focusDiv = document.getElementById(dynamicAppId + "_focusDiv");			
			focusDiv.addEventListener("mousemove", function(e){ 
				return AAPWD.events.dragElement(e, refViewer, dynamicAppId);
			}, false);
						
			focusDiv.addEventListener("mouseup", function(e){ 
				return AAPWD.events.dragInactivated(e, refViewer, dynamicAppId);
			}, false);
			
			focusDiv.addEventListener("mouseout", function(e){ 
				return AAPWD.events.dragInactivated(e, refViewer, dynamicAppId);
			}, false);
			
		var buttonScale = document.getElementById(dynamicAppId + "_buttonScale");
			buttonScale.addEventListener("mousedown", function(e){ 
				return AAPWD.events.scaleActivated(e, refViewer, dynamicAppId);
			}, false);
			
			buttonScale.addEventListener("mousemove", function(e){ 
				return AAPWD.events.scaleElement(e, refViewer, dynamicAppId);
			}, false);
			
			buttonScale.addEventListener("mouseup", function(e){ 
				return AAPWD.events.scaleInactivated(e, refViewer, dynamicAppId);
			}, false);
			
			buttonScale.addEventListener("mouseout", function(e){ 
				return AAPWD.events.scaleInactivated(e, refViewer, dynamicAppId);
			}, false);
	},
	
	viewerClose : function(refViewer, dynamicAppId){
		
		var appDiv = document.getElementById(dynamicAppId);	
		appDiv.classList.add("hidden");
		
		setTimeout(function(){
			appDiv.parentNode.removeChild(appDiv);	
			//Här borde instansen av aktuell applikation nolställas. Varför går den inte att "nulla"?
			refViewer = null;
		}, 3000);
	},
	
	viewerMinimize : function(dynamicAppId){
		var appDiv = document.getElementById(dynamicAppId);
		
		var div = document.createElement("DIV");
		div.classList.add("minimizedWindow");
		var workingArea = document.getElementById("workingArea");
		workingArea.appendChild(div);
		
		alert(workingArea);
		
		appDiv.classList.add("hidden");
	},
	
	dragActivated : function(e, refViewer, dynamicAppId){
		var event = e || window.event;
		event.preventDefault();	
   		var appDiv = document.getElementById(dynamicAppId);	   			
   		refViewer.draggabled = true;	
   		
   		AAPWD.events.tmpEventData.initX = event.clientX;
		AAPWD.events.tmpEventData.initY = event.clientY;
				
	},
		
	dragInactivated : function(e, refViewer, dynamicAppId){	
		var event = e || window.event;
		event.preventDefault();		
		var appDiv = document.getElementById(dynamicAppId);
		
		refViewer.draggabled = false;
		if (parseInt(appDiv.style.left) <= 0)
		{
			appDiv.style.left = 0 + "px";
		}
			
		if (parseInt(appDiv.style.top) <= 0)
		{
			appDiv.style.top = 0 + "px";
		}
					
		document.body.style.cursor = "default";			
	},
	
	dragElement: function(e, refViewer, dynamicAppId){	
		var event = e || window.event;		
		event.preventDefault();
		var appDiv = document.getElementById(dynamicAppId);
				
		document.body.style.cursor = "move";
						
		if(refViewer.draggabled)
		{	
			var diffX = AAPWD.events.tmpEventData.initX - event.clientX;
			var diffY = AAPWD.events.tmpEventData.initY - event.clientY;		
			
			if (parseInt(appDiv.style.left) >= 0)
			{
				appDiv.style.left = parseInt(appDiv.style.left) - diffX +"px";
			}
			else
			{
				appDiv.style.left = 0 + "px";
			};
						
			if (parseInt(appDiv.style.top) >= 0)
			{
				appDiv.style.top = parseInt(appDiv.style.top) - diffY +"px";
			}
			else
			{
				appDiv.style.top = 0 + "px";
			};
			

			if(refViewer.width === "")
			{
				refViewer.width = 480;
			};			
			
			if(refViewer.width + parseInt(appDiv.style.left) >= window.innerWidth){
				appDiv.style.left = window.innerWidth - refViewer.width + "px";
			}
			
			console.log("Height " + refViewer.height);
			
			//SKa fixa ett stopp i botten också
			if(refViewer.height === "")
			{
				refViewer.height = 570;
			};
			
			if(refViewer.height + parseInt(appDiv.style.top) >= window.innerHeight){
				appDiv.style.top = window.innerHeight - refViewer.height + "px";
			}
			
			
				
			AAPWD.events.tmpEventData.initX = event.clientX;
			AAPWD.events.tmpEventData.initY = event.clientY;
		};
	},
	
	scaleActivated : function(e, refViewer, dynamicAppId){
		var event = e || window.event;
		event.preventDefault();	
   		var appDiv = document.getElementById(dynamicAppId);
   		   			
   		refViewer.draggabled = true;
   		
   		AAPWD.events.tmpEventData.initX = event.clientX;
		AAPWD.events.tmpEventData.initY = event.clientY;		
	},
		
	scaleInactivated : function(e, refViewer, dynamicAppId){	
		var event = e || window.event;
		event.preventDefault();		
		var appDiv = document.getElementById(dynamicAppId);

		appDiv.style.width = refViewer.width + "px";

		refViewer.draggabled = false;	
		document.body.style.cursor = "default";				
	},
	
	scaleElement: function(e, refViewer, dynamicAppId){	
		var event = e || window.event;		
		event.preventDefault();
		var appDiv = document.getElementById(dynamicAppId);
				
		document.body.style.cursor = "nwse-resize";
		
		var appDivId = dynamicAppId + "_" + refViewer.app;
		var currAppId = document.getElementById(appDivId);	
										
		if(refViewer.draggabled)
		{		
		
					console.log("yes");
									
			var diffX = AAPWD.events.tmpEventData.initX - event.clientX;
			var diffY = AAPWD.events.tmpEventData.initY - event.clientY;		

			//It's not possible to get value from with!. It's hardcoded with!!!!			
			if(appDiv.style.width === "")
			{				
				appDiv.style.width = "480px";
				appDiv.style.height = "570px";	
								
				currAppId.style.width = "450px";
				currAppId.style.height = "450px";					
			}
			else
			{
				
				if(parseFloat(appDiv.style.width) < 200)
				{
					appDiv.style.width = "200px";
					appDiv.style.height = "280px";
				};
				
				
				if(parseFloat(appDiv.style.width) >= 200){
				
					var xFactor = parseFloat(appDiv.style.width, 1) / 482;
					var yFactor = parseFloat(appDiv.style.height, 1) / 590;		
				
				currAppId.style.transform =	"scale(" + xFactor + ")";
				currAppId.style.transformOrigin = "top left";	
						
				appDiv.style.width = parseInt(appDiv.style.width) - diffX +"px";
				//Pga logikfel skicka jag aktuell width på appDiv till refViewer.width. Beräkna drag/stop ned och höger!
				refViewer.width = parseInt(appDiv.style.width);
				appDiv.style.height = parseInt(appDiv.style.height) - diffX +"px";	
				refViewer.height = parseInt(appDiv.style.height);		
				};										
			};
			
									
			AAPWD.events.tmpEventData.initX = event.clientX;
			AAPWD.events.tmpEventData.initY = event.clientY;
		};
	},
	
	higherZ: function(e){	
		var parsedInstanse = (e.target.id.replace(/\D/g, '')); 
		AAPWD.appLoader.higherZ += 1;
		AAPWD.appLoader.viewers[parsedInstanse].refAppDiv.style.zIndex = AAPWD.appLoader.higherZ ;
		AAPWD.appLoader.viewers[parsedInstanse].refAppDiv.classList.toggle("active");
	},
	
	
	
	
	
	
	
};