/*
Write a function called "getLongestWordOfMixedElements".

Given an array of mixed types, "getLongestWordOfMixedElements" 
returns the longest string in the given array.

Notes:

If the array is empty, it should return an empty string ("").
If the array contains no strings; it should return an empty string.
*/

function getLongestWordOfMixedElements(arr) {
  let longestWord = "";
  let isFirstWord = true;

  for (let i = 0; i < arr.length; i++) {
    const currentEl = arr[i];
    if (typeof currentEl === "string") {
      if (isFirstWord) {
        longestWord = currentEl;
        isFirstWord = false;
      }
      if (currentEl.length > longestWord.length) {
        longestWord = currentEl;
      }
    }
  }
  return longestWord;
}


var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'