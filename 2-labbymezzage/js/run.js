"use strict";

var run = {

    messages:   [],

    messagesLength: function(){
        return this.messages.length;
    },

    addMessage: function(e){  
        
        if(run.value() !== "" && run.value() !== "Här kan du skriva ett meddelande!")
        {
            e.preventDefault();
            run.popArr(run.messages, run.value());
            run.renderMessage(run.messages[run.messages.length - 1]);
            run.updateNrOfMsgs(); 
            run.cssSelector("textarea").value = "";
        }
        else{
            //Alert är endast för logiken tillsvidare. Ersätt...
            
            alert("Du glömde att skriva?");
        }

    },
    countNotUndefinedMessages: function(){
        var nrOfMsgs = this.messages.filter(function(message){      
            return message !== "undefined";
        });
        return "Antal Meddelande: " + nrOfMsgs.length;
    },
    cssSelector: function(cssSelector){
        return document.querySelector(cssSelector);
    },
    date: function(){
        return new Date();
    },
    init: function()
    {    
        this.cssSelector("#submit").addEventListener("click", this.addMessage, false); 

        this.cssSelector("textarea").addEventListener("keypress", function(e){
            
            if(!e) var e = window.event;          
            

            if(e.keyCode === 13 && e.shiftKey)
            {

            }
            else if(e.keyCode === 13)
            {
                run.addMessage(e);
            }



            console.log(e.keyCode);
        } 
        ,false)

     },
    //populate array messages
    popArr: function(arr, value){
        arr.push(new Message(this.value(), this.date(), this.messagesLength()));
    }, 

    rmArr: function(arr, index){      
        delete arr[index];
        this.updateNrOfMsgs();
    },
    rmMessage: function(e){
        if(confirm("Vill du verkligen radera meddelandet?"))
        {
            e.preventDefault();
            //först sätta array till undefined
            run.rmArr(run.messages, this.parentDiv.id.substr(1));
            //Denna kod ska selectera på id. Koden fungerar
            //men nu ska man få tag i AKTUELLT id på elementet!!!!     
            console.log(typeof this.parentDiv.id);
            var parent = this.parentDiv.parentNode;
            parent.removeChild(this.parentDiv);
        };
    },
    removeDomElement: function(css){
        css.removeChild(byId);
    },
    renderBtn: function(element, innerHTML, parentReference){
        var element = document.createElement(element);
        element.parentDiv = parentReference || null;
        element.href = "#";
        element.innerHTML = innerHTML; 
        return element   
    },
    renderMessage: function(message){
        var childDiv = document.createElement("div");
        childDiv.setAttribute("id", "_" + (run.messages.length - 1));
        childDiv.classList.add("listBox");
        
        var p = document.createElement("p");
        childDiv.appendChild(p);
        //Create DOM nodes for message.getDate()
        var pDate = document.createElement("p")
        pDate.classList.add("pDate");
        childDiv.appendChild(pDate);
        var dateText = document.createTextNode(message.getDate());
        pDate.appendChild(dateText);
        //Create DOM nodes for Delete
        var aDelete = this.renderBtn("a","", childDiv)      
        aDelete.addEventListener("click", this.rmMessage, false)
        childDiv.appendChild(aDelete);

        var aTime = this.renderBtn("a","", childDiv) 

        var deleteImg = document.createElement("img"); 
        deleteImg.classList.add("imgDelete");
        aDelete.appendChild(deleteImg);
        var timeImg = document.createElement("img");
        timeImg.classList.add("imgTime");
        aTime.appendChild(timeImg);

        //Ska koppla en addEventListener för det här skapade objektet!
        //Här sks jag försöka att läsa ut aktuellt message datum då det skapades.
        //Problemet är  om jag ska skapa en metod. Hur får jag tag i värdet då?
        //Aktuell instans vid skapandet kan jag behålla den? Svaret på det här 
        //problemet var att skapa en anonym funktion. Fördelen med det var att jag kunde
        //använda mig av argumentet message i DEN HÄR funktionens argument!!!

        aTime.addEventListener("click", function()
        {
            return run.renderTimeStamp(message);
        }
        , false)
    
        childDiv.appendChild(aTime);

        var pMessagetext = document.createTextNode(message.getHTMLText());
        p.innerHTML = pMessagetext.nodeValue;
        
        var parentDiv = this.cssSelector("#msgsDiv");
        parentDiv.appendChild(childDiv);

    },
    renderTimeStamp: function(message){
        alert(message.getDate());
    },
    updateNrOfMsgs: function(){
        this.cssSelector("#nrOfMsgs").innerHTML = this.countNotUndefinedMessages();
    },
    value: function(){
        return this.cssSelector("textarea").value
    }


};




window.onload = function(){
    run.init();
};
