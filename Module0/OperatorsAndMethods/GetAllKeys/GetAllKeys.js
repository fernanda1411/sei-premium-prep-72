/*We are going to complete a function that takes in one parameter, an object. Your function should create a keys variable, and assign it to an expression which generates an array of all of the keys in said object by calling Object.keys(), then return that keys variable. Below is an example of the code running, assuming that you will have completed the described function: getAllKeys.

var resultKeys = getAllKeys({firstScore: 12, secondScore: 34, thirdScore: 28});
console.log('should log ["firstScore", "secondScore", "thirdScore"]:', resultKeys); */

function getAllKeys(obj) {
    // create a keys variable
    // assign it to an expression which will generate an array of all of the keys in obj
    // return to the keys variable
    const keys = Object.keys(obj);
    return keys;
}

var resultKeys = getAllKeys({firstScore: 12, secondScore: 34, thirdScore: 28});
console.log('should log ["firstScore", "secondScore", "thirdScore"]:', resultKeys);