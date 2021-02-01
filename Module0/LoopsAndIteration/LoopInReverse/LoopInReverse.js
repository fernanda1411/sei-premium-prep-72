/*We are going to complete a function that takes one parameter, an array of elements, and logs every element, beginning at the back of the input array and ending at the front of the input array, to the console. Your function should use a loop to log every element from the back of the array, up to the front of the array, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopInReverse.

loopInReverse(['a', 'b', 'c', 'd']);
// console output:
  // d
  // c
  // b
  // a

loopInReverse([1, 2, 3, 4]);
// console output:
  // 4
  // 3
  // 2
  // 1 */

function loopInReverse(array) {
    // create a loop which iterates from back to front of the input array
      // log current array element to the console
    for(let i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
    }
}