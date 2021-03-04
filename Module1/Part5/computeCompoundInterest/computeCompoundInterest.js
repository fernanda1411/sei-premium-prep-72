/*Write a function called "computeCompoundInterest".

Given a principal, an interest rate, a compounding frequency, and a time (in years), "computeCompoundInterest" returns the amount of compound interest generated.

var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.8368221341061
Reference: https://en.wikipedia.org/wiki/Compound_interest#Calculation_of_compound_interest  This shows the formula used to calculate the total compound interest generated. */


function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  const p = principal;
  const r = interestRate;
  const n = compoundingFrequency;
  const t = timeInYears;

 return p * ((1 + (r / n)) ** (t * n)) - p;

}


var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.8368221341061



// function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
//     // principal  x
//     // interestRate
//     // compoundingFrequency
//     // timeInYears
  
//   //     1 - add interest to principal
//   //     during  timeInYears  every compoundingFrequency
//   //     principal = principal + (principal * interestRate)
    
//     let princ = principal;
//     let totalMonths = timeInYears * 12;
  
//     for (
//         let currentMonth = compoundingFrequency; 
//         currentMonth <= totalMonths; 
//         currentMonth += compoundingFrequency
//       ){
//         princ = princ + (princ * interestRate);
//         console.log(princ)
//     }
//     return princ - principal;
//   }

//   var output = computeCompoundInterest(100, .1, 12, 1);



