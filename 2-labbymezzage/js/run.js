"use strict";


var run = {
    
    messages:   [],
    
    init:       function(){
    
    
    var submit = document.getElementById("submit");
    submit.addEventListener("click", run.createMessage, false);  
    },
    
    createMessage:  function(){
    run.messages.push(new Message( document.getElementById("messageInputArea").value , new Date()));
    console.log(run.messages[0].toString());
    },
    
};

window.onload = run.init;
