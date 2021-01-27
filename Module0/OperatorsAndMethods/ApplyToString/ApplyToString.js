/*We are going to complete a function that takes in one parameter, and returns a string version of that parameter. Your function should create a stringVersion variable and assign it to a call of the toString() method on the input parameter, and return the stringVersion variable. Below are examples of the code running, assuming that you will have completed the described function: applyToString.

var input1 = 9374;
var resultString1 = applyToString(input1);
console.log('should log "9374":', resultString1);
console.log('type should be "string":', typeof resultString1);

var input2 = false;
var resultString2 = applyToString(input2);
console.log('should log "false":', resultString2);
console.log('type should be "string":', typeof resultString2);
 */

function applyToString(param) {
    // create a stringVersion variable
    // assign it to the string version of the input param
    // return the stringVersion variable
    const stringVersion = param.toString();
    return stringVersion;
}


var input1 = 9374;
var resultString1 = applyToString(input1);
console.log('should log "9374":', resultString1);
console.log('type should be "string":', typeof resultString1);


var input2 = false;
var resultString2 = applyToString(input2);
console.log('should log "false":', resultString2);
console.log('type should be "string":', typeof resultString2);