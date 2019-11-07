/*
Write a function called "getOddLengthWordsAtProperty".

Given an object and a key, "getOddLengthWordsAtProperty" 
returns an array containing all the odd length word elements 
of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If it contains no odd length elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the given key, it should return an empty array.
*/

function getOddLengthWordsAtProperty(obj, key) {
    var oddArr = [];
    
    if (!Array.isArray(obj[key])) {
        return oddArr;
    }
    
    for (var prop in obj[key]) {
        if (obj[key][prop].length % 2 === 1) {
        oddArr.push(obj[key][prop]);
        }
    }
      return oddArr;
}

var obj = {
    key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']