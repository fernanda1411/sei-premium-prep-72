/*We are going to complete a function that takes one parameter, a array of objects, and logs all of its values (log each value in first inner object, one at a time, then second inner object, and so on...) to the console. Your function should use a for-in loop nested inside of a for loop to log each value from all inner objects, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAnArrayOfObjects.

 */

function loopAnArrayOfObjects(arrayOfObjects) {
    // create a loop which iterates over the input array
      // create an inner loop which iterates over current inner object
        // log current value to the console
    for(let i = 0; i < arrayOfObjects.length; i++){
        const outter = arrayOfObjects[i];
          
        for(let value in outter){
            const inner = outter[value];
            console.log(inner);
        }
    }
}

loopAnArrayOfObjects([{a: 1, b: 2}, {z: 5, y: 6}, {q: 14} ]);
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14

loopAnArrayOfObjects([{queue: false, stack: true}, {fish: 'swims'}, {shirt: 's', pop: 'p', eye: 'e'} ]);
// console output:
  // false
  // true
  // swims
  // s
  // p
  // e