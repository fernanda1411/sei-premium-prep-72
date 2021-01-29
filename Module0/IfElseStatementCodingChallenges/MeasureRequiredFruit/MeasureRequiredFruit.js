/*We are going to complete a function that takes in one parameter, an object containing the fruit totals for a project, and determines whether the listed total for bananas is greater than 3 and the listed total for strawberries is greater than 10, and returns a specific string for each case. Your function should use an if else statement to determine if the totals of bananas and strawberries are sufficient, and if they are, should return the string 'We have enough fruit, with ' + {totalBananas} + ' bananas, and ' + {totalStrawberries} + ' strawberries', where {totalBananas} and {totalStrawberries} are the numbers of each fruit in the fruit totals object. If they are not, your function should return the string 'We do not have enough of both fruits'. Below are examples of the code running, assuming that you will have completed the described function: measureRequiredFruit.

var result1 = measureRequiredFruit({bananas: 4, strawberries: 12});
console.log('should log "We have enough fruit, with 4 bananas, and 12 strawberries":', result1);

var result2 = measureRequiredFruit({bananas: 5, strawberries: 15});
console.log('should log "We have enough fruit, with 5 bananas, and 15 strawberries":', result2);

var result3 = measureRequiredFruit({bananas: 2, strawberries: 12});
console.log('should log "We do not have enough of both fruits":', result3);

var result4 = measureRequiredFruit({bananas: 5, strawberries: 8});
console.log('should log "We do not have enough of both fruits":', result4);

var result5 = measureRequiredFruit({bananas: 3, strawberries: 9});
console.log('should log "We do not have enough of both fruits":', result5);*/

function measureRequiredFruit(fruitTotals) {
    // if there are more than 3 bananas and more than 10 strawberries
      // return 'We have enough fruit, with {totalBananas} bananas, and {totalStrawberries} strawberries'
    // otherwise
      // return 'We do not have enough of both fruits'
    const totalBananas = fruitTotals.bananas;
    const totalStrawberries = fruitTotals.strawberries;
      
    if(totalBananas > 3 && totalStrawberries > 10){
        return 'We have enough fruit, with ' + totalBananas + ' bananas, and ' + totalStrawberries +  ' strawberries';
    }else{
        return 'We do not have enough of both fruits';
    }
}


var result1 = measureRequiredFruit({bananas: 4, strawberries: 12});
console.log('should log "We have enough fruit, with 4 bananas, and 12 strawberries":', result1);

var result2 = measureRequiredFruit({bananas: 5, strawberries: 15});
console.log('should log "We have enough fruit, with 5 bananas, and 15 strawberries":', result2);

var result3 = measureRequiredFruit({bananas: 2, strawberries: 12});
console.log('should log "We do not have enough of both fruits":', result3);

var result4 = measureRequiredFruit({bananas: 5, strawberries: 8});
console.log('should log "We do not have enough of both fruits":', result4);

var result5 = measureRequiredFruit({bananas: 3, strawberries: 9});
console.log('should log "We do not have enough of both fruits":', result5);
