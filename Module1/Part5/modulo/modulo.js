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
  if (isNaN(num1) || isNaN(num2)) {
    return NaN;
  }

  if (num1 === 0) {
    return 0;
  }
  
  if (num2 === 0) {
    return NaN;
  }
  
  
  const isFirstNumberNegative = num1 < 0;
  const n1 = Math.abs(num1);
  const n2 = Math.abs(num2);
  
  let result = n1;
  while(result >= n2){
    result = result - n2;
  }
  return isFirstNumberNegative ? -result : result;
}

var output = modulo(25, 4);
console.log(output); // --> 1