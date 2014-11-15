"use strict";


var run = {
    
    init:       function(){
        
    var messages = [];
        
    //Skapar eventlyssnare för submitknappen.... 
    var submit = document.getElementById("submit");
    submit.addEventListener("click", createMessage, false);  
    
    function createMessage(){
        messages.push(new Message( document.getElementById("messageInputArea").value , new Date()));
        console.log(messages[0].toString);
    }
    
        
        
        //var mess = new Message("Testmeddelande", new Date());
        //alert(mess);
        //alert(mess.getText());
        //mess.setText("En annan text");
        //alert(mess);
        
    }
    
};


window.onload = run.init;