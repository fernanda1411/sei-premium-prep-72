/*Write a function called "findShortestOfThreeWords".

Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

Notes:

If there are ties, it should return the first word in the parameters list.
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a' */


function findShortestOfThreeWords(word1, word2, word3) {
    let shortestWord = word1;
    
    if(word2.length < shortestWord.length){
      shortestWord = word2;
    }
    
    if(word3.length < shortestWord.length){
      shortestWord = word3;
    }
    
    return shortestWord;
}

var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
