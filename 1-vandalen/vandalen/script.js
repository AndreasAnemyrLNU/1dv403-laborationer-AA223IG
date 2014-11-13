"use strict";

var makePerson = function(persArr){
//*************************************************
        var calcMaxAge = function(persArr){
        
        var arrayOfAges = [];    
        var maxAge;  
        
            persArr.forEach(function(item){
                try
                {
                    if(typeof item.age === 'number' && item.age % 1 === 0)
                    {
                        arrayOfAges.push(item.age);
                    }
                    else{
                        throw "Fel! obj.age av annan typ än int";
                    }
                }
                catch(err)
                {
                    console.log(err);
                }
            });
            
        arrayOfAges.sort();
        maxAge = arrayOfAges[arrayOfAges.length -1];
        
        return maxAge;   
        };
//*************************************************    
        var calcMinAge = function(persArr){
        
        var arrayOfAges = [];
        var minAge;
        
            persArr.forEach(function(item){
                arrayOfAges.push(item.age);
            });
        
        arrayOfAges.sort();
        minAge = arrayOfAges[0];
        
        return minAge;
        };
//*************************************************
        var calcAverageAge = function(persArr){
        
        var count = 0; 
        var sum = 0;
        var averageAge;
            
            persArr.forEach(function(item){
                sum += item.age;
                count++;
            });
        
        averageAge = sum / count;

        return Math.round(averageAge);        
        };
//*************************************************        
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
//*************************************************
    return{
                averageAge: calcAverageAge(persArr),
                maxAge:     calcMaxAge(persArr),
                minAge:     calcMinAge(persArr),
                names:      names(persArr)
            };
};
//*************************************************
//*************************************************
var data = [{name: "John Häggerud", age: 37.6}, 
            {name: "Johan Leitet", age: 36}, 
            {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);

