/*
In this problem, you are to simply look at the partially implemented skeleton below and, by parsing it carefully, determine what is ought to do. While you should create your own test suite to get the most out of this exercise, there are automated tests provided as well.

Flesh out the implementation and test it.
*/

// Skeleton

// FUNCTION DEFINITION(S)
function findMaxRepeatCountInWord(word) {
  // Break up individual words into individual letters.
  let letters = word.split("");

  // Count the instances of each letter
  let counts = {};

  // for loop
  for (let i = 0; i < letters.length; i++) {
    if (counts[letters[i]] === undefined) {
      counts[letters[i]] = 1;
    } else {
      counts[letters[i]]++;
    }
  }
  // Iterate all the counts and find the highest
  let max = 0;

  for (let key in counts) {
    if (max < counts[key]) {
      max = counts[key];
    }
  }
  // Return this word's max repeat count
  return max;
}

function findFirstWordWithMostRepeatedChars(text) {
  let maxRepeatCountOverall = 0;
  let wordWithMaxRepeatCount = "";

  // Break up input text into words (space-delimited).
  let words = text.split(" ");

  // For each word...
  for (let i = 0; i < words.length; i++) {
    let repeatCountForWord = findMaxRepeatCountInWord(words[i]);

    // If that max repeat count is higher than the overall max repeat count, then
    if (repeatCountForWord > maxRepeatCountOverall) {
      // update maxRepeatCountOverall
      maxRepeatCountOverall = repeatCountForWord;
      // update wordWithMaxRepeatCount
      wordWithMaxRepeatCount = words[i];
    }
  }
  return wordWithMaxRepeatCount;
}
// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log("FAILED [" + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

// TESTS FOR findMaxRepeatCountInWord
var actualMaxCount = findMaxRepeatCountInWord("bananas");
var expectedMaxCount = 3;
assertEqual(
  actualMaxCount,
  expectedMaxCount,
  "should return count of letter that is repeated most often in input word"
);

// TESTS FOR findFirstWordWithMostRepeatedChars
var actualWord = findFirstWordWithMostRepeatedChars("bananas are excellent");
var expectedWord = "bananas";
assertEqual(
  actualWord,
  expectedWord,
  "should return word with most repeated letters"
);
