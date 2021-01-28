/*We are going to complete a function that takes in two parameters (string, subString), and returns the index of the string where the subString can be found. Your function should create an index variable and assign it to a call of the indexOf() method on the string, and passing subString as an argument, and return the index variable. Below are examples of the code running, assuming that you will have completed the described function: applyIndexOf.

var string1 = 'Quicksort';
var subString1 = 'sort';
var resultIndex1 = applyIndexOf(string1, subString1);
console.log('should log 5:', resultIndex1);

var string2 = 'size,color,cut,price';
var subString2 = 'cut';
var resultIndex2 = applyIndexOf(string2, subString2);
console.log('should log 11:', resultIndex2); */

function applyIndexOf(string, subString) {
    // create an index variable
    // assign it to the index inside of string where subString can first be found
    // return the index variable
    const index = string.indexOf(subString);
    return index;
}


var string1 = 'Quicksort';
var subString1 = 'sort';
var resultIndex1 = applyIndexOf(string1, subString1);
console.log('should log 5:', resultIndex1);

var string2 = 'size,color,cut,price';
var subString2 = 'cut';
var resultIndex2 = applyIndexOf(string2, subString2);
console.log('should log 11:', resultIndex2);