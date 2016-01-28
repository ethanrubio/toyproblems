// Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

// Examples
// Input	          Output
// array:
// [ 2, 1, 3, 7 ]	  42
// array:
// [ 0, 2, 3 ]	    0

function largestProductOfThree (array) {

  // plain english
  // 1. identify the largest three numbers
  // 2. account for negative numbers multipled together to get a positive
  // 3. multiply those three numbers together
  // 4. return the result

  // if you can sort
  // sort the array
  // take the last three numbers

  var largestNumbersHolder;

  // check to see if the array only has 3 then just multiply them together
  if (array.length === 3) {
    return (array[0] * array[1] * array[2]);
  }

  // sort array based on lowest to highest
  var sortedArray = array.sort(function(a, b) {return a - b;});

  // only store the largest positive numbers
  largestNumbersHolder = sortedArray.slice(Math.max(sortedArray.length - 3, 1));

  // compare products to account for negative values that become positive when multipled
  var firstProduct = sortedArray[0] *  sortedArray[1] * largestNumbersHolder[2];
  var secondProduct = largestNumbersHolder[0] * largestNumbersHolder[1] * largestNumbersHolder[2];


  // compare firstProduct (where it could have 2 negatives to get a positive) with the positive products array)
  if (firstProduct > secondProduct) {
    return firstProduct;
  }

  return secondProduct;

}
