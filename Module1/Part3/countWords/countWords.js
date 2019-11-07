/*
Write a function called "countWords".

Given a string, "countWords" returns an object 
where each key is a word in the given string, 
with its value being how many times that word appeared in the given string.

Notes:
If given an empty string, it should return an empty object.

*/

function countWords(str) {
    const wordObj = {};
    
    if(!str.length){
        return wordObj;
    }
     const wordArr = str.split(' ');
     
     for(let i = 0; i < wordArr.length; i++){
       const word = wordArr[i];
 
       if (wordObj[word]) {
         wordObj[word]++;
       } else {
         wordObj[word] = 1;
       }
    }
    return wordObj;
 }

 var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}