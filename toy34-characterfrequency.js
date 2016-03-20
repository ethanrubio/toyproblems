function characterFrequency (string) {

  // plain english
  // 1. count each letter and put it in an object
  // 2. put that key, count into an array of arrays
  // 3. sort the results

  var results = [];
  var letterHolder = {};

  for (var i = 0; i < string.length; i++) {
    var letter = string.charAt(i)
    if (!letterHolder[letter]) {
      letterHolder[letter] = 1;
    } else {
      letterHolder[letter] += 1;
    }
  }

  for (var key in letterHolder) {
    results.push([key, letterHolder[key]]);
  }

  function multiCompare(a, b) {
    // first sort test
    // check to see if the number is the same
    if(a[1] === b[1]) {
      var x = a[0].toLowerCase();
      var y = b[0].toLowerCase();
      // second sort test
      // if x is lower in the alphabet than y
      if (x < y) {
        // sort x before y
        return -1;
      } else if (x > y) {
        // sort y before x
        return 1;
      } else {
        // unchange
        return 0;
      }
    }
    return b[1] - a[1];
  }

  results.sort(multiCompare);

  return results;

}
