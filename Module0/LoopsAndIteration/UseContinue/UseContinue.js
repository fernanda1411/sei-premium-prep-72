/*We are going to complete a function that takes two parameters, an array of elements and an index, and logs every element, except for the element at the input index, to the console. Your function should use a loop to log every element except one at the inputted index, and should also use a continue statement (must use a semi-colon after continue for tests to pass) to skip over the value at the inputted index, then return nothing. Your code should NOT use else. Below is an example of the code running, assuming that you will have completed the described function: useContinue.

useContinue(['a', 'b', 'c', 'd'], 1);
// console output:
  // a
  // c
  // d


useContinue([1, 2, 3, 4], 2);
// console output:
  // 1
  // 2
  // 4 */

  function useContinue(array, index) {
    // create a loop which iterates over the input array
      // if current index is equal to input index
        // use described statement to skip to next iteration of loop (must include semi-colon!)
      // log current array element to the console
      const currentInput = array[index];
    for(let i = 0; i < array.length; i++){
        const currentIndex = array[i];
          
        if(currentIndex === currentInput){
          continue;
        }
        console.log(currentIndex)
    }
}