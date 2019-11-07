/*
Write a function called "getSmallestElementAtProperty".

Given an object and a key, "getSmallestElementAtProperty" 
returns the smallest element in the array located at the given key.

Notes:

If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
*/

function getSmallestElementAtProperty(obj, key) {
    if(obj[key] === undefined || Array.isArray(obj[key]) === false || obj[key].length < 1){
      return undefined;
    }

    let smallestElement = obj[key][0];
    
      for(let prop in obj[key]){
        if(obj[key][prop] < smallestElement){
          smallestElement = obj[key][prop];
        }
    }
    return smallestElement;
}

var obj = {
    key: [2, 1, 5]
  };
  var output = getSmallestElementAtProperty(obj, 'key');
  console.log(output); // --> 1