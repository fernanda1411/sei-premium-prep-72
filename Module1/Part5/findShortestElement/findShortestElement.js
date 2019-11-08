/*
Write a function called "findShortestElement".

Given an array, "findShortestElement" returns the 
shortest string within the given array.

Notes:

If there are ties, it should return the first element to appear.
If the given array is empty, it should return an empty string.
*/

/*

- Write a function called "findShortestElement".
- Given an array


parameters: array

output: the shortest string within the given array.
*/

function findShortestElement(arr) {
  // find the shortest string within the given array
  // If there are ties, it should return the first element to appear.
  // If the given array is empty, it should return an empty string.

  let smallestString = "";

  arr.forEach(function(str) {
    if (!smallestString.length) {
      smallestString = str;
    }

    if (str.length < smallestString.length) {
      smallestString = str;
    }
  });

  return smallestString;
}

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
