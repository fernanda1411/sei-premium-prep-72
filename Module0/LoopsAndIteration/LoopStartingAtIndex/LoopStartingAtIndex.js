/* We are going to complete a function that takes two parameters, an array of elements, and an index, and logs every element, beginning at the inputted index (one at a time) to the console. Your function should use a loop to log every element from the inputted index, until the end of the array, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopStartingAtIndex.

loopStartingAtIndex(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // c
  // d
  // e

loopStartingAtIndex([1, 2, 3, 4, 5], 3);
// console output:
  // 4
  // 5*/

function loopStartingAtIndex(array, index) {
    // create a loop which iterates from index to the end of the input array
      // log current array element to the console
    for(let i = index; i < array.length; i++){
        console.log(array[i]);
    }
}

loopStartingAtIndex(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // c
  // d
  // e

loopStartingAtIndex([1, 2, 3, 4, 5], 3);
// console output:
  // 4
  // 5