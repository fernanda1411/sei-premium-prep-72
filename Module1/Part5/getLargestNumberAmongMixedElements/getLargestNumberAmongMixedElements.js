/*
Write a function called "getLargestNumberAmongMixedElements".

Given any array, "getLargestNumberAmongMixedElements" returns 
the largest number in the given array.

Notes:

The array might contain values of a type other than numbers.
If the array is empty, it should return 0.
If the array contains no numbers, it should return 0.
*/

function getLargestNumberAmongMixedElements(arr) {
  let largestNum;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (largestNum === undefined) {
        largestNum = arr[i];
      } else if (largestNum < arr[i]) {
        largestNum = arr[i];
      }
    }
  }
  if (!largestNum || arr.length === 0) {
    largestNum = 0;
  }
  return largestNum;
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5