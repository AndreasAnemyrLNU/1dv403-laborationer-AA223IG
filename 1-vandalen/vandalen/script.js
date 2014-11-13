"use strict";

var makePerson = function(persArr){

    var calcMaxAge = function(persArr){
        
    var arrayOfAges = [];    
    var MaxAge;  
        
        persArr.forEach(function(item){
            arrayOfAges.push(item.age);
        });
        
    arrayOfAges.sort();
    MaxAge = arrayOfAges[arrayOfAges.length -1];
    return MaxAge;   
        
    };
    var calcMinAge = function(persArr){
        return 360;
    };

    var calcAverageAge = function(persArr){
        
    };
    
    var names = function(persArr){
        result = [];
        persArr.forEach(function(item){
            result.push(item.name);
        });
    //stackoverflow.com/questions/14528998/is-there-any-javascript-library-with-implementations-of-sort-methods-for-alphabe
    result = result.sort(function(a,b){return a.localeCompare(b)});
    result = result.join(", ");
    return result;
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

