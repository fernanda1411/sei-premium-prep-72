/*
Write a function isItExpensive which takes in an object 
argument (input value). You can assume this object always 
has a price property. Your function should behave as follows: 
it should check the value of price.

If that value is less than 100, return false.
If the value is greater than or equal to 100, return true.
However, if the value is null, return the string "no data".
*/

function isItExpensive(item) {
    
}

var appleWatch = {price: 400}
var applesAndWatches = {price: 30}
var watchingApples = {price: null}

isItExpensive(appleWatch); //true
isItExpensive(applesAndWatches); //false
isItExpensive(watchingApples); //"no data"
