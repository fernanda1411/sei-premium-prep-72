/* We are going to complete a function that takes one parameter, a object of arrays, and logs all of its values (log each value in first inner array, one at a time, then second inner array, and so on...) to the console. Your function should use a for loop nested inside of a for-in loop to log each value from all inner arrays, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAnObjectOfArrays.

 */

function loopAnObjectOfArrays(objectOfArrays) {
    // create a loop which iterates over the input object
      // create an inner loop which iterates over current inner array
        // log current value to the console
    for(let value in objectOfArrays){
        const outter = objectOfArrays[value];
          
        for(let i = 0; i < outter.length; i++){
            const inner = outter[i];
            console.log(inner);
        }
    }
}

loopAnObjectOfArrays({ first: [1, 2, 5], second: [6, 14, 21] });
// console output:
  // 1
  // 2
  // 5
  // 6
  // 14
  // 21

loopAnObjectOfArrays({ third: [false, false], fourth: ['runs'], ninth: ['q', 'l', 'z'] });
// console output:
  // false
  // false
  // runs
  // q
  // l
  // z