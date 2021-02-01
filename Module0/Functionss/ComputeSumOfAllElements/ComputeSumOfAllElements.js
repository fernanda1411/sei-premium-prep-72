/*Write a function called "computeSumOfAllElements".

Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array. If input array is empty, your function should return 0.
 */


function computeSumOfAllElements(array){
    let sum = 0;
    
    for(let i = 0; i < array.length; i += 1){
        sum += array[i];
    }
    return sum;
}


var result1 = computeSumOfAllElements([1, 2, 3]);
console.log('should log 6:', result1);

var result2 = computeSumOfAllElements([]);
console.log('should log 0:', result2);