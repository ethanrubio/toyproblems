// BubbleSort V.2
// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:
//
// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.
//
// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

// Examples
// Input	                            Output
// input:[ 20, -10, -10, 2, 4, 299 ]	[ -10, -10, 2, 4, 20, 299 ]



function bubbleSort (input) {
  // Write your code here, and
  // return your final answer.

  //plain english
  // 1. first start with the first value
  // 2 compare the first value with the next value
  // 3. if the first value is greater than second
  // 4. switch the positions of the the larger value with smaller value
  // 5. continue comparisons until it is no longer the greater value
  // 6. if the first value is not greater than the second
  // 7. stop the comparison and move on to the second value
  // 8. and compare that value to the third value

  var storage = [];

  // iterate over the input
  for (var i = 0; i < input.length; i++) {
    // store firstComparison
    var firstComparison = input[i];
    // store secondComparison
    var secondComparison = input[i + 1];

    // compare first comparsion with second comparison
    if (firstComparison > secondComparison) {
      storage.push(firstComparison);
      input[i - 1] = secondComparison;
    }

    // if first comparison is greater than second comparison
      // switch the indices of the first with the secondComparison
      // set the second comparsion with the next index
      // then compare the first comparsion with the new second comparsion
    // if not greater stop the comparsion
      // set the first comparsion with the second index
      // set the second comparsion with the third index
      // continue the comparsion
    // return array
  }

return storage;

}

// procedure bubbleSort( A : list of sortable items )
//    n = length(A)
//    repeat
//      swapped = false
//      for i = 1 to n-1 inclusive do
//        /* if this pair is out of order */
//        if A[i-1] > A[i] then
//          /* swap them and remember something changed */
//          swap( A[i-1], A[i] )
//          swapped = true
//        end if
//      end for
//    until not swapped
// end procedure

function bubbleSort(input) {

  var isSwapped = true;

  while (isSwapped) {
    isSwapped = false;
    for (var i = 1; i < input.length; i++) {
      if (input[i - 1] > input[i]) {
        var indexSwap = input[i];
        input[i] = input[i - 1];
        input[i - 1] = indexSwap;
        isSwapped = true;
      }
    }
  }

  return input;
}
