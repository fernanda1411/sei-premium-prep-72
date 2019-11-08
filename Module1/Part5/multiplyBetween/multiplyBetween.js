/*
Write a function called "multiplyBetween".

Given 2 integers, "multiplyBetween" returns the product 
between the two given integers, beginning at num1, and excluding num2.

Notes:

The product between 1 and 4 is 1 * 2 * 3 = 6.
If num2 is not greater than num1, it should return 0.
*/

function multiplyBetween(num1, num2){
    let product = 1;
    
    if ( num1 >= num2) {
        return 0;
    }
  
    for (let i = num1; i < num2; i++){
        product = product * i;
    }
    return product;
}

var output = multiplyBetween(2, 5);
console.log(output); // --> 24