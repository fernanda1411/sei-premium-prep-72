/* We are going to complete a function that takes three parameters, an object, a string key, and a newValue, and returns the object after performing a reassignment. Your function should reassign the property's value within the object, located at the string key, to the newValue parameter, and should then return the newly changed object. Below is an example of the code running, assuming that you will have completed the described function: reassignAProperty.

var resultObject = reassignAProperty({name: 'Ramses', favoriteFood: 'chicken', type: 'dog'}, 'favoriteFood', 'goose');
console.log('should replace "chicken" with "goose":', resultObject);*/

function reassignAProperty(object, key, newValue) {
    // reassign the property's value in the object, located at the key, to the newValue parameter
    // return the input object
    object[key] = newValue;
    return object;
}

var resultObject = reassignAProperty({name: 'Ramses', favoriteFood: 'chicken', type: 'dog'}, 'favoriteFood', 'goose');
console.log('should replace "chicken" with "goose":', resultObject);