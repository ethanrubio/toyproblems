// Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

// plain english
// 0. numbers
// 1. strings
// 2. arrays
// 3. objects
// 4. functions
// 5. booleans


deepEquals = function(a, b) {
  // check if a and b are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    if (a === b) {
      return true;
    }
  }
  // check if a and b are strings
  if (typeof a === 'string' && typeof b === 'string') {
    if (a === b) {
      return true;
    }
  }
  // check if a and b are arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    // iterate through array A
    for (var i = 0; i < a.length; i++) {
      // if array A has the same values of array B
      var aIndexHolder = a[i];
      if (aIndexHolder !== b[i]) {
        return false;
      }
      return true;
    }
  }
  // check if a and b are objects
  if (typeof a === 'object' && typeof b === 'object') {
    // check to see if it has different lengths
    if (Object.keys(a).length !== Object.keys(b).length) {
       return false;
    }
    // check to see if it is empty
    if (Object.keys(a).length === 0 && Object.keys(b).length === 0) {
      return true;
    }
    // iterate through object A
    for (var key in a) {
      // if the key of A equals the key of B
      var aKeyHolder = a[key];
      // need to pass the dissimilar nessted object properties
      // first need to iterate through the first object
      // see if the first object has the same
      if (!deepEquals(aKeyHolder, b[key])) {

        return false;
      }
    }
    return true;
  }
  // check if a and b are functions
  if (typeof a === 'function' && typeof b === 'function') {
    // convert to string to see if the functions are equal
    if (a.toString() === b.toString()) {
      return true;
    }
  }
  // check if a and b are booleans
  if (typeof a === 'boolean' && typeof b === 'boolean') {
    if (a === b) {
      return true;
    }
  }
  // check if a and b are nulls
  // check if a and b are undefined
  // if (typeof a === "undefined" && typeof b === 'undefined') {
  //   if (a === b) {
  //     return true;
  //   }
  // }

  return false;
};
