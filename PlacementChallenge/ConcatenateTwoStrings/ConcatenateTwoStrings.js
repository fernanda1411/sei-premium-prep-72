/*
Complete the function concatenateTwoStrings. 
This function will take in two string parameters, 
and should return a string which is the result of concatenating 
the two input strings together.
*/

function concatenateTwoStrings(string1, string2) {
    return string1.concat(string2);
    //return `${string1}${string2}`
}

var output = concatenateTwoStrings("stair", "case");
console.log(output); // "staircase"