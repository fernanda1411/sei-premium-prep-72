/*
Complete a function called removeFromFront. 
Given an array, removeFromFront returns the input array 
with its first element removed. You should be familiar with 
the Array method shift.
*/

function removeFromFront(arr) {
    arr.shift();
    return arr;
}

var output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]