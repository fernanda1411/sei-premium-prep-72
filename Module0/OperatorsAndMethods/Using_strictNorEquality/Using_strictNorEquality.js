/*We are going to complete a function that takes in two scalar (boolean, number, or string) parameters. Your function should create a variable and assign it to the result of comparing the two input parameters using the !== operator, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: areNotEqual.

var outputTrue = areNotEqual("happiness", "sadness");
console.log('should be true:', outputTrue);

var outputFalse = areNotEqual(7, 3 + 4);
console.log('should be false:', outputFalse);*/

function areNotEqual(param_1, param_2) {
    // create a result variable
    // assign it to a comparison between param_1 and param_2 using "not equal to" operator
    // return the result variable
    const result = param_1 !== param_2;
    return result;
}

var outputTrue = areNotEqual("happiness", "sadness");
console.log('should be true:', outputTrue);

var outputFalse = areNotEqual(7, 3 + 4);
console.log('should be false:', outputFalse);