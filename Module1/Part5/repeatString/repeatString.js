/*
Write a function called "repeatString".

Given a string and a number, "repeatString" returns 
the given string repeated the given number of times.
*/

function repeatString(string, num) {
  let repeat = "";

  for (let i = 1; i <= num; i++) {
    repeat += string;
  }
  return repeat;
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'