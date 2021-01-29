/*We are going to complete a function that takes in two parameters an object and a key, and returns whether the object has a property at the given key. Your function should create an isPresent variable and assign it to a comparison between the object's value at the given key and undefined, and return the isPresent variable. Below are examples of the code running, assuming that you will have completed the described function: isPropertyPresent.

var object1 = {
  a: 1,
  b: 2
}
var key1 = 'c';
var result1 = isPropertyPresent(object1, key1);
console.log('should log false:', result1);

var object2 = {
  'size': 'M',
  'color': 'green',
  'cut': 'tapered',
  'price': 30
};
var key2 = 'cut';
var result2 = isPropertyPresent(object2, key2);
console.log('should log true:', result2);*/

function isPropertyPresent(object, key) {
    // create an isPresent variable
    // assign it to a comparison between object's value at key and undefined
    // return the isPresent variable
    const isPresent = (object[key] !== undefined);
    return isPresent;
}

var object1 = {
    a: 1,
    b: 2
  }
  var key1 = 'c';
  var result1 = isPropertyPresent(object1, key1);
  console.log('should log false:', result1);
  
  var object2 = {
    'size': 'M',
    'color': 'green',
    'cut': 'tapered',
    'price': 30
  };
  var key2 = 'cut';
  var result2 = isPropertyPresent(object2, key2);
  console.log('should log true:', result2);