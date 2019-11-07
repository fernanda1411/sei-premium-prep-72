/*
Write a function called "filterEvenLengthWords".

Given an array of strings, "filterEvenLengthWords" 
returns an array containing only the elements of the 
given array whose length is an even number.
*/

function filterEvenLengthWords(words) {
    
    return words.filter(function isWordLengthEven(word){
        return word.length % 2 === 0;
    });
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']