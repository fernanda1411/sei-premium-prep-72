/*
Write a function called "getProductOfAllElementsAtProperty".

Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key.

Notes:

If the array is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the given key, it should return 0.
var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
*/

function getProductOfAllElementsAtProperty(obj, key) {
    const arr = obj[key];
    
    if(!arr || arr.length === 0 || !Array.isArray(arr)){
        return 0;
    }
    
    let result = 1;

    for (let i = 0; i < arr.length; i++){
        result = result * arr[i];
        
    }
    return result; 
}

var obj = {
    key: [1, 2, 3, 4]
};

var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24