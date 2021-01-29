/*We are going to complete a function that takes in two parameters (array, element), and returns the index of the array where the element can be found. Your function should create an index variable and assign it to a call of the indexOf() method on the array, and passing element as an argument, and return the index variable. Below are examples of the code running, assuming that you will have completed the described function: applyIndexOfToArray.

var array1 = ['Quick', 'sort', 'is', 'wild'];
var element1 = 'sort';
var resultIndex1 = applyIndexOfToArray(array1, element1);
console.log('should log 1:', resultIndex1);

var array2 = ['size', 'color', 'cut', 'price'];
var element2 = 'style';
var resultIndex2 = applyIndexOfToArray(array2, element2);
console.log('should log -1:', resultIndex2); */

function applyIndexOfToArray(array, element) {
    // create an index variable
    // assign it to the index inside of array where element can be found
    // return the index variable
    const index = array.indexOf(element);
    return index;
}


var array1 = ['Quick', 'sort', 'is', 'wild'];
var element1 = 'sort';
var resultIndex1 = applyIndexOfToArray(array1, element1);
console.log('should log 1:', resultIndex1);

var array2 = ['size', 'color', 'cut', 'price'];
var element2 = 'style';
var resultIndex2 = applyIndexOfToArray(array2, element2);
console.log('should log -1:', resultIndex2);
