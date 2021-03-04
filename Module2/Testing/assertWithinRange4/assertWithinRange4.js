/*
Write a function called assertWithinRange. It will be a function that takes four parameters: low a number value, which will be the lower bound on our range; high, also a number value, which will be upper bound on our range; actual, which will be a number value, and should ideally be the result of calling a function that you are testing. (presumably the function being tested should return a number value). Finally, testName will be a string, and should describe what a call to assertObjectsEqual is verifying about the function being tested.

The idea here is similar to when someone says, "Give me a number between 1 and 5". Let us further consider that what you mean is "1, 2, 3, 4, or 5", i.e. our range should be inclusive.


Please pay close attention to the exact punctuation and contents of the success and failure messages.

Examples:

SUCCESS CASE:

var blackjackScore = 20;
assertWithinRange(4, 21, blackjackScore, 'blackjack score should be between 4 and 21');
// console output:
// passed
SUCCESS CASE:

var dieRoll = 1;
assertWithinRange(1, 6, dieRoll, 'die roll should be between 1 and 6');
// console output:
// passed
FAILURE CASE:

var price = 101;
assertWithinRange(1, 100, price, 'price should be between 1 and 100');
// console output:
// FAIL [price should be between 1 and 100] "101" not within range 1 to 100

*/

function assertWithinRange(low, high, actual, testName) {
  // low - number value (lower bound on our range)
  //high - number value (upper bound on our range)

  //actual - number value (return a number value)
  //testName - string

  //creat a variable inRange
  let inRange = (inRange = low <= actual && actual <= high);
  //enquanto o low for menor do que o valor actual e enquanto o actual for menor do que o high

  //se o valor do inRange for verdadeiro
  if (inRange) {
    //imprima 'passed'
    console.log("passed");
    //senao
  } else {
    //imprima
    console.log(
      "FAIL [" +
        testName +
        '] "' +
        actual +
        '" not within range ' +
        low +
        " to " +
        high
    );
  }
}
