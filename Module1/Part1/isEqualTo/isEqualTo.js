/*
Write a function called "isEqualTo". 
Given 2 numbers, "isEqualTo" returns whether num2 is equal to num1.
*/

function isEqualTo(num1, num2) {
    if(num1 === num2){
        return true;
    } else {
        return false;
    }
}

var output = isEqualTo(11, 10);
console.log(output); // --> false