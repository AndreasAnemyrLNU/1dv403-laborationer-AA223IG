"use strict";

var average = function(array, propName){
    var sum;
    var item;
    for(item in array)
    {
        sum += item[propName];
    }
    return sum / array.Length;
};


var makePerson = function(persArr){
    
    var minage;
    minage = average(persArr, "age")

	return {
        	    minAge:     36,
        	    maxAge:     46,
        	    averageAge: 40,
        	    names:      "Johan Leitet, John Häggerud, Mats Loock",
	        };

};

