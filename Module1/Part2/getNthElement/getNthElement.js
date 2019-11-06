/*
Write a function called "getNthElement".

Given an array and an integer, "getNthElement" 
returns the element at the given integer, within the given array.

Notes:
If the array has a length of 0, it should return 'undefined'.

*/

function getNthElement(array, n) {
    return array[n];
}

var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3