/*
Write a function called "computeFactorialOfN".

Given a natural number (a whole number greater than 0), 
"computeFactorialOfN" returns its factorial.
*/

function computeFactorialOfN(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

var output = computeFactorialOfN(3);
console.log(output); // --> 6

var output = computeFactorialOfN(4);
console.log(output); // --> 24