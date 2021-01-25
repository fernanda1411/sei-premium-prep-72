/*
Write a function convertTo which takes in a string and a number.

If the string input is "cm", then the function should convert the 2nd 
argument into centimeters by multiplying it to 2.54 and returning that value.
If the string input is "in", then the function should convert the 2nd argument 
into inches by dividing it by 2.54


//if string(units) === cm
  //convert the 2nd argument(num) * 2.54
//return value
//if string(unites) === in
  //convert the 2nd argument(num) / 2.54

*/

function convertTo(units, num) {
    if (units ===  'cm') {
      return num * 2.54;
    } else {
      return num / 2.54;
    }
  }
  
  convertTo('cm', 100); //254
  convertTo('in', 50.8); //20