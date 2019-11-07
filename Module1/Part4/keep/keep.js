/*
Write a function called "keep".

Given an array and a keeper element, "keep" returns 
an array containing the items that match the given keeper element.

Notes:

If no elements match, "keep" should return an empty array.
*/

function keep(array, keeper) {
    const keepArray = [];
  
    for (let i = 0; i < array.length; i++ ){
        if ( array[i] === keeper ){
        keepArray.push(array[i]);
        }
  }
  return keepArray;
}

var output = keep([1, 2, 3, 2, 1], 2)
console.log(output); --> [2, 2]