/*
Write a function called "getLargestElement".

Given an array, "getLargestElement" returns the largest number in the given array.

Notes:

It should return 0 if the array is empty.
*/

function getLargestElement(arr) {
    let largest = arr[0];
    
    if(arr.length < 1){
        return 0;
    }
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;