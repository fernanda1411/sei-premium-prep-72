/*
Complete the function 'interpolate'. 
This function will take in a string parameter, and return a string as follows:
*/

function interpolate(favoriteFood) {
 
    return `My favorite food is ${favoriteFood}!`
}

var message1 = interpolate("turkey");
console.log(message1); // "My favorite food is turkey!"

var message2 = interpolate("tofurkey");
console.log(message2); // "My favorite food is tofurkey!"