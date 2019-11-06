/*
Write a function called "isLessThan30". 
Given a number, "isLessThan30" returns 
whether the given number is less than 30.
*/

function isLessThan30(num) {
    if(num < 30){
        return true;
    } else{
        return false;
    }
}

var output = isLessThan30(9);
console.log(output); // --> true