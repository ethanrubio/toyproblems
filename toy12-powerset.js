// Power Set
// Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.
//
// Make sure your code does the following:
//
// All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
// Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
// Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’. See the result below.
// Examples
// Input	        Output
// string:
// "a"	          [ "", "a" ]
// string:
// "ab"	          [ "", "a", "ab", "b" ]
// string:
// "horse"	      [ "", "e", "eh", "eho", "ehor", "ehors", "ehos", "ehr", "ehrs", "ehs", "eo", "eor", "eors", "eos", "er", "ers", "es", "h", "ho", "hor", "hors", "hos", "hr", "hrs", "hs", "o", "or", "ors", "os", "r", "rs", "s" ]


function powerSet (string) {
  // plain english
  // 1. sort string alphabetically
  // 2. remove duplicate letters
  // 3. consider output duplicates e.g. ‘ab’ and ‘ba’ are the same.
  // 4. put all permutations in an array
  // 5. sort output array alphabetically
  // 6. always put an empty set in the first index

  // split string
  var splitStringHolder = string.split("");

  // sort the splitStringHolder
  var sorted = splitStringHolder.sort();

  // remove function duplicate letters from the split holder
  var removeDuplicateLetters = function(array) {
    var dedupedArray = [];
    for (var i = 0; i < array.length; i++) {
      if (dedupedArray.indexOf(array[i]) === -1) {
        dedupedArray.push(array[i]);
      }
    }
    return dedupedArray;
  };

  // remove duplicate letters & store the array
  var newArray = removeDuplicateLetters(sorted);

  // set up the powerSetArray
  var powerSetArray = [];

  // make a powerSet function to grab all the combos
  var makeSomePowers = function(powerArray, arrayToBePowered) {
    // make index 0 with the empty string
    powerArray.push("");

    // set up recurse that takes an array and a prefix
    var recurse = function(array, prefix) {

      // iterate over each element in the array
      for (var i = 0; i < array.length; i++) {
        // add the prefix to each letter
        powerArray.push(prefix + array[i]);
        // slice the array to get the next value, and recurse over it
        // with the current prefix + letter
        // recurse is self limiting as it gets to the end of the array
        // and stops and goes back down the call stack
        recurse(array.slice(i + 1), prefix + array[i]);
      }

    };

    // start recurse with the array and empty string
    recurse(arrayToBePowered, '');

  };

  makeSomePowers(powerSetArray, newArray);

  return powerSetArray;
}
