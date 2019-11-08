/*
Write a function called "isEvenWithoutModulo".

Given a number, "isEvenWithoutModulo" returns whether it is even.

Notes:

It does so without using the modulo operator (%).
It should work for negative numbers and zero.
*/

function isEvenWithoutModulo(num) {
    var value = num/2;
    
    if(Number.isInteger(value)) {
        return true;
    }
    return false;
}

var output = isEvenWithoutModulo(8);
console.log(output); // --> true