/*
Write a function called "removeStringValuesLongerThan".

Given an number and an object, "removeStringValuesLongerThan" 
removes any properties on the given object whose values are strings 
longer than the given number.
*/

function removeStringValuesLongerThan(num, obj) {
    for(let key in obj){
       if(obj[key].length > num){
           delete obj[key];
       }
   }
}

var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };
  removeStringValuesLongerThan(6, obj);
  console.log(obj); // { age: 20, location: 'Texas' }