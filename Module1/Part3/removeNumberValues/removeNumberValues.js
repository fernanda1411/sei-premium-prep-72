/*
Write a function called "removeNumberValues".

Given an object, "removeNumberValues" removes any 
properties whose values are numbers.
*/

function removeNumberValues(obj) {
    for(let key in obj){
        if(typeof obj[key] === 'number'){
            delete obj[key];
        }
    }
}

var obj = {
    a: 2,
    b: 'remaining',
    c: 4
  };
  removeNumberValues(obj);
  console.log(obj); // --> { b: 'remaining' }