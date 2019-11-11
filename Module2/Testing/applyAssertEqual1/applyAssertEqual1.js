/*
During the next four problems, you will be asked again to write an assertion function, but in addition, you are going to use this assertion function to verify that some other function works. In a few cases, the provided code does not work. Your goal is to make use of the assertion functions by designing a "test suite". The next lesson is going to provide a precisely formatted and organized section of code; please use this to guide your work during the remainder of this module.

Write an "assertEqual" function once more, from memory. Please DO NOT simply PASTE in from before (If you have to go back and look at your previously-implemented code once, that is certainly okay, but come back here and write it from memory). Then use your assertion function in a series of test cases to thoroughly test the code. Use categorical reasoning to consider all the useful cases. The only automated test will be one to ensure that you have created a function that is named assertEqual. It is up to you to construct the rest of the "test suite".

Note:

Debug the code under test, if necessary.
*/

// FUNCTION DEFINITION(S)
function square(n) {
  return n * n;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log(
      "FAILED [" +
        testName +
        '] Expected "' +
        expected +
        '", but got "' +
        actual +
        '"'
    );
  }
}
// TESTS CASES
assertEqual(square(5), 6);
