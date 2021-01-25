/*
Write a function sayFavoriteFood which takes in an object with a 
name and favoriteFood property. The function will return a string 
stating the person's name and favorite food. You can assume that 
the input object will always have these two properties.

For example:

var person = { name : "Kevin", favoriteFood : "tacos" };
sayFavoriteFood(person);
Will return: "Kevin's favorite food is tacos"
*/

function sayFavoriteFood(obj){
    let name = obj["name"];
    let favoriteFood = obj["favoriteFood"];
    return name + "\'s favorite food is " + favoriteFood;
}