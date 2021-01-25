/*
Complete a function that takes in one parameter, an object. 
Your function should iterate over the object, and log the values to the console. 
Your function need not return anything.

NOTE: DO NOT USE Object.keys, or Object.values in your solution.
*/

function iterateOverObject(obj) {
    for (let parameter in obj) {
      console.log(obj[parameter]);
    }
   
}    