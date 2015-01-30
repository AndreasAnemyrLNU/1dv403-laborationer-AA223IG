"use strict";
AAPWD = AAPWD || {};
AAPWD.core = AAPWD.core || {

	Menu: function(menu, refViewer){
	
	this.menu = {
					className:	menu.className,
					links:		menu.links,
					instanseNr:	refViewer.instanseNr,
				},
	
		console.log(this.instanseNr);
	
	},
	
};
	
//refViewer. Index as param need to capure ref to current Viewer et
//set id of menuDiv to use later...
	
AAPWD.core.Menu.prototype.render = function(refViewer){
	var menuDiv = document.createElement("DIV");
	menuDiv.id = this.menu.className + "_" + refViewer.dynamicAppId;
	
	menuDiv.classList.add(this.menu.className);
		
	this.menu.links.forEach(function(link){
				
		var divLinkList = document.createElement("DIV");
		divLinkList.classList.add(link.id);
		menuDiv.appendChild(divLinkList);
		var form = document.createElement("FORM");
		form.id = link.formId + "_"+ refViewer.instanseNr;
		divLinkList.appendChild(form);
		var a = document.createElement("A");
		a.href = link.href;
		a.id = link.id + "_"+ refViewer.instanseNr;
		a.textContent = link.name;
		form.appendChild(a);
		
		if(link.list && link.type === "radio")
		{
			link.list.forEach(function(list){
				
				var label = document.createElement("LABEL");
				label.setAttribute("for", list.name);
				label.innerHTML = list.name;
				
	
				var input = document.createElement("INPUT");
				input.innerHTML = list.name;
				input.name = "family";
				input.type = "radio";
				input.value = list.href;
				form.appendChild(input);
				form.appendChild(label);
					
			});
			
		//Rendering textbox	...
			var inputText = document.createElement("INPUT");
			inputText.id = "formInputText";
			inputText.type = "text";
			inputText.value = "Valfri input...";
			form.appendChild(inputText);
			
			var button = document.createElement("BUTTON");
			button.innerHTML = "Välj";
			button.id = link.buttonId + "_"+ refViewer.instanseNr;
					
			form.appendChild(button);
		}
		
		//Rendering if of type select... Refactioring here more generic function instead
		if(link.list && link.type === "select"){					
			var selectList = link.list.map(function(link){			
				return "<option value=\"" + link.option + "\"\>" + link.option + "</option>";
			});	
			form.innerHTML += "<select>" + selectList.join("") + "<\select>";		
				
			var button = document.createElement("BUTTON");
			button.innerHTML = link.button;
			button.id = link.buttonId + "_"+ refViewer.instanseNr;
					
			form.appendChild(button);
		
		};
		
		//Rendering if of type number... Refactioring here more generic function instead
		if(link.list && link.type === "number"){					

			form.innerHTML += "<input type=\"number\" name=\"quantity\" min=\"1\" max=\"5\">";		
			
			var button = document.createElement("BUTTON");
			button.innerHTML = link.button;
			button.id = link.buttonId + "_"+ refViewer.instanseNr;
					
			form.appendChild(button);
		
		};
		
		
		
	});	
	
	return menuDiv;
};


