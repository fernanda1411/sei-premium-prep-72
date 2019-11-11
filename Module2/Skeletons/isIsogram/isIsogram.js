/*
An isogram is a word that has no repeating letters, 
consecutive or non-consecutive. Your task is to write and 
test a function that determines whether a string is an isogram, 
following the format of the previous problems. It should return 
true if the input string is an isogram, and should return false otherwise.

While you should create your own test suite to get the most out of 
this exercise, there are automated tests provided as well.


Notes:

Assume your input is only letters.
Assume the empty string is an isogram.
Ignore case.
Follow the pseudocode exactly!

*/



// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
    
    text = text.toLowerCase();
    let letters = text.split('');
    
    // add each char to a set
    letters = new Set(letters);
    
    // check length of text and the size of the set
  return text.length === letters.size;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('PASSED [' + testName + ']');
    } else {
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
}
// TESTS CASES
assertEqual(isIsogram(''), true, 'should return true for an empty string');
assertEqual(isIsogram('true'), true, 'should return true for an isogram');
assertEqual(isIsogram('assert'), false, 'should return false for non-isogram');
assertEqual(isIsogram('caCAtcHh'), false, 'should ignore case');
