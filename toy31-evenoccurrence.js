function evenOccurrence (arr) {
  // plain english
  // 1. iterate through array
  // 2. grab each item and push each duplicate into another arary of arrays
  // 3. look to see which length is even
  // 4. return first letter of first occurence of even

  var duplicateHolder = [];
  var duplicateCounter = {};

  for (var i = 0; i < arr.length; i++) {
    if (duplicateHolder.indexOf(arr[i]) === -1) {
      duplicateHolder.push(arr[i]);
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
