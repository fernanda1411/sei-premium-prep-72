/*
Write a function called "isEvenLength".

Given a word, "isEvenLength" returns whether the length of the word is even.
*/

function isEvenLength(word) {
    if(word.length % 2 === 0){
        return true;
    } else {
        return false;
    }
}

var output = isEvenLength('wow');
console.log(output); // --> false