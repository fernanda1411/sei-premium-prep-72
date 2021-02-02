/*We are going to debug a function that takes in an array of strings, representing words in a sentence. This function should iterate over the input array and should create, and return, a resulting sentence from the words therein. Below is an example of the code running, assuming that you will have debugged the described function: createSentence:


---Debugging(3)

var sentence = "";

function createSentence(words) {

  for (var i = 0; i < words.length; i++) {
    // hint: does this line need to happen every iteration?
    sentence += words[i] + ' ';
    if (i === words.length - 1)
        sentence += '.';
    }
  }

  sentence;
}

 */

function createSentence(words) {
    // set empty string to hold sentence
    let sentence = '';
      
    // add each word in the sentence
    for (let i = 0; i < words.length; i++) {
      sentence += words[i];
  
      // add space on every word except for last
      if (i !== words.length - 1){
        sentence += ' ';
      }
    }
    // add point to the end of sentence
    sentence += '.';
    // return sentence
    return sentence;
}


var result1 = createSentence(['I', 'am', 'worth', 'it']);
console.log('should log "I am worth it.":', result1);

var result2 = createSentence(['My', 'problems', 'matter']);
console.log('should log "My problems matter.":', result2);