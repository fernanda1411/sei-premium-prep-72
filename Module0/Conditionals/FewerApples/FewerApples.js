/* We are going to complete a function that takes in two parameters, both numbers representing totals for apples and oranges, determines if there are fewer apples than oranges, and if so, returns a specific string. Your function should use an if statement to determine if there are fewer apples than oranges, and if there are, should return the string 'There are fewer apples than oranges'. Below are examples of the code running, assuming that you will have completed the described function: fewerApples.

var result1 = fewerApples(4, 7);
console.log('should log "There are fewer apples than oranges":', result1);

var result2 = fewerApples(19, 12);
console.log('Should log undefined, because function returned nothing:', result2);*/

function fewerApples(apples, oranges) {
    // if there are fewer apples than oranges
      // return 'There are fewer apples than oranges'
    if(apples < oranges){
        return 'There are fewer apples than oranges';
    }
}

var result1 = fewerApples(4, 7);
console.log('should log "There are fewer apples than oranges":', result1);

var result2 = fewerApples(19, 12);
console.log('Should log undefined, because function returned nothing:', result2);