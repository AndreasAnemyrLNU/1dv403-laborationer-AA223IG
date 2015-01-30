"use strict";
AAPWD = AAPWD || {};
AAPWD.module = AAPWD.module || {};
AAPWD.module.rssViewerApp = AAPWD.module.rssViewerApp || {};
AAPWD.module.rssViewerApp.conf = AAPWD.module.rssViewerApp.conf || {
	
	XHR:	
	{
		active:	true,
		json:	false,
		url:	[
					"http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt"),
					"http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.aftonbladet.se/nyheter/rss.xml"),
					"http://images.apple.com/main/rss/hotnews/hotnews.rss",
				],
		method:	"GET",
	},
	
	rssMenu:
	{	
		className: 	"rssMenu",
		id:		 	"rssMenuId",		
		links: 		[
//**************************************************
						{ 
						button: "Ändra",
						buttonId: "rssMenuSrcButtonId",
						formId: "rssMenuSrcFormId",				
						href: "#", 
						id: "rssMenuSrcTitleId", 
						list:  [
								{	
								name: "DN",
								href: "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.dn.se/m/rss/senaste-nytt")
								},
								{	
								name: "Aftonbladet",
								href: "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://www.aftonbladet.se/nyheter/rss.xml"),
								},									{	
								name: "Apple Hotnews",
								href: "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url="+escape("http://images.apple.com/main/rss/hotnews/hotnews.rss"),
								}
								],
						name: "Källa",
						type: "radio"   
						},
//***************************************************											
						{ 
						button: "Ändra",
						buttonId: "rssMenuUpdateIntervalButtonId",
						formId: "rssMenuUpdateIntervalFormId",			
						href: "#", 
						id: "rssMenuUpdateIntervalId",
						list: 	[	
								{option: "1 minuter"},
								{option: "2 minuter"},	
								{option: "3 minuter"},
							  	{option: "4 minuter"},
							  	{option: "5 minuter"},
							  	{option: "6 minuter"},
							  	{option: "Avsluta"},
								],
						name: "Uppdateringsintervall",
						type: "select"
						},
//***************************************************						
						{
						formId: "rssMenuUpdatedId",
						href: "#", 
						id: "rssMenuUpdateId",
						name: "Uppdatera nu",
						},
					]
	}
	
};


