/*
Write a function called "or".

Given 2 boolean expressions, "or" returns true or false, 
corresponding to the '||' operator. Notes:

Do not use the || operator.
Use ! and && operators instead.
*/

function or(expression1, expression2) {
    if(!expression1 && !expression2){
        return false;
    } else {
        return true;
    }
}

var output = or(true, false);
console.log(output); // --> true;