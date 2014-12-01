"use strict";

//Start - Message constructor***************************\\

function Message(message, date, id){

    this.getText = function(){
        return message;
    }; 
    this.setText = function (_text){
        message = _text;
    }; 
    this.getDate = function(){

        function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
        }

        return addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds());
    }; 
    this.setDate = function (_date){
        message = _date;
    };
    this.getID = function(){
        return id;
    }



    

    
}





//*****************************Message constructor - End\\
//******************************************************\\
//Start - Message.prototype*****************************\\

Message.prototype.toString = function(){
    return this.getText()+" ("+this.getDate()+")";
};

Message.prototype.getHTMLText = function(){
    return this.getText().replace(/[\n\r]/g, "<br />");
};
Message.prototype.timeStamp = function(){
    alert(this);
};

//***********************Start - Message.prototype - End\\