/*
Write a function called "getSquaredElementsAtProperty".

Given an object and a key, "getSquaredElementsAtProperty" 
returns an array containing all the squared elements of the 
array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
*/

function getSquaredElementsAtProperty(obj, key) {
    const arr = [];
    
    if(Array.isArray(obj[key])){
        for(var i in obj[key]){
        const squared = obj[key][i] * obj[key][i];
        arr.push(squared);
        }
    }
    return arr;
}

var obj = {
    key: [2, 1, 5]
  };
  var output = getSquaredElementsAtProperty(obj, 'key');
  console.log(output); // --> [4, 1, 25]