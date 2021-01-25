/*
Write a function indexesOnly which takes in an array, 
and replaces each element with their corresponding index values then returns that array.

For example, if indexesOnly is called with the argument [“a”, “b”, “c”, 10, true], 
the return value should be [0,1,2,3,4];

Your function should not create a new array, but replace the values of the original 
input array.

Note: If you attempt to submit your code, and your browser freezes or stops responding, 
there's a good chance you've created an infinite loop in your code -- 
check and debug that! :-)
*/

function indexesOnly(array){
    for(let i=0; i < array.length; i++){
        array[i] = i;
    }
    return array;
}