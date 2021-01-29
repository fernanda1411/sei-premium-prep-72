/*We are going to complete a function that takes in two parameters, both numbers representing totals for dogs and cats, determines if dogs are more than 8 and cats are fewer than 9, and returns a specific string for each case. Your function should use an if else statement to determine if there are both more than 8 dogs and fewer than 9 cats, and if there are, should return the string 'number of cats and dogs is acceptable', and if not, should return the string 'number of cats or dogs is not acceptable'. Below are examples of the code running, assuming that you will have completed the described function: balancePets.

var result1 = balancePets(9, 8);
console.log('should log "number of cats and dogs is acceptable":', result1);

var result2 = balancePets(7, 12);
console.log('should log "number of cats or dogs is not acceptable":', result2);

var result3 = balancePets(7, 7);
console.log('should log "number of cats or dogs is not acceptable":', result3);

var result4 = balancePets(5, 14);
console.log('should log "number of cats or dogs is not acceptable":', result4); */

function balancePets(dogs, cats) {
    // if there are more than 8 dogs and fewer than 9 cats
      // return 'number of cats and dogs is acceptable'
    // otherwise
      // return 'number of cats or dogs is not acceptable'
    if(dogs > 8 && cats < 9){
        return 'number of cats and dogs is acceptable';
    }else{
        return 'number of cats or dogs is not acceptable';
    }
}

var result1 = balancePets(9, 8);
console.log('should log "number of cats and dogs is acceptable":', result1);

var result2 = balancePets(7, 12);
console.log('should log "number of cats or dogs is not acceptable":', result2);

var result3 = balancePets(7, 7);
console.log('should log "number of cats or dogs is not acceptable":', result3);

var result4 = balancePets(5, 14);
console.log('should log "number of cats or dogs is not acceptable":', result4);