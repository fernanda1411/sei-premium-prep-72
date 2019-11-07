/*
Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14
If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4
Notes:

In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.
*/

function sumDigits(num) {
    // your code here
    let isNegative = false;
    if (num < 0) {
        isNegative = true;
    }

    let numAbs = Math.abs(num);
    // convert num to string
    let str = numAbs.toString();
    // convert string to array of chars
    let arr = str.split("");

    // declare a result variable
    let result = 0;
    // iterate trough each char, convert it to a number and sum it to result
    for (let i = 0; i < arr.length; i++){
        if (i === 0 && isNegative) {
            result = result - parseInt(arr[i]);
        } else {
            result = result + parseInt(arr[i]);
        }
    }
    return  result;
  }

var output1 = sumDigits(1148);
console.log(output1); // --> 14

var output2 = sumDigits(-316);
console.log(output2); // --> 4