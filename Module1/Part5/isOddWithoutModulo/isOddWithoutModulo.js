/*
Write a function called "isOddWithoutModulo".

Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

Note:

It does so without using the modulo operator (%).
It should work for negative numbers and zero.
*/

function isOddWithoutModulo(num) {
    let value = num/2;
    
    if(!Number.isInteger(value)) {
        return true;
  }
    return false;
}

var output = isOddWithoutModulo(17);
console.log(output); // --> true



// --> another version

function isOddWithoutModulo2(num) {
    let result = Math.abs(num);
    while(result > 1){
        result -= 2;
    }
    return result === 1;
}

var output2 = isOddWithoutModulo2(17);
console.log(output2); // --> true