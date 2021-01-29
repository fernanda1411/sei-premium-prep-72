/* We are going to complete a function that takes two parameters, both will be integers (start, end), and logs to the console, all of the integers starting with start, and ending with end. Your function should use a while loop to log each integer from start, up to and including end, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopASequence.

loopASequence(2, 5);
// console output:
  // 2
  // 3
  // 4
  // 5

loopASequence(3, 7);
// console output:
  // 3
  // 4
  // 5
  // 6
  // 7*/


function loopASequence(start, end) {
    // create a loop which runs if start is less than or equal to end
      // log current value of start to console
      // increment value of start
    while(start <= end){
        console.log(start)
        start++;
    }
}

loopASequence(2, 5);
// console output:
  // 2
  // 3
  // 4
  // 5

loopASequence(3, 7);
// console output:
  // 3
  // 4
  // 5
  // 6
  // 7*/