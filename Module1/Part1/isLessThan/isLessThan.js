/*
Write a function called "isLessThan". 
Given 2 numbers, "isLessThan" returns whether num2 is less than num1.
*/

function isLessThan(num1, num2) {
    if(num1 > num2){
        return true;
    } else {
        return false;
    }
}

var output = isLessThan(9, 4);
console.log(output); // --> true