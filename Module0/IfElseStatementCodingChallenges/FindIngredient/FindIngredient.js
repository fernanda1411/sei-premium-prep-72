/*We are going to complete a function that takes in two parameters, an array of ingredients for a recipe, and an ingredient to search for within that array, determines whether the ingredient to search for is present within the array, and returns a specific string for each case. Your function should use an if else statement to determine if the ingredient to search for is present within the list of ingredients, and if it is, should return the string '{ingredientToSearchFor} is on the list', and if not, should return the string '{ingredientToSearchFor} is not on the list', where {ingredientToSearchFor} has the value of the argument the function is called on. Below are examples of the code running, assuming that you will have completed the described function: findIngredient.

var result1 = findIngredient(['flour', 'butter', 'sugar', 'eggs'], 'sugar');
console.log('should log "sugar is on the list":', result1);

var result2 = findIngredient(['milk', 'cereal', 'fruit'], 'pop-tarts');
console.log('should log "pop-tarts is not on the list":', result2);*/

function findIngredient(ingredientList, ingredientToSearchFor) {
    // if ingredientToSearchFor is present within ingredientList
      // return '{ingredientToSearchFor} is on the list'
    // otherwise
      // return '{ingredientToSearchFor} is not on the list'
    const hasIngredient = ingredientList.indexOf(ingredientToSearchFor) >= 0;
    if(hasIngredient){
        return ingredientToSearchFor + ' is on the list';
    }else{
        return ingredientToSearchFor + ' is not on the list';
    }
}

var result1 = findIngredient(['flour', 'butter', 'sugar', 'eggs'], 'sugar');
console.log('should log "sugar is on the list":', result1);

var result2 = findIngredient(['milk', 'cereal', 'fruit'], 'pop-tarts');
console.log('should log "pop-tarts is not on the list":', result2);