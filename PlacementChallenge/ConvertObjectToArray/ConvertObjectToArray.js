/*Complete a function called convertObjectToArray which converts an object literal into an array of arrays, like this:

Argument:

var input = {
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:

var output = [['name', 'Holly'], ['age', 35], ['role', 'producer']]
Note that the input may have a different number of properties than the given sample.*/


function convertObjectToArray(obj) {
    let output = [];
    
    for(let key in obj){
      output.push([key, obj[key]]);
    }
    
    return output;
}


var input = {
    name: 'Holly',
    age: 35,
    role: 'producer'
}

var output = [['name', 'Holly'], ['age', 35], ['role', 'producer']];

