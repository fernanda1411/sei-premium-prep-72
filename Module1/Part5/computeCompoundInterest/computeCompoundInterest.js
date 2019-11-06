function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
    // principal  x
    // interestRate
    // compoundingFrequency
    // timeInYears
  
  //     1 - add interest to principal
  //     during  timeInYears  every compoundingFrequency
  //     principal = principal + (principal * interestRate)
    
    let princ = principal;
    let totalMonths = timeInYears * 12;
  
    for (
        let currentMonth = compoundingFrequency; 
        currentMonth <= totalMonths; 
        currentMonth += compoundingFrequency
      ){
        princ = princ + (princ * interestRate);
        console.log(princ)
    }
    return princ - principal;
  }

// var output = computeCompoundInterest(1500, .043, 4, 6);
// console.log(output); // --> 438.8368221341061

var output = computeCompoundInterest(100, .1, 12, 1);