/*We are going to complete a function that takes one parameter, a string of characters, and logs all of its characters (one at a time) to the console. Your function should use a while loop to log each character from the beginning to the end of the string, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: loopAString.

loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d */

function loopAString(string) {
    // create an index variable
    // create a loop which iterates over the input string
      // log current string character to the console
      // increment value of index variable
    let index = 0;
    while(index < string.length){
        console.log(string[index]);
        index++;
    }
}

loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d