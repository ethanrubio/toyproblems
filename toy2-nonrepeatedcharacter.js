function firstNonRepeatedCharacter (string) {
  // Write your code here, and
  // return your final answer.

  // store first letter

  // iterate over the array to check if it matches
  // any other letter
    // if it does discard it 
      // start check on the second character
    // if it doesn't
      // return it
  // if all characters are repeated
    // return 'sorry'

  // check to see if that first 

  // create copy of the array

  // use indexOf to find 

// plain english
// 1. create a list with each letter of the string
// 2. store first letter for comparison
// 3. look at each letter
// 4. compare it to see if the current letter is the same
// 5. if it is the same, take those letters out of the list
// 6. set a new list with the remaining letters
// 7. start with the first letter of remaining letters 
// 8. run comparison again until left with no letters to compare
// 9. if not the same return the letter, if always found the same, return 'it wasn't found. sorry not sorry'

// pseudocode
// create splitStringArray = to splitting the string by individual letters into an array
  var splitStringArray = string.split("");
// create a variable firstLetter = first letter of the array for comparison
  var firstLetter = splitStringArray[0];

  var storedFirst = firstLetter;

  var checkedArray = splitStringArray;

  checkedArray.splice(firstLetter, 1);

  for (var i = 1; i < checkedArray.length; i++) {
    if (checkedArray.indexOf(firstLetter)){
      checkedArray.splice(i, 1);
      firstLetter = checkedArray[0];
    }
    return firstLetter;
  }

  return 'sorry not sorry';
// create a holder array that will be the result of the sliced/spliced splitSTringArray
// iterate over each letter in the array
  // if given letter is equal to current letter
    // set the holder array with the array of splice/slice  letters out of the array
    // start comparison over again
  // if comparsion is complete with equals
    // return 'sorry not sorry'
  // if not found
    // return the firstLetter
}

firstNonRepeatedCharacter('ABCDBIRDUP');