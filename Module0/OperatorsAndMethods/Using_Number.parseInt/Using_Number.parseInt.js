/*We are going to complete a function that takes in one string parameter, representing an integer, and returns the result of parsing an integer from the input. Your function should create a variable and assign it to the result of applying the Number.parseInt() method to the input parameter, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: applyParseInt.

var parsedInteger = applyParseInt("23");
console.log('should be 23:', parsedInteger); */

function applyParseInt(numString) {
    // create a result variable
    // assign it to parsed integer from input string
    // return result
    const result = Number.parseInt(numString);
    return result;
}

var parsedInteger = applyParseInt("23");
console.log('should be 23:', parsedInteger);