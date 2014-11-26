"use strict";

var makePerson = function(persArr){

//START - CHECK FOR ERRORS OF OBJECTARRAY persArr**\\
//*************************************************\\
//*************************************************\\
//START test of obj.age****************************\\
persArr.forEach(function(item, index, array){
    try
    {
        if(!(typeof item.age === 'number' && item.age % 1 === 0))
        {
            throw "Error! obj.age is not of type int";
        }
    }
    catch(err)
    {
        console.log(err);
    }
});
//*****************************END test of obj.age\\
//************************************************\\
//START test of obj.name**************************\\
persArr.forEach(function(item, index, array){
    try
    {
        if(typeof item.name !== 'string')
        {
            throw "Error! obj.name is not of type string";
        }
    }
    catch(err)
    {
        console.log(err);
    }
});
//*****************************END test of obj.name\\
//*************************************************\\
//END - CHECK FOR ERRORS OF OBJECTARRAY persArr****\\


        var calcMaxAge = function(persArr){
        
        var arrayOfAges = [];    
        
            persArr.forEach(function(item){
                        arrayOfAges.push(item.age);
            });
            
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
        return Math.max.apply(null, arrayOfAges);
        
        };
//*************************************************    
        var calcMinAge = function(persArr){
        
        var arrayOfAges = [];

            persArr.forEach(function(item){
                arrayOfAges.push(item.age);
            });
        
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max        
        return Math.min.apply(null, arrayOfAges);
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
        // Old solution....
        // var names = function(persArr){
        //     result = [];
        //     persArr.forEach(function(item){
        //         result.push(item.name);
        //     });
            
            
        var names = function(persArr){
            result = [];
            result = persArr.map(function(person){
                return person.name;
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

function Person(name, age){
    this.name = name;
    this.age = age;
}

// Create Obj-array with constructor Person. Test...
//var data =  [   
//                new Person("John Häggerud",37),
//                new Person("Johan Leitet",36),
//                new Person("Mats Loock",46)
//            ];

console.log(data);


var data = [{name: "John Häggerud", age: 37}, 
            {name: "Johan Leitet", age: 36}, 
            {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);

