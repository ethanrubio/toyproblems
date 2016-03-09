function evenOccurrence (arr) {
  // plain english
  // 1. iterate through array
  // 2. grab each item and create a prop on an obj
  // 3. look to see which value on the obj is even
  // 4. return first letter of first occurence of even

  var duplicateCounter = {};

  for (var i = 0; i < arr.length; i++) {
    if (!duplicateCounter[arr[i]]) {
      duplicateCounter[arr[i]] = 1;
    } else {
      duplicateCounter[arr[i]] += 1;
    }
  }

  for (var key in duplicateCounter) {
      if (duplicateCounter[key] % 2 === 0) {
        if (isNaN(parseInt(key))) {
          return key;
        }
          return parseInt(key);
      }
  }

  return null;
}
