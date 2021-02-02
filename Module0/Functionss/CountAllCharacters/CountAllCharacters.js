/* Write a function called "countAllCharacters".

Given a string of characters, "countAllCharacters" returns an object where each key is a character in the given string, with its value being how many times that character appeared in the given string. If given an empty string, your function should return an empty object.

*/


function countAllCharacters(string) {
    let objChar = {};
  
    if(string === ''){
      return objChar;
    }
  
    for(let i = 0; i < string.length; i++){
      const strChar = string[i];
  
      if(typeof objChar[strChar] === 'undefined'){
        objChar[strChar] = 1;
      } else {
        objChar[strChar] += 1;
      }
    }
    return objChar;
}


var result1 = countAllCharacters('banana');
console.log('should log "{b: 1, a: 3, n: 2}":', result1);

var result2 = countAllCharacters('');
console.log('should log "{}":', result2);