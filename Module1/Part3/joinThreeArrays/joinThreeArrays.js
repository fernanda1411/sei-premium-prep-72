/*
Write a function called "joinThreeArrays".

Given three arrays, "joinThreeArrays" returns an 
array with the elements of "arr1" in order followed 
by the elements in "arr2" in order followed by the elements of "arr3" in order.

You should be familiar with the "concat" method for this problem.
*/

function joinThreeArrays(arr1, arr2, arr3) {
    return arr1.concat(arr2, arr3);
}

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]
