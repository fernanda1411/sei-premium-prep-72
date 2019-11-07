/*
Write a function addOnlyFirstFourNums which takes in 
an array argument (input value) and returns the value 
of only the first four numbers added to each other. 
You can assume that the input array will always have 
at least 4 numbers, and will only have number values.

//Write a function addOnlyFirstFourNums
//takes in an array argument (numbers)
//returns the value of only the first four numbers added to each other.
    //for loop with only 4 numbers
      //returns the value      
*/

function addOnlyFirstFourNums(numbers) {
  let value = 0;

  for (let i = 0; i < 4; i++) {
    value += numbers[i];
  }

  return value;
}

addOnlyFirstFourNums([40, 600, 8000, 2, 19, 25, 60, 90]); //8642
