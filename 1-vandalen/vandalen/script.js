"use strict";

var makePerson = function(persArr){

    var calcMaxAge = function(persArr){
        return 46;
    };
    var calcMinAge = function(persArr){
        return 36;
    };

    var calcAverageAge = function(persArr){
        return 40;
    };
    
    var names = function(persArr){
        result = [];
        persArr.forEach(function(item){
            result.push(item.name);
        });
    return result
    };

    return  {
                averageAge: calcAverageAge(persArr),
                maxAge:     calcMaxAge(persArr),
                minAge:     calcMinAge(persArr),
                names:      names(persArr)
            };


};

var data = [{name: "John Häggerud", age: 37}, 
            {name: "Johan Leitet", age: 36}, 
            {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);

