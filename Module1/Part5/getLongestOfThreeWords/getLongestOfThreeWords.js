/*
Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

Notes:

If there is a tie, it should return the first word in the tie.
*/

function getLongestOfThreeWords(word1, word2, word3) {
    let longestWord = word1;

    if(word2.length > longestWord.length){
        longestWord = word2;
    }

    if(word3.length > longestWord.length){
        longestWord = word3;
    }
    
    return longestWord;
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'