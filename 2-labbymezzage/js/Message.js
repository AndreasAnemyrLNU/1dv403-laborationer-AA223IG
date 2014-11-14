"use strict";

//Start - Message constructor***************************\\

function Message(message, date){
    
    this.getText = function(){
        return message;
    };
    
    this.setText = function (_text){
        message = _text;
    };
    
}

//*****************************Message constructor - End\\
//******************************************************\\
//Start - Message.prototype*****************************\\

Message.prototype.toString = function(){
    return this.getText()+" ("+this.getDate()+")";
};

Message.prototype.getText = function(){
    alert("getText in Message not implemented!");
};

Message.prototype.setText = function(){
    alert("setText in Message not implemented!");
};

Message.prototype.getDate = function(){
    alert("getDate in Message not implemented!");
};

Message.prototype.setDate = function(){
    alert("setDate in Message not implemented!");
};

Message.prototype.HTMLText = function(){
    alert("getHTMLText in Message not implemented!");
};

//***********************Start - Message.prototype - End\\