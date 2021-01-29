/*We are going to complete a function that takes in one parameter, a string representing a password, determines whether the password is longer than 8 characters, and returns a specific string for each case. Your function should use an if else statement to determine if the input string is long enough, and if it is, should return the string 'Password is long enough', and if it is not, should return the string 'Please enter a password of at least 9 characters'. Below are examples of the code running, assuming that you will have completed the described function: passwordLongEnough.

var result1 = passwordLongEnough('passafassaword');
console.log('should log "Password is long enough":', result1);

var result2 = passwordLongEnough('wordpass');
console.log('Should log "Please enter a password of at least 9 characters":', result2); */

function passwordLongEnough(password) {
    // if password length is greater than 8
      // return 'Password is long enough'
    // otherwise
      // return 'Please enter a password of at least 9 characters'
    if(password.length > 8){
        return 'Password is long enough';
    }else{
        return 'Please enter a password of at least 9 characters';
    }
}

var result1 = passwordLongEnough('passafassaword');
console.log('should log "Password is long enough":', result1);

var result2 = passwordLongEnough('wordpass');
console.log('Should log "Please enter a password of at least 9 characters":', result2);