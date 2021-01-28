/*We are going to complete a function that takes two parameters, an array and a numerical index, and returns the element in the array located at the numerical index. Your function should create a variable and assign it to an expression which accesses the element located at the numerical index, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: accessAnElement.

var resultElement = accessAnElement(['Computer', 'Mouse', 'Ethernet Cable'], 1);
console.log('should be "Mouse":', resultElement); */

function accessAnElement(array, index) {
    // create a result variable,
    // assign it to an expression that accesses the element within array at the index
    // return the result variable
    const result = array[index];
    return result;
}

var resultElement = accessAnElement(['Computer', 'Mouse', 'Ethernet Cable'], 1);