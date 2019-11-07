/*
Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns 
the length of the shortest string in the given array.

Notes:

It should return 0 if the array is empty.
*/

function getLengthOfShortestElement(arr) {
    let shortest = arr[0];
  
    if (arr.length < 1 ) {
        return 0;
    }
  
    for(let i = 0; i < arr.length; i++ ) {
        if (arr[i].length < shortest.length ) {
        shortest = arr[i];
    }
  }

    return shortest.length;
}

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3