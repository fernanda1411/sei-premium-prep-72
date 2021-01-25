/*
Default Parameters
Learning Objectives
By the end of this lesson you will be able to:

Declare defaults to functions parameters
Setting default parameters
We often want to declare some sort of default values for when we use a function. 
Before, you may have done something like this:

function greet (person, greeting) {
  greeting = greeting || 'Hello'
  var name = person.name || 'Anonymous'
  return `${greeting}! My name is ${name}.`
}
With ES6, we can use default parameters in the function signature:

function greet (person, greeting='Hello') {
  var name = person.name || 'Anonymous'
  return `${greeting}! My name is ${name}.`
}
This solves the problem of having to declare the default value in our function body. 
We can also set more complex defaults:

function greet (person={ name: 'Anonymous' }, greeting='Hello') {
  var name = person.name
  return `${greeting}! My name is ${name}.`
}
This solves two problems:

We no longer have the problem of having to declare the default value in the function body.
If person is not passed in, before we would have received a TypeError saying that we cannot
 call .name on undefined. We now have solved that problem too.
As with everything, solving problems can sometimes create others. An important thing to keep 
in mind with all of this new syntax.

Resources
MDN: Default Parameters 
You Don't Know JS: Default Parameters 

Update the code below to correctly use default parameters.
*/

function constructPerson(name, age, hobbies) {
  name = name || "Anonymous";
  age = age || 0;
  hobbies = hobbies || [];

  const person = {
    name: name,
    age: age,
    hobbies: hobbies
  };

  return person;
}
