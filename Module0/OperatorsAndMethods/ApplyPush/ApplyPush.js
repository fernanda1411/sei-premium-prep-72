/*We are going to complete a function that takes in two parameters, an array and an element, adds the element to the end of the array, and returns the array. Your function should use the .push() method to add the input element to the end of the input array, then return that array. Below are examples of the code running, assuming that you will have completed the described function: applyPush.

var resultArray1 = applyPush([1, 17, 29], 34);
console.log('should log [1, 17, 29, 34]:', resultArray1);

var resultArray2 = applyPush(['abc', 'def'], 'ghi');
console.log('should log ["abc", "def", "ghi"]:', resultArray2); */

function applyPush(array, element) {
    // add the element to the back of the array
    // return the array
    array.push(element);
    return array;
}

var resultArray1 = applyPush([1, 17, 29], 34);
console.log('should log [1, 17, 29, 34]:', resultArray1);

var resultArray2 = applyPush(['abc', 'def'], 'ghi');
console.log('should log ["abc", "def", "ghi"]:', resultArray2);