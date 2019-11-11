/*
Write a function called decorateClassListWithAges. Convert from an array, in this case a class list of names, to an array of object literals decorated with a name and an age for each student. Your decorateClassListWithAges function should use the provided getRandomIntInclusive as part of its solution. (The ages should be randomly generated for each student, either age 10 or age 11)

The "test suite" that you write for this question will be one of the most complex we have seen so far. In order to verify that your code works as expected, you will need to find a way to iterate over the actual array result of your function, then ensure that the age value for each object in your result is "within the range" of 10 to 11. If you are having tremendous difficulty constructing your test suite, please feel free to consult the reference answers.

While you should create your own test suite to get the most out of this exercise, there are automated tests provided as well.


Example:

// Sample Input
var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

// Sample Output
var classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
{"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
{"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
{"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
{"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
{"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
{"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
{"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
{"name":"Dora","age":10}]


*/

// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  let decoratedClassList = [];

  for (let i = 0; i < classList.length; i++) {
    // creates an object for each string in the input array, with an age of 10 or 11
    let studentObj = {
      name: classList[i],
      age: getRandomIntInclusive(10, 11)
    };
    decoratedClassList.push(studentObj);
  }
  // returns an array of these objects
  return decoratedClassList;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertWithinRange(low, high, actual, testName) {
  let inRange = low <= actual && actual <= high;
  if (inRange) {
    console.log("passed [" + testName + "]");
  } else {
    console.log(
      "FAILED [" +
        testName +
        '] "' +
        actual +
        '" not within range ' +
        low +
        " to " +
        high
    );
  }
}

// TESTS CASES
function testDecorateStudentList() {
  let classList = [
    "Joe",
    "Jack",
    "John",
    "Fred",
    "Frank",
    "Barry",
    "Larry",
    "Mary",
    "Harry",
    "Farrell",
    "Susan",
    "Monica",
    "Keira",
    "Caroline",
    "Harriet",
    "Erica",
    "Luann",
    "Cheryl",
    "Beth",
    "Rupa",
    "Linda",
    "Allison",
    "Nancy",
    "Dora"
  ];

  let decoratedList = decorateClassListWithAges(classList);

  for (let i = 0; i < decoratedList.length; i++) {
    assertWithinRange(
      10,
      11,
      decorateList[i].age,
      "renders all ages either 10 or 11"
    );
  }
}
