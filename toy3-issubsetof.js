Array.prototype.isSubsetOf = function(comparisonArray) {
  // taking one array and comparing it to another
  // look at each element

  // iterate over first array
  for (var i = 0; i < this.length; i++) {
    // use indexOf to look if the element of first array is not found then return false
    if (comparisonArray.indexOf(this[i]) === -1) {
      return false;
    }
  }

  // else if not false. then it must have been found
  // so return true
  return true;
};
