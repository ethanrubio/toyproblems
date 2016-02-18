function fractionConverter (number) {

  if (number === parseInt(number)) {
    return number + '/1'
  }

  var digits = number.toString().split('.');
  var wholeNumber = parseInt(digits[0]);
  var decimalNumber = parseInt(digits[1]);
  var digitsOfDecimalNumber = decimalNumber.toString().split('');

  // count number of digits in the decimal to set the fraction as the base of
  // the number of places it has 10,100,1000, etc
  var countOfDecimalPlaces = 0;

  for (var i = 0; i < digitsOfDecimalNumber.length; i++ ) {
    countOfDecimalPlaces = countOfDecimalPlaces + 1
  }

  /*console.log(countOfDecimalPlaces)*/

  // based on the number of decimal places make the denominator that
  var counter = 0;

  var decimalPlace = '1';

  if (countOfDecimalPlaces == 1) {
    decimalPlace = '10'
    } else {
      while (counter < countOfDecimalPlaces) {
        decimalPlace += '0';
        counter++;
      }
    }

  var zeros = parseInt(decimalPlace);

  /*console.log(zeros)
  console.log('This is the whole number ', wholeNumber);
  console.log('This is the decimal number ', decimalNumber);*/

  function simplify(numerator,denominator){
    var greatestCommon = function(num, dom) {
      if (dom) {
        return greatestCommon(dom, num % dom)
        } else {
          return  num
        }
      }
      greatestCommon = greatestCommon(numerator, denominator);
      return [numerator/greatestCommon, denominator/greatestCommon];
    }

    var numerator =  number * zeros;

    // check to see if you have a decimal in the number to
    // make the numerator correctly
    if (digits[0] === '0') {
        console.log('i\'m in here!')
        var convertBackToDecimal = '0.' + digits[1];
        numerator = Math.floor(Number(convertBackToDecimal) * parseInt(zeros));
    }

    var denominator = zeros;

    var simplifiedFraction = simplify(numerator, denominator);

    return simplifiedFraction[0].toString() + '/' + simplifiedFraction[1].toString();
}
