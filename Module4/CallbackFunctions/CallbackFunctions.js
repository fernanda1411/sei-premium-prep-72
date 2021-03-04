/*
In the code snippet below there are two functions: cbFunction and caller. 
You need to invoke cbFunction from inside caller, passing forward the arguments 
and return that result. Yes, this example is a little mechanical, but we will see 
many practical applications of this soon!

*/

function cbFunction(x, y, z) {
  return x + y + z;
}

function caller(x, y, z, cbFunction) {
  console.log("In caller function!");
  return cbFunction(x, y, z);
}

let x = caller(1, 2, 3, cbFunction);


console.log(x)