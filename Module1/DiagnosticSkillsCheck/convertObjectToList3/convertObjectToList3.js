/*
Write a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:

Argument:

{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:

[['name', 'Holly'], ['age', 35], ['role', 'producer']]
*/

function convertObjectToList(obj) {
  // converts an object literal into an array of arrays

  let returnArray = [];

  for (let i in obj) {
    let tempArray = [];

    tempArray.push(i);
    tempArray.push(obj[i]);
    returnArray.push(tempArray);
  }
  return returnArray;
}
