var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  // plain english
  // 1. split the input into an array
  // 2. check to see that letter matches one of the properties on digit value
  // 3. if it does check to see if the next value is smaller than the previous
  // 4. if it is smaller it will be subtracting from the larger value
  // 5. else it will be just an additive
  // 6. add the numbers together
  // 6. if it does not match return null

  //input string
  //output number
  var array = romanNumeral.split('');
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    if (DIGIT_VALUES[array[i]]) {
      if (DIGIT_VALUES[array[i]] < DIGIT_VALUES[array[i + 1]]) {
        console.log('subtractive');
        sum -= DIGIT_VALUES[array[i]];
      } else {
        sum += DIGIT_VALUES[array[i]];
        console.log('additive');
      }
    } else {
      return null;
    }
  }

  return sum;
};
