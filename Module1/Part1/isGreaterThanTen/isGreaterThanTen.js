/*
Write a function called "isGreaterThan10". 
Given a number, "isGreaterThan10" returns 
whether the given number is greater than 10.

*/


function isGreaterThan10(num) {
    if(num > 10){
        return true;
    } else{
        return false;
    }
}

var output = isGreaterThan10(11);
console.log(output); // --> true