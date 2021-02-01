/*Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average. If input array is empty, your function should return 0.
*/

function computeAverageOfNumbers(array){
    let sum = 0;
    const len = array.length;
    
    if(!len){
        return sum;
    }
    
    for(let i = 0; i < len; i++){
        sum += array[i];
    }
    return sum / len;
}


var input1 = [1,2,3,4,5];
var result1 = computeAverageOfNumbers(input1);
console.log('should log 3:', result1);

var input2 = [];
var result2 = computeAverageOfNumbers(input2);
console.log('should log 0:', result2);