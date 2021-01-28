/*We are going to complete a function that takes three parameters, an array, a numerical index, a newValue, and returns the array after performing a reassignment. Your function should reassign the element within the array, located at the numerical index, to the new input value, and should then return the newly changed array. Below is an example of the code running, assuming that you will have completed the described function: reassignAnElement.

var resultArray = reassignAnElement(['desk', 'lamp', 'chewtoy'], 2, 'textbook');
console.log('should replace "chewtoy" with "textbook":', resultArray);*/

function reassignAnElement(array, index, newValue) {
    // reassign the value in the array, located at the index, to the newValue parameter
    // return the input array
    array[index] = newValue;
    return array;
}

var resultArray = reassignAnElement(['desk', 'lamp', 'chewtoy'], 2, 'textbook');
console.log('should replace "chewtoy" with "textbook":', resultArray);