/*We are going to complete a function that takes two parameters, both arrays, and logs all possible combinations of elements separated by a space (see example for details...) to the console. Your function should use a nested for loop to log all combinations of the two arrays, then return nothing. Below is an example of the code running, assuming that you will have completed the described function: generateCombinations.
 */

function generateCombinations(array1, array2) {
    // create a loop which iterates over the first array
      // create an inner loop which iterates over the second array
        // log current element of first array and current element of second array to the console with space in between
  
    for(let i = 0; i < array1.length; i++){
        const outter = array1[i];
          
        for(let j = 0; j < array2.length; j++){
            const inner = array2[j];
            console.log(outter + ' ' + inner);
        }
    }
}

generateCombinations(['a', 'b', 'c'], ['d', 'e', 'f']);
// console output:
  // a d
  // a e
  // a f
  // b d
  // b e
  // b f
  // c d
  // c e
  // c f

generateCombinations([1, 2], ['buckle', 'my', 'shoe']);
// console output:
  // 1 buckle
  // 1 my
  // 1 shoe
  // 2 buckle
  // 2 my
  // 2 shoe