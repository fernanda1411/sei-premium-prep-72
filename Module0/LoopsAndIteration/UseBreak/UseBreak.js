/*We are going to complete a function that takes two parameters, an array of elements and an index, and logs every element, except those whose index is greater than the input index. Your function should use a loop to log every element up to and including the element located at the input index, and should also use a break statement (must use a semi-colon after break for tests to pass) to skip over the values with indexes greater than that of the input index, then return nothing. Your code should NOT use else. Below is an example of the code running, assuming that you will have completed the described function: useBreak.

useBreak(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // a
  // b
  // c


useBreak([1, 2, 3, 4, 5, 6], 3);
// console output:
  // 1
  // 2
  // 3
  // 4 */

function useBreak(array, index) {
    // create a loop which iterates over the input array
      // if current index is greater than input index
        // use described statement to stop the loop completely (must include semi-colon!)
      // log current array element to the console
      
    for(let i = 0; i < array.length; i++){
        if(i > index){
            break;
        }
        console.log(array[i]);
    }
}


useBreak(['a', 'b', 'c', 'd', 'e'], 2);
// console output:
  // a
  // b
  // c


useBreak([1, 2, 3, 4, 5, 6], 3);
// console output:
  // 1
  // 2
  // 3
  // 4 