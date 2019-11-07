/*
Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average.

Notes:

If given an empty array, it should return 0.
*/

function computeAverageOfNumbers(nums) {
    var sum = 0;
    var avg = 0;
    
      if (nums.length < 1) {
        return 0;
      }
      for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
      }
      avg = sum / nums.length;
      return avg;
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3