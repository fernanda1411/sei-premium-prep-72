/*
Write a function isWordLong which takes in a string argument (input value), 
and returns true if the string is longer than 15 characters, 
and false if the string is less than or equal to 15 characters. 
You can assume that the input string will only contain letters.
*/

//Write a function isWordLong
//takes in a string argument (word)
//returns true
  //if the string is longer(length) > 15 
//false
  //length <=  15
//input string will only contain letters 


function isWordLong(word) {
  if (word.length > 15) {
    return true;
  } else 
    return false;
}


isWordLong('absentmindedness'); //true
isWordLong('aerodynamics'); //false

//possible answer2
function isWordLong2(word) {
  return word.length > 15;
}

//possible answer3
const isWordLong3 = word => word.length > 15;