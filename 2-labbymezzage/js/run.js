"use strict";


var run = {
    
    messages:   [],
    
    init:       function(){
        
        var mess = new Message("Testmeddelande", new Date());
        alert(mess);
        alert(mess.getText());
        mess.setText("En annan text");
        alert(mess);
        
    }
    
};


window.onload = run.init;