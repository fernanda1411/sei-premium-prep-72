/*
Write a function called "computeProductOfAllElements".

Given an array of numbers, "computeProductOfAllElements" 
returns the products of all the elements in the given array.

Notes:

If given array is empty, it should return 0.
*/

function computeProductOfAllElements(arr) {
    let product = 1;
    
    if(arr.length < 1){
        return 0;
    }
    
    for(let i = 0; i < arr.length; i++){
        product = product * arr[i];
    }
    
    return product;
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60