/*
Write a function addOdds which receives an array of numbers, 
and sums up only the odd numbers.

For example:

var numArray = [1, 11, 20, 21, 30];
addOdds(numArray);
Will return: 33 from adding 1, 11, and 21, the odd numbers of numArray.

*/

function addOdds(array){
    let sum = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 === 1){
            sum += array[i];
        }
    }
    return sum;
}