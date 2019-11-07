/*
Write a function introduceMe which takes in 
2 arguments (input values): a string and a number. 
The function should return a string excitedly saying 
your name and how many pets you currently have.


//Write a function introduceMe
//takes in 2 arguments (name, numPets)
//return a string
    //saying your name and how many pets you currently have

*/

function introduceMe(name, numPets) {
    return 'Hi I am' + name + 'and I have' + numPets + 'pet(s)';
}

introduceMe("Alex", 2); //"Hi I am Alex and I have 2 pet(s)"
introduceMe("Sam", 0); //"Hi I am Sam and I have 0 pet(s)"


//possible answer2
function introduceMe2(name, numPets) {
    return `Hi I am ${name} and I have ${numPets} pet${numPets > 0 ? 's' : ''}`; // templet string
}