/*We are going to complete a function that takes in one parameter, an array, and returns the length of that array. Your function should create a variable and assign it to the length of the input array using the .length property, and return that variable. Below are examples of the code running, assuming that you will have completed the described function: getArrayLength.

var resultLength1 = getArrayLength([1, 3, 4, 5, 7]);
console.log('should log 5:', resultLength1);

var resultLength2 = getArrayLength(['a', 'b', 'c', 'd']);
console.log('should log 4:', resultLength2); */

function getArrayLength(array) {
    // create a length variable
    // assign it to the length of the array
    // return the length variable
    const length = array.length;
    return length;
}

var resultLength1 = getArrayLength([1, 3, 4, 5, 7]);
console.log('should log 5:', resultLength1);

var resultLength2 = getArrayLength(['a', 'b', 'c', 'd']);
console.log('should log 4:', resultLength2);

