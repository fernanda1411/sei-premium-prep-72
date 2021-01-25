/*
Complete a function called convertObjectToArray which converts an 
object literal into an array of arrays, like this:

Argument:

var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
}

Note that the input may have a different number of properties than the given sample.
*/

function convertObjectToArray(obj) {
  const output = []; // output[]

  // for(let key in obj) {  // name
  //     const arr = [];  // arr[]
  //     arr.push(key);  // arr["age"]
  //     arr.push(obj[key]); // arr["age", "35"]
  //     output.push(arr); // output[arr["name", "Holly"], arr["age", "35"]]
  // }

  for (let key in obj) {
    output.push([key, obj[key]]);
  }

  return output;
}


var output = [['name', 'Holly'], ['age', 35], ['role', 'producer']]