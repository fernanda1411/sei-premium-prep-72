/*We are going to debug a function that takes in an object, and a target value. This function will iterate over the object's values, and attempt to locate the target value. If the value is found, the function should return the name of the key where the value in question is located, and if not, the function should return -1. Below is an example of the code running, assuming that you will have debugged the described function: keyOfObjectValue:


---Debugging(1)

function keyOfObjectValue(object, target) {
  for (var key in object) {
    if (object[key] === target) {
      return key;
    } else {
      return -1;
    }
  }
}

*/


function keyOfObjectValue(object, target) {
    for (var key in object) {
      if (object[key] === target) {
        return key;
      }
    }
    
    return -1;
}

var result1 = keyOfObjectValue({cucumbers: 14, carrots: 20, peas: 400}, 20);
console.log('should log "carrots":', result1);

var result2 = keyOfObjectValue({name: 'Bruce Wayne', hero: 'Batman', city: 'Gotham'}, 'Superman');
console.log('should log -1:', result2);