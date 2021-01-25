/*We are going to complete a function that takes in two boolean parameters. Your function should create a variable and assign it to the result of comparing the two input parameters using the || operator, then return that variable. Below are examples of the code running, assuming that you will have completed the described function: eitherAreTrue.

var outputTrue = eitherAreTrue(true, false);
console.log('should be true:', outputTrue);

var outputFalse = eitherAreTrue(false, false);
console.log('should be false:', outputFalse); */

function eitherAreTrue(bool_1, bool_2) {
    // create a result variable
    // assign it to bool_1 OR bool_2
    // return the result variable
    const result = bool_1 || bool_2;
    return result;
}

var outputTrue = eitherAreTrue(true, false);
console.log('should be true:', outputTrue);

var outputFalse = eitherAreTrue(false, false);
console.log('should be false:', outputFalse);