/*We are going to complete a function that takes in one parameter, a number called shirtWidth, and returns a specific string for four different cases. Your function should use an if else if statement to determine which size t-shirt is appropriate based on the following conditions: if the shirtWidth is greater than or equal to 20, and less than 30, the function returns 'You should select a size S'; if the shirtWidth is greater than or equal to 30, and less than 40, the function returns 'You should select a size M'; if the shirtWidth is greater than or equal to 40, and less than 50, the function returns 'You should select a size L'. If none of these conditions is met, the function returns 'You should select a different shirt'. Below are examples of the code running, assuming that you will have completed the described function: selectShirtSize.

var result1 = selectShirtSize(25);
console.log('should log "You should select a size S":', result1);

var result2 = selectShirtSize(32);
console.log('should log "You should select a size M":', result2);

var result3 = selectShirtSize(47);
console.log('should log "You should select a size L":', result3);

var result4 = selectShirtSize(12);
console.log('should log "You should select a different shirt":', result4);

var result5 = selectShirtSize(67);
console.log('should log "You should select a different shirt":', result5); */


function selectShirtSize(choice) {
    // if shirt is greater than or equal 20 and less than 30
      // return 'You should select a size S'
    // otherwise if shirt is greater than or equal to 30 and less than 40
      // return 'You should select a size M'
    // otherwise if shirt is greater than or equal to 40 and less than 50
      // return 'You should select a size L'
    // otherwise
      // return 'You should select a different shirt'
    if(choice >= 20 && choice < 30){
        return 'You should select a size S';
    }else if(choice >= 30 && choice < 40){
        return 'You should select a size M';
    }else if(choice >= 40 && choice < 50){
        return 'You should select a size L';
    }else{
        return 'You should select a different shirt';
    }
}

var result1 = selectShirtSize(25);
console.log('should log "You should select a size S":', result1);

var result2 = selectShirtSize(32);
console.log('should log "You should select a size M":', result2);

var result3 = selectShirtSize(47);
console.log('should log "You should select a size L":', result3);

var result4 = selectShirtSize(12);
console.log('should log "You should select a different shirt":', result4);

var result5 = selectShirtSize(67);
console.log('should log "You should select a different shirt":', result5);