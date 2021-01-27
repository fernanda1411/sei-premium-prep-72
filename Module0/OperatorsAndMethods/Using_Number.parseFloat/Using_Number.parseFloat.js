/*We are going to complete a function that takes in one string parameter, representing a float (decimal), and returns the result of parsing a float from the input. Your function should create a variable and assign it to the result of applying the Number.parseFloat() method to the input parameter, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: applyParseFloat.

var parsedFloat = applyParseFloat("101.78");
console.log('should be 101.78:', parsedFloat); */

function applyParseFloat(numString) {
    // create a result variable
    // assign it to parsed float from input string
    // return result
    const result = Number.parseFloat(numString);
    return result;
}

var parsedFloat = applyParseFloat("101.78");
console.log('should be 101.78:', parsedFloat);