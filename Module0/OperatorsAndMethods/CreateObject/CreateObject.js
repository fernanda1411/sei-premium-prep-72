/* We are going to complete a function that takes no parameters, and returns a newly created object. Your function should create a variable and assign it to a new object, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: createObject.

var resultObject = createObject();
console.log('should be an object:', typeof resultObject);
console.log('should not be an array:', Array.isArray(resultObject));*/

function createObject() {
    // create a result variable,
    // assign it to a new object
    // return the result variable
    const result = {};
    return result;
}

var resultObject = createObject();
console.log('should be an object:', typeof resultObject);
console.log('should not be an array:', Array.isArray(resultObject));