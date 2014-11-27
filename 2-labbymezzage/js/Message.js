"use strict";

//Start - Message constructor***************************\\

function Message(message, date){
    
    this.getText = function(){
        return message;
    };
    
    this.setText = function (_text){
        message = _text;
    };
    
    this.getDate = function(){
        return date;
    };
    
    this.setDate = function (_date){
        message = _date;
    };
    

    
}

//*****************************Message constructor - End\\
//******************************************************\\
//Start - Message.prototype*****************************\\

Message.prototype.toString = function(){
    return this.getText()+" ("+this.getDate()+")";
};

Message.prototype.HTMLText = function(){
    alert("getHTMLText in Message not implemented!");
};

//***********************Start - Message.prototype - End\\