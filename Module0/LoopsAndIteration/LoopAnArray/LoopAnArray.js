/*We are going to complete a function that takes one parameter, an array of elements, and logs all of its elements (one at a time) to the console. Your function should use a while loop to log each element from the beginning to the end of the array, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAnArray.

loopAnArray(['a', 'b', 'c', 'd']);
// console output:
  // a
  // b
  // c
  // d

loopAnArray([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5 */

function loopAnArray(array) {
    // create an index variable
    // create a loop which iterates over the input array
      // log current array element to the console
      // increment value of index variable
    let index = 0;
    while (index < array.length){
        console.log(array[index]);
        index++;
    }
}

loopAnArray(['a', 'b', 'c', 'd']);
// console output:
  // a
  // b
  // c
  // d

loopAnArray([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5 