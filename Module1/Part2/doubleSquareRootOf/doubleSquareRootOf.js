/*
Write a function called "doubleSquareRootOf". 
Given a number, "doubleSquareRootOf" returns double its square root.
*/

function doubleSquareRootOf(num) {
    return Math.sqrt(num) * 2;
}

var output = doubleSquareRootOf(121);
console.log(output); // --> 22