/*
Write a function called "getAverageOfElementsAtProperty".

Given an object and a key, "getAverageOfElementsAtProperty" 
returns the average of all the elements in the array located at the given key.

Notes:

If the array at the given key is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the given key, it should return 0.
*/

function getAverageOfElementsAtProperty(obj, key) {
    if (typeof obj[key] === undefined || !Array.isArray(obj[key]) || obj[key].length < 1) {
      return 0;  // satisfies "Notes" requirements
    }
    var sum = 0;  // number placeholder
    for (var i in obj[key]) {  // iterates thru array
      sum = sum + obj[key][i];  // add each element to placeholder array
    }
    return sum / obj[key].length;  // return placeholder array with array's length
  }

  var obj = {
    key: [1, 2, 3]
  };
  var output = getAverageOfElementsAtProperty(obj, 'key');
  console.log(output); // --> 2