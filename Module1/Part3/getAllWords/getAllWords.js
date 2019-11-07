/*
Write a function called "getAllWords".

Given a sentence, "getAllWords" returns an array 
containing every word in the sentence.

Notes:
If given an empty string, it should return an empty array.

*/

function getAllWords(str) {
    return str.split(' ', str.length);
}

var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']