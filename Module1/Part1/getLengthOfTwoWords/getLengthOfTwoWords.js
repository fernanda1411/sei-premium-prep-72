/*
Write a function called "getLengthOfTwoWords". 
Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.
*/

function getLengthOfTwoWords(word1, word2) {
    let twoWords = (word1.length + word2.length);
    return twoWords;
}

var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9