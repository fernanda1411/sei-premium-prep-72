/*We are going to complete a function that takes one parameter, an object of properties, and logs all of its keys (one at a time) to the console. Your function should use a for-in loop to log each key in the object, then return nothing. DO NOT USE Object.keys() in your solution. Below is an example of the code running, assuming that you will have completed the described function: loopOverKeys.

loopOverKeys({a: 1, b: 2, c: 3});
// console output:
  // a
  // b
  // c

loopOverKeys({make: 'Ford', model: 'T', year: 1913});
// console output:
  // make
  // model
  // year */


  
function loopOverKeys(object) {
    // create a loop which iterates over the input object
      // log current key to the console
    for(let key in object){
        console.log(key);
    }
}

loopOverKeys({a: 1, b: 2, c: 3});
// console output:
  // a
  // b
  // c

loopOverKeys({make: 'Ford', model: 'T', year: 1913});
// console output:
  // make
  // model
  // year