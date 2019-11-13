/*
You have a fashion catalog, an inventory of items from various high-fashion designers. Each designer has a lineup of shoes. Each shoe has a name and a price.

It looks like this:

var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];


Write a function that will take in this currentInventory array as its argument. Your function should access all the shoes across each designer and return them out in a flat list: {designer name} - {shoe name} - {price}{designer name} - {shoe name} - {price}

//...console output:
Brunello Cucinelli, tasselled black low-top lace-up, 1000
Brunello Cucinelli, tasselled green low-top lace-up, 1100
// and so on...
Here is an example of a flat list in code:

var flatList = "First line\nSecond Line\nThird Line";
console.log(flatList);
Observe that a "flat list" refers to a string where each new line is separated by the newline symbol. Also note that the "flat list" does not end with a newline symbol. There are, like all of the challenges in this course, tests attached to these exercises. However, in order to get the most effective practice, please continue to write your own unit tests.

*/


function renderInventory(inventory) {
  // create flat list string
  let flatList = "";
  
  // iterate over the inventory array
  for(let i = 0; i < inventory.length; i++) {
      
    // assign a variable to be the current designer object
    let designerObject = inventory[i];
    
    // iterate over the current designer object's shoes array
    for (let j = 0; j < designerObject.shoes.length; j++) {
        
      // add to our flat list: designer name, shoe name, shoe price,
      flatList += designerObject.name + ', ' + designerObject.shoes[j].name + ', ' + designerObject.shoes[j].price;
      
      // if we are not on last shoe in entire Inventory
      // last shoe is when i at maximum and j is at its maximum
      if ((i === inventory.length - 1) && (j === designerObject.shoes.length - 1)) {
        continue;
      } else {
        flatList += '\n'
      }
    }
  }
  // return flat list string
  return flatList;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}
