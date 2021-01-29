/*We are going to complete a function that takes in two parameters, an object and an key, removes the property located at the input key from the object, and returns the object. Your function should use the delete operator to remove the property at the given key from the input object, then return the object. Below are examples of the code running, assuming that you will have completed the described function: removeAProperty.

var resultObject1 = removeAProperty({q: 9, r: 10, text: 'bad entry'}, 'text');
console.log('should log {q: 9, r: 10}:', resultObject1);

var resultObject2 = removeAProperty({first: 'one', second: 'two', why: 452, third: 'three'}, 'why');
console.log('should log {first: "one", second: "two", third: "three"}:', resultObject2); */

function removeAProperty(object, key) {
    // remove the property at the given key from the object
    // return the object
    delete object[key];
    return object;
}


var resultObject1 = removeAProperty({q: 9, r: 10, text: 'bad entry'}, 'text');
console.log('should log {q: 9, r: 10}:', resultObject1);

var resultObject2 = removeAProperty({first: 'one', second: 'two', why: 452, third: 'three'}, 'why');
console.log('should log {first: "one", second: "two", third: "three"}:', resultObject2);

