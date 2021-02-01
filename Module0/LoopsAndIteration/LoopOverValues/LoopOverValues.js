/*We are going to complete a function that takes one parameter, an object of properties, and logs all of its values (one at a time) to the console. Your function should use a for-in loop to log each value in the object, then return nothing. DO NOT USE Object.values() in your solution. Below is an example of the code running, assuming that you will have completed the described function: loopOverValues.

loopOverValues({a: 1, b: 2, c: 3});
// console output:
  // 1
  // 2
  // 3

loopOverValues({make: 'Ford', model: 'T', year: 1913});
// console output:
  // Ford
  // T
  // 1913 */


  
function loopOverValues(object) {
    // create a loop which iterates over the input object
      // log current value to the console
    for(let value in object){
        console.log(object[value]);
    }
}

loopOverValues({a: 1, b: 2, c: 3});
// console output:
  // 1
  // 2
  // 3

loopOverValues({make: 'Ford', model: 'T', year: 1913});
// console output:
  // Ford
  // T
  // 1913