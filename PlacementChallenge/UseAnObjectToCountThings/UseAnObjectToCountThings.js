/*
Complete a function called countAllCharacters. 
Given a string, your function returns an object where each key is a character 
in the given string. The value of each key should be how many times each character 
appeared in the given string.

Notes:

If given an empty string, countAllCharacters should return an empty object.
*/

function countAllCharacters(str) {
    
    const obj = {};    
          
    for(let i = 0; i < str.length; i++){
        const currentChar = str[i];
        if (obj[currentChar]) {
            obj[currentChar]++;
        } else {
            obj[currentChar] = 1;
        }
    }
    
    return obj;
  }
  
  
  // currentChar = "b"
  // obj = {
  //     b: 1
  // }
  
  