/*
Write a function called "filterOddLengthWords".

Given an array of string, "filterOddLengthWords" 
returns an array containing only the elements of 
the given array whose lengths are odd numbers.
*/

/*

Write a function called "filterOddLengthWords".

- Given an array of string, 
- "filterOddLengthWords" returns an array 
- returns an array  containing only the elements of the given array 
- whose lengths are odd numbers.

*/

function filterOddLengthWords(words) {
    
    function isWordLenghtOdd(word) {
        const isOdd = word.length % 2 === 1;
        return isOdd;
    }
    
    return words.filter(isWordLenghtOdd);
    
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']