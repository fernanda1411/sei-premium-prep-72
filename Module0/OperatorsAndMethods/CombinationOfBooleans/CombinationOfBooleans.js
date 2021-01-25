/*We are going to complete a function that takes in three boolean parameters (bool_1, bool_2, and bool_3). Your function should create a variable and assign it to the result of the following: bool_1 AND either bool_2 OR bool_3. Below are examples of the code running, assuming that you will have completed the described function: combination.

var outputTrue = combination(true, true, false);
console.log('should be true:', outputTrue);

var outputFalse = combination(false, true, true);
console.log('should be false:', outputFalse); */

function combination(bool_1, bool_2, bool_3) {
    // create a result variable
    // assign it to bool_1 AND either bool_2 OR bool_3
    // return the result variable
    const result = ((bool_1 && bool_2) || (bool_1 && bool_3));
    return result;
}

var outputTrue = combination(true, true, false);
console.log('should be true:', outputTrue);

var outputFalse = combination(false, true, true);
console.log('should be false:', outputFalse);
