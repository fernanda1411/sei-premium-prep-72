/*
Write another function addOdds -- no longer assume that the array 
will only contain number values.

Note: You're welcome to copy and paste what you wrote in the previous exercise, 
and refactor (change) your previous implementation to handle the new constraints 
of the prompt.

For example, the input array could now contain non-number data:

var inputArray = ["hello", true, 1, 5, false, 20, 21];
addOdds(inputArray);

Will return: 27

*/

function addOdds(array){
    let sum = 0;
    for(var i = 0; i < array.length; i++){
        if(typeof array[i] === "number" && array[i] % 2 === 1){
            sum += array[i];
        }
    }
    return sum;
}