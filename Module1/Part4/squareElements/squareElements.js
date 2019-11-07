/*
Write a function called "squareElements". 
Given an array of numbers, "squareElements" 
should return a new array where each element is 
the square of the element of the given array.
*/

function squareElements(arr) {
    let square = [];
    
    for(let num = 0; num < arr.length; num++){
        square.push(arr[num] * arr[num]);
    }
    
    return square;
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
