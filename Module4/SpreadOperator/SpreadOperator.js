/*
Rest & Spread
Lesson Objectives
By the end of this lesson you will be able to:

Write dynamic code with the rest and spread operators
One symbol, two different operations
The spread and rest operators refer to two different ways to use ... 
to pull apart values from an object or array. The two examples can be seen as such:

// Spread, like peanut butter!
function add (num1, num2) {
  return num1 + num2
}

const numbers = [ 4, 6 ]
console.log(add(...numbers))
// In this case, we spread out each array item as an argument

// Rest, as in all the rest!
const colors = [ 'orange', 'pink', 'aqua' ]
const [ primary, ...others ] = colors

console.log(primary, others)
// In this case, we will log out 'orange' and an array of all other colors

Update the code below to use the spread operator.
*/

function greet(name, greeting) {
  return `${greeting}! My name is ${name}.`;
}

function greetNisha() {
  const personAndGreeting = ["Nisha", "Hi there"];
  // return greet(personAndGreeting[0], personAndGreeting[1]); // this is the line to change
  return greet(...personAndGreeting)
}

console.log(greetNisha())
