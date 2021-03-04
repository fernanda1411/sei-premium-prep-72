/*
We are going to complete a function called filter. 

It should behave similarly to the native array method of the 
same name from the previous lesson.

However, your implementation should not use Array.prototype.filter, i.e. should not look like this:

function filter(array, callbackFunction) {
  return array.filter(callbackFunction);
}
Here is an example to get a sense of what filter should do.

var input = [1, 2, 3, 4];
var output = filter(input, function(value) {
  return value % 2 === 0;
})

console.log(output); // [2, 4]

*/

function filter(array, callbackFunction) {
  const result = [];

  for(let i = 0; i < array.length; i++){
    const candidate = array[i];
    if(callbackFunction(candidate)){
      result.push(candidate);
    }
  }
  return result;
}

console.log(filter([2, 4, 5, 7, 8], el => el > 4));