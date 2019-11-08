/*
Write a function called "modulo".

Given 2 numbers, "modulo" returns the remainder after dividing num1 by num2.

It should behave as described in the canonical documentation (MDN) for the 
JavaScript remainder operator: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_() 

Notes:

Do NOT use the actual built-in modulo (aka "remainder") operator (%) in your implementation.
0 % ANYNUMBER = 0.
ANYNUMBER % 0 = NaN.
If either operand is NaN, then the result is NaN.
Modulo always returns the sign of the first number.
*/

function modulo(num1, num2) {
  // If divide an even number by two, always get a whole number
  // If divide an odd number by two, always get a decimal
  // Divide an even number by two, get an integer
  // Divide an odd number by two, get a float
  // The Number.isInteger() method determines whether the passed value is an integer

  let divided = num1 / num2;
  let intenger = null;

  if (num1 < 0 || num2 < 0) {
    intenger = Math.round(divided);
  } else {
    intenger = Math.floor(divided);
  }
  let newNum = intenger * num2;
  let result = num1 - newNum;

  return result;
}

var output = modulo(25, 4);
console.log(output); // --> 1