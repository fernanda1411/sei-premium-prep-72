/* We are going to complete a function that takes in one parameter, determines if that parameter is defined, and returns a specific string if it is. Your function should use an if statement to determine if the input parameter is defined, and if it is, should return the string 'Input is defined'. Below are examples of the code running, assuming that you will have completed the described function: isItUndefined.

var result1 = isItUndefined('anything');
console.log('should log "Input is defined":', result1);

var result2 = isItUndefined();
console.log('Should log undefined, because function returned nothing:', result2);*/

function isItUndefined(param) {
    // if param is defined (or not undefined)
      // return 'Input is defined'
      if(param !== undefined){
          return 'Input is defined';
      }
}

var result1 = isItUndefined('anything');
console.log('should log "Input is defined":', result1);

var result2 = isItUndefined();
console.log('Should log undefined, because function returned nothing:', result2);
