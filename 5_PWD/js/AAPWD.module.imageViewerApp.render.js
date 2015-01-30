"use strict";
AAPWD = AAPWD || {};
AAPWD.module = AAPWD.module || {};
AAPWD.module.imageViewerApp = AAPWD.module.imageViewerApp || {};
AAPWD.module.imageViewerApp.render = AAPWD.module.imageViewerApp.render || {
	
		init: function(refViewer, data, e){
		

				
		if(!e)
		{	
			document.getElementById("dynamicAppId_"+refViewer.instanseNr+"_buttonMove").classList.add("imageIcon");
			
			document.querySelector("#statusBox_" + refViewer.instanseNr).innerHTML = data.length + " bilder finns i systemet...";
			
			//Generalisera den här också eventuellt
			var dynamicArea = document.getElementById(refViewer.dynamicAppId);
			
			var appDiv = document.createElement("DIV");
				appDiv.classList.add(refViewer.app);
				appDiv.setAttribute("id", refViewer.dynamicAppId + "_" + refViewer.app);
			
			dynamicArea.appendChild(appDiv);
			//Det här är inte DRY!
							
			var imgElementArr = AAPWD.module.imageViewerApp.render.imgThumbsElementRender(refViewer, data);		
			AAPWD.module.imageViewerApp.render.appendImgElements(refViewer, imgElementArr);
			
			var imgs = document.querySelectorAll("img");
		
			console.log(imgs);
				
			//for(var i = 0; i < imgs.length; i++)
			//{
			//	imgs[i].onclick.parentNode = document.addEventListener("click",
			//	AAPWD.module.imageViewerApp.events.changeBackGround, false);
			//}
			
			
			
		}
		else
		{
			console.log(data);
			//ImageViewer PageLoaader...
			document.getElementById("dynamicAppId_"+refViewer.instanseNr+"_buttonMove").classList.add("labbyIcon");
			var appDiv = document.getElementById("dynamicAppId_" + refViewer.instanseNr);
			appDiv.style.width = data.width + "px";
			appDiv.style.height = data.height + "px";
			appDiv.style.background = "url(" + data.URL + ")";
			var status = document.getElementById("statusBox_" + refViewer.instanseNr).innerHTML = data.URL;
			
			
			
		}	
		
		
	},
	
	//This method creates en element of type img and returns an array of imgs
	imgThumbsElementRender: function(refViewer, imgData){
		
		//console.log(imgData);
		var i = 0;
		var imgElementArr = [];
		imgData.forEach(function(data){
					
			imgElementArr.push(document.createElement("IMG"));		
			var currentImg = imgElementArr[imgElementArr.length -1];

			currentImg.ref = currentImg;	
			currentImg.src = data.thumbURL;					
			currentImg.classList.add("thumbNail");				
			currentImg.Height = data.thumbHeight;
			currentImg.id = "refViewer" + refViewer.instanseNr + "|index_" + i;
			currentImg.Width = data.thumbWidth;	
			
			var loadDiv = document.createElement("DIV");
			loadDiv.classList.add("loadDiv");
			loadDiv.innerHTML = "Bakgrund";				
			i++;
			
			
		});
	refViewer.imgElementArr = imgData;
	return imgElementArr;
	
	},
	
	//This method "outputting" an array of img elements from an "array" (imgElementArr)
	appendImgElements: function(refViewer, imgElementArr){
		
		var appArea = document.getElementById(refViewer.dynamicAppId + "_" + refViewer.app);		
		imgElementArr.forEach(function(imgElement){				
			var a = document.createElement("A");			
				a.setAttribute("href", "#");
			a.appendChild(imgElement);		
			appArea.appendChild(a);
		});		
	},		
};









