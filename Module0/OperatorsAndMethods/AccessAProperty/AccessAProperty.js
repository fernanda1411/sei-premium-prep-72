/*We are going to complete a function that takes two parameters, an object and a string key, and returns the value for a property in the object located at the string key. Your function should create a variable and assign it to an expression which accesses the value of the property located at the string key, then return that variable. Below is an example of the code running, assuming that you will have completed the described function: accessAProperty.

var resultValue = accessAProperty({machine: 'Computer', type: 'Macbook', ram: '2 GHz'}, 'ram');
console.log('should be "2 GHz":', resultValue); */

function accessAProperty(object, key) {
    // create a result variable,
    // assign it to an expression that accesses the property in the object located at the key
    // return the result variable
    const result = object[key];
    return result;
}

var resultValue = accessAProperty({machine: 'Computer', type: 'Macbook', ram: '2 GHz'}, 'ram');
console.log('should be "2 GHz":', resultValue);