/*We are going to complete a function that takes in one number parameter, and returns the result of rounding the number up. Your function should create a variable and assign it to the result of applying the Math.ceil() method to the input parameter, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: roundUp.

var roundedUp = roundUp(16.8);
console.log('should be 17:', roundedUp); */

function roundUp(num) {
    // create a result variable
    // assign it to input, rounded up
    // return result
    const result = Math.ceil(num);
    return result;
}

var roundedUp = roundUp(16.8);
console.log('should be 17:', roundedUp);