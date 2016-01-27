// Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
//
// Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.
//
// Example: commonCharacters('acexivou', 'aegihobu')
//
// Returns: 'aeiou'

var commonCharacters = function(string1, string2) {

  // plain english
  // 1. hold the common characters
  // 2. iterate over first string to grab each letter
  // 3. look to see if the letter is in second string1
  // 4. if it is push it to the storage that holds the common characters
  // 5. return the common characters

  // create a holder that will store common characters
  var commonCharactersHolder = [];

  // iterate over first string
  for (var i = 0; i < string1.length; i++) {
    // use indexOf to see if letter is in the second string && don't push spaces
    character = string1[i];
    if (string2.indexOf(string1[i]) !== -1 && string1[i] !== " ") {
      // check to see if the character has already been pushed
      if (commonCharactersHolder.indexOf(string1[i]) === -1) {
        // if not found push it
        commonCharactersHolder.push(string1[i]);
      }
    }
  }

  // return common characters
  return commonCharactersHolder.join("");

};

// time complexity
// exponential - three for loops O(n^n);
