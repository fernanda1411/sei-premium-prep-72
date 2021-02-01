/*Write a function called "filterOddElements".

Given an array of numbers, "filterOddElements" returns an array containing only the odd numbers of the given array. If the input array contains no odd numbered elements, your function should return an empty array.

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5] */

function filterOddElements(array){
    const result = [];
    
    for(let i = 0; i <= array.length; i++){
        const candidate = array[i];
        
        if(candidate % 2 === 1){
            result.push(candidate);
        }
    }
    return result;
 
 /* return array.filter(el => el % 2 === 1)*/
}


var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]