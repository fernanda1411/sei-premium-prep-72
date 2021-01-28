/*We are going to complete a function that takes in one parameter, an array, and returns the input array's last element. Your function should determine the length of the input array minus 1, and assign it to a lastIndex variable. Your function should also create a lastElement variable and assign it to an expression which uses lastIndex to access the last element in the array, and return the lastElement variable. Below are examples of the code running, assuming that you will have completed the described function: getLastElement.

var resultLastElement1 = getLastElement([1, 2, "buckle", "my", "shoe"]);
console.log('should log "shoe":', resultLastElement1);

var resultLastElement2 = getLastElement([3, 4, "shut", "the", "door"]);
console.log('should log "door":', resultLastElement2); */

function getLastElement(array) {
    // create a lastIndex variable
    // assign it to the last index in the array
    // create a lastElement variable
    // assign it to the last element in the string (make use of lastIndex)
    // return the lastElement 
    const lastIndex = array.length - 1;
    const lastElement = array[lastIndex];
    return lastElement;
}


var resultLastElement1 = getLastElement([1, 2, "buckle", "my", "shoe"]);
console.log('should log "shoe":', resultLastElement1);

var resultLastElement2 = getLastElement([3, 4, "shut", "the", "door"]);
console.log('should log "door":', resultLastElement2);
