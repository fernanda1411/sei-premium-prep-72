/*We are going to complete a function that takes in two parameters, both will be strings (activity, dayOfTheWeek), and returns a message based on the inputs. Your function should create a new variable, assign it to an expression which will interpolate the parameters into a message (described below), then return that variable. Below are examples of the code running, assuming that you will have completed the described function: interpolateAString.

var resultMessage1 = interpolateAString('hiking', 'Tuesday');
console.log("should log 'We will go hiking on Tuesday.':", resultMessage1);

var resultMessage2 = interpolateAString('dancing', 'Friday');
console.log("should log 'We will go dancing on Friday.':", resultMessage2); */

function interpolateAString(activity, dayOfTheWeek) {
    // create a result variable
    // assign it to an expression which interpolates the input parameters into the described message
    // return the result variable
    const result = `We will go ${activity} on ${dayOfTheWeek}.`;
    return result;
}


var resultMessage1 = interpolateAString('hiking', 'Tuesday');
console.log("should log 'We will go hiking on Tuesday.':", resultMessage1);

var resultMessage2 = interpolateAString('dancing', 'Friday');
console.log("should log 'We will go dancing on Friday.':", resultMessage2);