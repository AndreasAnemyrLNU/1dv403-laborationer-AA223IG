"use strict";


var makePerson = function(persArr){
    
    var averageAge = function(persArr)
    {
            var person;
            var sum = 0;
            for(person in persArr)
            {
                if(typeof +persArr[person].age === 'number')
                {
                    sum = sum + persArr[person].age;
                }
                else
                {
                    throw "Ålder kan inte tolkas som en tal skrivet med siffror!";
                }
            }
            return Math.round(sum / persArr.length);   
    };
    
    return {averageAge: averageAge(persArr)};

};

var data = [{name: "John Häggerud", age: 37}, 
            {name: "Johan Leitet", age: 36}, 
            {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);

