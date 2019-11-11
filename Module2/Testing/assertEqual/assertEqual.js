/*
Write a function called assertEqual. It will be a function that takes three parameters: actual will be a scalar value, and should ideally be the result of calling a function you are testing, and which returns a scalar value. expected, also a scalar, should be the theoretical result of calling your function (or, what you "expect" the function to return). Finally, testName will be a string, and should describe what a call to assertEqual is verifying about the function being tested.

Your function should compare actual and expected values with strict equality (triple equals ===), then log one of two messages to the console. In general, these assertion functions will need some kind of code or separate functions to test. For the first four Testing problems, we will provide examples that include functions like multiplyByTwo. It is not necessary for you to create these functions, but rather, they are presented to aid your understanding of how assertEqual should behave once you have built it.
*/

function assertEqual(actual, expected, testName) {
    
    // actual - a scalar value
    // expected - a scala
    // testName - a string
    
    
    // compare actual and expected (===)
    // log one of two messages to the console


    const isEqual = actual === expected;
    const successMsg = 'passed';
    const failureMsg = `FAILED [${testName}] Expected "${expected}", but got "${actual}"`;
    
    //returns a scalar value
    console.log(isEqual ? successMsg : failureMsg);

    //possivle answer:
    //console.log(actual === expected ? 'passed' : `FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
  }