/*
Write a function called "filterEvenElements".

Given an array of numbers, "filterEvenElements" 
returns an array containing only the even numbers of the given array.
*/

function filterEvenElements(arr) {
    let even = [];
   
    for(let i = 0; i < arr.length; i++ ) {
        if(arr[i] % 2 === 0 ) {
        even.push(arr[i]);
        }
    }
    return even;

}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]