/*
Please DO NOT paste code from before.

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


The task now is to find all the laced shoes, but we are going to render them in a somewhat complex format. Your function should return shoe names that contain "lace" in them, and indicate which word contains "lace". The return value's format should be structured like this:

var expectedResult = [
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
];
There are no tests attached to this exercise. In order to get the most effective practice, please continue to write your own unit tests.

*/


// create everything for this problem, functions, assertion function, and test cases
// call your function "generateLaceDetails", and let it take the inventory as its parameter

// FUNCTION DEFINITIONS
function generateLaceDetails(inventory) {
  // create result array for lace detail objects
  var laceDetails = [];
  // iterate over the inventory array
  for (var i = 0; i < inventory.length; i++) {
    // assign a variable to be the current designer object
    var designerObject = inventory[i];
    // iterate over the current designer object's shoes array
    for (var j = 0; j < designerObject.shoes.length; j++) {
      // assign a variable to be the current shoe object
      var currentShoe = designerObject.shoes[j];
      // make a call to a function that will take in a shoe name, and return if that shoe name contains lace
      // if it does contain lace
      if (hasLace(currentShoe.name)) {
        // create a variable and set it equal to the name of the current shoe split on a space
        var nameWordsArray = currentShoe.name.split(' ');
        // create a laced detail object for current lace shoe
        var laceObject = {
          // set nameWords property to be nameWordsArray variable created by splitting shoe name on a space
          nameWords: nameWordsArray,
          // set targetWordIndex to result of calling a function that will take in the nameWordsArray, and return the index where lace is present
          targetWordIndex: getTargetWordIndex(nameWordsArray)
        };
        // push lace detail object onto lace details array
        laceDetails.push(laceObject);
      }
    }
  }
  // return result array
  return laceDetails;
}

// write a function that will take in a shoe name, and return if that shoe name contains lace
function hasLace(shoeName) {
  // expression will be true if name contains lace, false otherwise
  return shoeName.indexOf('lace') > -1;
}

function getTargetWordIndex(nameWordsArray) {
  for (var k = 0; k < nameWordsArray.length; k++) {
    if (nameWordsArray[k].indexOf('lace') > -1) {
      return k;
    }
  }
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}