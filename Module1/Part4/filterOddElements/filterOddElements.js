/*
Write a function called "filterOddElements".

Given an array of numbers, "filterOddElements" 
returns an array containing only the odd numbers of the given array.
*/

function filterOddElements(arr) {
   
    let odd = [];
    
     for(let num = 0; num < arr.length; num++ ) {
         if(arr[num] % 2 !== 0 ) {
         odd.push(arr[num]);
         }
     }
     return odd;
 }
 
 
 var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]