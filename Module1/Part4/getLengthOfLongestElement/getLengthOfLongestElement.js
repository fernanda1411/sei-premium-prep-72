/*
Write a function called "getLengthOfLongestElement".

Given an array, "getLengthOfLongestElement" returns 
the length of the longest string in the given array.

Notes:

It should return 0 if the array is empty.
*/

function getLengthOfLongestElement(arr) {
    
    let longestLength = 0;

    for(let i = 0; i < arr.length; i++){
        
        const currentElLength = arr[i].length;
    
        if(currentElLength > longestLength){
            longestLength = currentElLength;
        }
    }
    
    return longestLength;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5