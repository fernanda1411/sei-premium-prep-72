/*
Write a function called "getElementsLessThan100AtProperty".

Given an object and a key, "getElementsLessThan100AtProperty" 
returns an array containing all the elements of the array located 
at the given key that are less than 100.

Notes:

If the array is empty, it should return an empty array.
If the array contains no elements less than 100, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
*/

function getElementsLessThan100AtProperty(obj, key) {
    const arr = [];
    for(let x in obj[key]){
        if(obj[key][x] < 100){
            arr.push(obj[key][x]);
        }
    }
    return arr;
}

var obj = {
    key: [1000, 20, 50, 500]
  };
  var output = getElementsLessThan100AtProperty(obj, 'key');
  console.log(output); // --> [20, 50]