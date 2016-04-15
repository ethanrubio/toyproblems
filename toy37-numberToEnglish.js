var numberToEnglish = function(number) {
    // plain english
    // a. store the concated string
    // b. check the places of the number in thirds
    // c. ????
    // d. Profit.
    var englishNumber = "";

    if (getPlaces(number) < 10) {
        return numbersToWords[number];
    }

    // split number into an array for every three places starting from the back
    var parts = number.toString().split( /(?=(?:...)*$)/ )|| [];

    console.log('this is the parts ', parts);

    var basePlaceHolder = [];

    console.log("this is the number of three zeroes in the number ", getNumberOfThreeZeros(number));

    // push into basePlaceHolder for every getNumberOfThreeZeros
    for (var j = getNumberOfThreeZeros(number); j > 0; j--) {
        console.log(j);
        var basePlace = parseInt('1' + ('000'.repeat(j)));
        basePlaceHolder.push(basePlace);
    }

    console.log(basePlaceHolder);

    for (var i = 0; i < parts.length; i++) {
      // remove leading zeros
      var removeZeros = parts[i].replace(/^0+/, '');

      if (parts[i] === '000') {
        console.log('moving on to next part');
      } else {
        if (removeZeros > 99) {
          if (parts[i].charAt(1) === '0' && parts[i].charAt(2) !== '0') {
            englishNumber += numbersToWords[parseInt(parts[i].charAt(0))] + ' ' + numbersToPlace[getPlaces(parseInt(parts[i]))] + ' ' + numbersToWords[parseInt(parts[i].charAt(2))];
          } else if (parseInt(parts[i].charAt(1)) < 2 && parseInt(parts[i].charAt(1)) > 0) {
            englishNumber += numbersToWords[parseInt(parts[i].charAt(0))] + ' ' + numbersToPlace[getPlaces(parseInt(parts[i]))] + ' ' + numbersToWords[parseInt(parts[i].charAt(1) + parts[i].charAt(2))];
          } else if (parseInt(parts[i].charAt(1)) > 1 && parts[i].charAt(2) === '0') {
            englishNumber += numbersToWords[parseInt(parts[i].charAt(0))] + ' ' + numbersToPlace[getPlaces(parseInt(parts[i]))] + ' ' + numbersToWords[parseInt(parts[i].charAt(1)) * 10];
          } else if (parts[i].charAt(1) === '0' && parts[i].charAt(2) === '0') {
            englishNumber += numbersToWords[parseInt(parts[i].charAt(0))] + ' ' + numbersToPlace[getPlaces(parseInt(parts[i]))];
          } else {
            englishNumber += numbersToWords[parseInt(parts[i].charAt(0))] + ' ' + numbersToPlace[getPlaces(parseInt(parts[i]))] + ' ' + numbersToWords[parseInt(parts[i].charAt(1)) * 10] + '-' + numbersToWords[parseInt(parts[i].charAt(2))];
          }
        } else {
          if (removeZeros.length === 1) {
            englishNumber += numbersToWords[parseInt(removeZeros)];
          } else if (removeZeros.charAt(1) === '0') {
            englishNumber += numbersToWords[parseInt(removeZeros.charAt(0)) * 10];
          } else if (removeZeros.charAt(0) < 2 && removeZeros.charAt(1) > 0) {
            englishNumber += numbersToWords[parseInt(removeZeros.charAt(0) + removeZeros.charAt(1))];
          } else {
            englishNumber += numbersToWords[parseInt(removeZeros.charAt(0)) * 10] + '-' + numbersToWords[parseInt(removeZeros.charAt(1))];
          }
        }
          if (basePlaceHolder.length > 0) {
            englishNumber += ' ' + numbersToPlace[basePlaceHolder[0]] + ' ';
            basePlaceHolder.shift();
          }
        }
      }

    // remove the last white space at the end of the string
    englishNumber = englishNumber.replace(/\s+$/, '');

    return englishNumber;

};

// helpers
var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

var getPlaces = function(number) {
    var numberLength = number.toString().length - 1;
    return parseInt('1' + ('0'.repeat(numberLength)));
};

var getNumberOfThreeZeros = function(number) {
    var getPlacedNumber = getPlaces(number);

    if (((getPlacedNumber.toString().length - 1) / 3) < 1) {
        return 0;
    }

    return Math.floor((getPlacedNumber.toString().length - 1) / 3);
};
