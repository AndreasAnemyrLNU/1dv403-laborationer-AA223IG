"use strict";
AAPWD.XHR = AAPWD.XHR || {
	
	
	//Metoder open och send jobbar mot de sista positionerna i arrayen XHR
	//Referens till objekt som skapats. Här samlas mångar referenser. Hur aktiverar man rätt sedan är en fråga!
	XHRS: [],
		
	newXHR: function(refViewer, method, url){	

			var that = this;	
			this.XHRS.push(new XMLHttpRequest());				
			
			//Current XHR used in in onreadystatechange
			var currXHR = this.XHRS[this.XHRS.length -1];
			refViewer.refXHR = currXHR;
						
			currXHR.onreadystatechange = function(){
				
			if(currXHR.readyState === 4 && currXHR.status === 200)
				{
					

					
					var responseData = currXHR.responseText;
					

									
					if(refViewer.conf.XHR.json)
					{		
						AAPWD.appLoader.updateViewer(refViewer, JSON.parse(responseData));	
					}
					else if(refViewer.conf.XHR.xml)
					{											
						AAPWD.appLoader.updateViewer(refViewer, responseData);						
					}
					else
					{
						AAPWD.appLoader.updateViewer(refViewer, responseData);	
					}
					
									
				};
			};			
			//Här konfigureras aktuellt xhrobjekt baserat på den sista platsen i arrayen
			this.open(currXHR, method, url);
			this.send(currXHR);		
			},		
			
	open: 	function(currXHR, method, url){							
			currXHR.open(method, url ,true);							
			},	
	
	send: 	function(currXHR){							
			currXHR.send(null);				
			},
		
	// Verkar inte behövas för projektet!		
	//setRequestHeader:	function(currXHR){
	//					currXHR.setRequestHeader("Content-Type", "json");
	//					},			
};





