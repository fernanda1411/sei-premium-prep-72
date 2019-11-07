/*
Write a function called "countNumberOfKeys".

Given an object, "countNumberOfKeys" returns 
how many properties the given object has.
*/

function countNumberOfKeys(obj) {
    let count = 0;
    for(let key in obj){
        count++;
    }
    return count;
}

var obj = {
    a: 1,
    b: 2,
    c: 3
  };
  var output = countNumberOfKeys(obj);
  console.log(output); // --> 3