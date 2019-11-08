/*
Write a function called "multiply".

Given 2 numbers, "multiply" returns their product.

Notes:

It should not use the multiply operator - *
*/

function multiply(num1, num2) {
    let product = 0;
  
    for(let i = 0; i < num2; i++) { 
        product += num1; 
    }
    
    if(num2 < 0){
        while(num2 < 0) {
            product -= num1; 
            num2++ ;
        }
    }
  return product;
}

var output = multiply(4, 7);
console.log(output); // --> 28