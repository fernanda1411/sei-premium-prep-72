/*
Write a function called "convertDoubleSpaceToSingle".

Given a string, "convertDoubleSpaceToSingle" returns 
the passed in string, with all the double spaces converted to single spaces.

Notes:

In order to do this problem, you should be familiar 
with "String.split", and "Array.join".
*/

function convertDoubleSpaceToSingle(str) {
    const singleSpace = str.split("  ");
    const newString = singleSpace.join(" ");
    return newString;
}

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"