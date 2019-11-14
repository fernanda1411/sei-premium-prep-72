/*
Back to regular skeletons! Your task is to write a function that will find the longest single-word palindrome within an input phrase (string). The phrase inputted will only contain letters (no symbols, punctuation, or numbers). Your palindrome detection should be case-insensitive. If there are multiple palindromes of equal length, return the last one.


Similarly to some of the previous problems in this section, there is a concept here that will be new to you. Ideally, your solution will use a native method (built into the language) called .sort(). Essentially, when called, this method takes a function that tells the sorting operation how it should order the resulting sorted array. We have supplied a function inside of the skeleton. Please consult this MDN documentation, and read it carefully: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort 

*/

function findLongestPalindrome(sentence) {
    // split sentence into words
    // iterate words and collect the palindromes
    // sort the list of palindromes by word length
    // return the largest item in the sorted list
    var palindromes = []; 
    var words = sentence.split(" "); 
    words.forEach(function(word) {
      if(isPalindrome(word)) {
        palindromes.push(word); 
      } 
    });
    
    return  palindromes.sort(sortAscendingByLength)[palindromes.length-1];
    
    //return palindromes.reduce(function(acc, palindrome){
    //  var largestPalindrome = "";
    //  if(palindrome.length > acc) { 
    //    acc = palindrome.length;
    //    largestPalindrome = palindrome;
    //     return largestPalindrome; 
    //  }
    
   // },0);
  }
  
  
  function reverseString(word) {
    var letters = word.split("");
    var reverse = [];
    letters.forEach(function(letter) {
      reverse.unshift(letter)
    });
    return reverse.join("");
  }
  
  function isPalindrome(word) {
    // hint: you can detect palindromes by comparing a string to its reverse
    return reverseString(word) === word ? true : false; 
  }
  
  function sortAscendingByLength(a, b) {
    return a.length - b.length;  
  }
  
  //var input = ""
  var input = 'Our civic duty is to kayak without a RoTaToR as you well know';
  //var input = 'Our civic duty is to kayak';
  findLongestPalindrome(input); 