/*We are going to complete a function that takes one parameter, an array of arrays, and logs all of its elements (log each element in first inner array, start to end, then second inner array, and so on...) to the console. Your function should use a nested for loop to log each element from all inner arrays, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAnArrayOfArrays.
*/


function loopAnArrayOfArrays(arrayOfArrays) {
    // create a loop which iterates over the input array
      // create an inner loop which iterates over current inner array
        // log current element to the console
    for(let i = 0; i < arrayOfArrays.length; i++){
        const outter = arrayOfArrays[i];
          
        for(let j = 0; j < outter.length; j++){
            const inner = outter[j];
            console.log(inner);
        }
    }
}

loopAnArrayOfArrays([ ['a', 'b', 'c'], ['d', 'e', 'f'] ]);
// console output:
  // a
  // b
  // c
  // d
  // e
  // f

loopAnArrayOfArrays([ [1, 2], [3, 4], [5], [6, 7, 8] ]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 7
  // 8 