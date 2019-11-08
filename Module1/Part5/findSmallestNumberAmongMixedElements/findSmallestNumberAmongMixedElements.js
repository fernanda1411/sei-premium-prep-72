/*
Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" 
returns the smallest number within the given array.

Notes:

If the given array is empty, it should return 0.
If the array contains no numbers, it should return 0.
*/

function findSmallestNumberAmongMixedElements(arr) {
    let smallestNum;
    
    for (let i = 0; i < arr.length; i++ ) {
    
        if (typeof arr[i] === "number") {
            if (smallestNum === undefined) {
                smallestNum = arr[i];
            } else if (smallestNum > arr[i]) {
                smallestNum = arr[i];
            }
        }
        
    }
    
    if (!smallestNum || arr.length === 0) {
        smallestNum =  0;
    }
    
    return smallestNum;
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4