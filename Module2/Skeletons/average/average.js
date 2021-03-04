/*
Use the skeleton provided to write a working implementation of a sum and an average function. 
The solution will require that you use your sum function within your average function. 
While you should create your own test suite to get the most out of this exercise, 
there are automated tests provided as well.

Notes:

Do not leave any functions in the skeleton unused.
Test that your implementation works.

*/



// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
  // uses sum function
  // returns the average of an array of numbers
  return sum(numbers) / numbers.length;
}

function sum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("PASSED [" + testName + "]");
  } else {
    console.log("FAILED [" + testName +'] Expected "' + expected + '", but got "' + actual + '"');
  }
}
// TESTS CASES

let sumTestArray = [1, 2, 3, 4, 5];

let actualSumResult = sum(sumTestArray);
let expectedSumResult = 15;
assertEqual(actualSumResult, expectedSumResult, "should accurately sum the integers in an array");

let actualAverage = average(input);
let expectedAverage = 3;
assertEqual(actualAverage, expectedAverage, 'should correct return the average of an array of numbers');