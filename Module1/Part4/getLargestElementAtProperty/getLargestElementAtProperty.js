/*
Write a function called "getLargestElementAtProperty".

Given an object and a key, "getLargestElementAtProperty" 
returns the largest element in the array located at the given key.

Notes:

If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
*/

function getLargestElementAtProperty(obj, key) {
    
    if(obj[key] === undefined || Array.isArray(obj[key]) === false || obj[key].length < 1){
      return undefined;
    }

    let largestElement = obj[key][0];
    
      for(let prop in obj[key]){
        if(obj[key][prop] > largestElement){
          largestElement = obj[key][prop];
        }
    }
    return largestElement;
}

var obj = {
    key: [1, 2, 4]
  };
  var output = getLargestElementAtProperty(obj, 'key');
  console.log(output); // --> 4