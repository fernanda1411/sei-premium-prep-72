/*We are going to complete a function that takes one parameter, an array of elements, and logs every other one of its elements, beginning at index 0, to the console. Your function should use a loop to log every other element from the beginning, skipping every other element, until either end of the array, or one shy of the end (depending on odd or even length of the array passed), then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopEveryOther.

loopEveryOther(['a', 'b', 'c', 'd']);
// console output:
  // a
  // c

loopEveryOther([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 3
  // 5 */

function loopEveryOther(array) {
    // create a loop which iterates over every other element of the input array
      // log every other array element to the console
    for(let i = 0; i < array.length; i += 2){
        console.log(array[i]);
    }
}

loopEveryOther(['a', 'b', 'c', 'd']);
// console output:
  // a
  // c

loopEveryOther([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 3
  // 5