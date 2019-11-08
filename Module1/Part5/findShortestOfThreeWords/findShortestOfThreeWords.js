/*
Write a function called "findShortestOfThreeWords".

Given 3 strings, "findShortestOfThreeWords" returns the 
shortest of the given strings.

Notes:

If there are ties, it should return the first word in the parameters list.
*/

function findShortestOfThreeWords(word1, word2, word3) {
    let shortesWord = word1;

    if(word2.length < shortesWord.length){
        shortesWord = word2;
    } 
  
    if(word3.length < shortesWord.length){
        shortesWord = word3;
    }
    
     return shortesWord;
}

var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'