/*
Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns 
the shortest string within the given array.

Notes:

If there are ties, it should return the first element to appear 
in the given array.
Expect the given array to have values other than strings.
If the given array is empty, it should return an empty string.
If the given array contains no strings, it should return an empty string.
*/

function findShortestWordAmongMixedElements(arr) {
  let shortesWord = "";
  let isFirstWord = true;

  for (let i = 0; i < arr.length; i++) {
    const currentEl = arr[i];
    if (typeof currentEl === "string") {
      if (isFirstWord) {
        shortesWord = currentEl;
        isFirstWord = false;
      }
      if (currentEl.length < shortesWord.length) {
        shortesWord = currentEl;
      }
    }
  }
  return shortesWord;
}

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'