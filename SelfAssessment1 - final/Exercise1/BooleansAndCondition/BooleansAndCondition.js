/*
Write a function wasItFunny which takes in a boolean argument (input value), 
and returns "meh" if the input was false, and "HAHAHA" if the input was true.


//Write a function wasItFunny
//takes in a boolean argument (response) -  true or false
  //(response) is a boolean. It's value is either true or false. Here it would already be true // doesn't need to put === to true
    // returns "HAHAHA"
  //if the input is false
    //returns "meh"
  
*/

function wasItFunny(response) {
  if (response) {
    return "HAHAHA";
  } else {
    return "meh";
  }
}

wasItFunny(true); //"HAHAHA"
wasItFunny(false); //"meh"

//possible answer2
function wasItFunny2(response) {
  // early return
  if (response) {
    return "HAHAHA";
  } 
  return "meh";
}

//possible answer3
function wasItFunny3(response) {
  // ternary operator
  return response ? "HAHAHA" : "meh";
}

//possible answer4
const wasItFunny4 = response => response ? "HAHAHA" : "meh";
 

