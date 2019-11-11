/*
Write an "assertArraysEqual" function once more, from memory. Please DO NOT simply PASTE in from before (If you have to go back and look at your previously-implemented code once, that is certainly okay, but come back here and write it from memory). Then use your assertion function in a series of test cases to thoroughly test the code. Use categorical reasoning to consider all the useful cases. The only automated test will be one to ensure that you have created a function that is named assertArraysEqual. It is up to you to construct the rest of the "test suite".

Similarly to last time, the first step will be to set up some tests for the code, then correct the errors in the implementation. Be sure to organize tests for both functions. If you are truly stumped, please feel free to consult the reference answers in the last section of the module. Ideally, you should eventually complete the problem on your own.

*/

// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray = newArray + callbackFunction(element);
  }

  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n;
  });
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual(actual, expected, testName) {
  var areEqualLength = actual.length === expected.length;

  var areEqualItems = true;
  for (var i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) {
      areEqualItems = false;
      break;
    }
  }

  if (areEqualLength && areEqualItems) {
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
