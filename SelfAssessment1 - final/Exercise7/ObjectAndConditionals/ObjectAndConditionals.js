/*
Write a function isItExpensive which takes in an object 
argument (input value). You can assume this object always 
has a price property. Your function should behave as follows: 
it should check the value of price.

If that value is less than 100, return false.
If the value is greater than or equal to 100, return true.
However, if the value is null, return the string "no data".


//Write a function isItExpensive
//takes in an object argument (item)
    //this object always(const) has a price property  .price
        //it should check the value of price
        // const price = item.price
            //if 
                //value(price) is < 100
            //return false
            //else
                //value(price) is >=
                 100
            //return true
        //if
            //value(price) is null
        //return the string "no data"


*/

function isItExpensive(item) {
    const price = item.price;
    // < 100
    if(price < 100){
      return false;
    }
    // >=100
    if(price >= 100){
      return true;
    }
     // null
     if(price === null){
      return 'no data';
     }
}

var appleWatch = {price: 400}
var applesAndWatches = {price: 30}
var watchingApples = {price: null}

isItExpensive(appleWatch); //true
isItExpensive(applesAndWatches); //false
isItExpensive(watchingApples); //"no data"


//possible answer2
function isItExpensive2(item) {
    // null
    if(price === null){
        return 'no data';
    }

    return price >= 100;
}