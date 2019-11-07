/*
Write a function called "getLongestElement".

Given an array, "getLongestElement" returns the longest string in the given array.

Notes:

If there are ties, it returns the first element to appear.
If the array is empty, it should return an empty string.
*/

function getLongestElement(arr) {
    
    if (!Array.isArray(arr) || arr.length === 0) { 
    return '';
        
    }
    
    let longestWord = arr[0]; 
    
    for(let i = 0; i <arr.length; i++) {
        
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i]; 
        }
    }
    return longestWord; 
}

var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'