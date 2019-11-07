/*
Write a function called "removeOddValues".

Given an object, "removeOddValues" removes any 
properties whose values are odd numbers.
*/

function removeOddValues(obj) {
    for(let key in obj){
        if(obj[key] % 2 !== 0){
            delete obj[key];
        }
    }
}

var obj = {
    a: 2,
    b: 3,
    c: 4
  };
  removeOddValues(obj);
  console.log(obj); // --> { a: 2, c: 4 }