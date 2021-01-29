/*We are going to complete a function that takes in one parameter, possibly an object, and returns whether the input in an object or not. Your function should create several variables (isObject, isNotAnArray, and isObjectAndNotAnArray). Assign isObject to an application of the typeof operator to the input. Assign isNotAnArray to a call to the Array.isArray() method with the ! operator applied as well. Assign isObjectAndNotAnArray to the two previous variabes combined with the && operator, and return the isObjectAndNotAnArray variable. Below are examples of the code running, assuming that you will have completed the described function: isAnObject.

var resultBoolean1 = isAnObject([1, 2, 3]);
console.log('should log false:', resultBoolean1);

var resultBoolean2 = isAnObject({name: 'Tom', friend: 'Jerry'});
console.log('should log true:', resultBoolean2); */

function isAnObject(input) {
    // create an isObject variable
    // assign it to whether the input is an object type
    // create an isNotAnArray variable
    // assign it to whether the input is not an array
    // create an isObjectAndNotAnArray variable
    // assign it to a combination of isObject AND isNotAnArray
    // return the isObjectAndNotAnArray variable
    const isObject = typeof(input);
    const isNotAnArray = !Array.isArray(input);
    const isObjectAndNotAnArray = (isObject && isNotAnArray);
    return isObjectAndNotAnArray;
}

var resultBoolean1 = isAnObject([1, 2, 3]);
console.log('should log false:', resultBoolean1);

var resultBoolean2 = isAnObject({name: 'Tom', friend: 'Jerry'});
console.log('should log true:', resultBoolean2);