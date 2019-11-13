/*
THIS IS AN OPTIONAL, ALBEIT USEFUL EXERCISE

Object Oriented Programming in JavaScript
This problem delves into a topic that we have not discussed yet. 
Object oriented programming in JavaScript is something that we 
will not go over directly during this course, however, the idea 
is relatively straightforward. Consider the case wherein we wish 
to create multiple objects, all of which have a relatively similar 
structure. We are also going to, rather than declaring functions as 
we have previously, assigns variables (this time properties of the prototype) 
to be function values. This works nearly identically as declaring functions. 
In general, when assign a variable to a function value, this is the rule we 
must follow:

// declaring a function means we can call that function anywhere within 
the scope our of declaration
// meaning we can call it above where it is declared if desired
declared('hello world');

function declared(param) {
  console.log(param);
}
However:

assigned('hello world'); // this code will not work, as "assigned" 
is not defined until after line 21

var assigned = function(param) {
  console.log(param);
}
A commonly used example for object oriented programming is creating virtual cars:

// this is a constructor function, we will use it to create new instances of our cars
function Car(color, type) {
  this.color = color;
  this.type = type;
  this.gas = 12;
}

// below are methods that we have attached to the car's PROTOTYPE chain
Car.prototype.drive = function() {
  this.gas -= 1;
}

Car.prototype.paintJob = function(color) {
  this.color = color;
}
In order to make use of this set of code, we have to create a new 
instance of our car. Below is a demonstration of using the new keyword 
to generate a new instance of our constructor Car function.

// now we can generate a new instance of Car using the constructor 
function as follows:
var myCar = new Car("blue", "sedan");
console.log('myCar:', myCar);
Picture that when we say new Car("blue", "sedan"), what is 
happening inside the constructor function is essentially this:

function Car(color, type) {
  // var this = {};
  this.color = color;
  this.type = type;
  this.gas = 12;
  // return this;
}
this is a context object, and is relatively complicated. 
For now, struggling through and playing with the code 
provided in the exercise below should be enough of an 
introduction to this topic. We will go into more detail 
as the Immersive program unfolds.

// furthermore, we can call methods on myCar. Essentially, 
this format allows each instance to have access to a collection of methods
myCar.drive(); // this is how we call the method
console.log('myCar after driving once:', myCar);
Challenge
Your code should accept an array of numbers that represent a phone number. 
E.g., [6, 5, 0, 8, 3, 5, 9, 1, 7, 2]. You code should return a string in 
this format: '(650) 835-9172'.

One version of an implementation:

function renderPhoneNumber(numbers){
  return '(' + numbers[0] + numbers[1] + numbers[2] + ') '
    + numbers[3] + numbers[4] + numbers[5] + '-'
    + numbers[6] + numbers[7] + numbers[8] + numbers[9];
}
This is not ideal, so here is our aim. Read the object-oriented skeleton. 
After you understand the flow of processing that it sketches out, 
fill in the implementation. If you find yourself hopelessly lost, 
please feel free to consult to reference answer for this challenge.

Notes:

Do not leave any methods unused.

*/

// Skeleton

// FUNCTION DEFINITION(S)
function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = "";
  string += this.parenthesize(this.getAreaCode());
  string += " ";
  string += this.getExchangeCode();
  string += "-";
  string += this.getLineNumber();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  return "" + this.slice(0, 3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  return "" + this.slice(3, 6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  return "" + this.slice(6, 10);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return "(" + string + ")";
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join("");
};

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual !== expected) {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  } else {
    console.log("PASSED [" + testName + "]");
  }
}

// TESTS CASES
var formatter = new PhoneNumberFormatter([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]);
assertEqual(
  formatter.render(),
  "(650) 835-9172",
  "should render phone number in correct format"
);
