function isBalanced (string) {
  // Write your code here, and
  // return your final answer.

  var right = 0;
  var left = 0;

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === '(') {
      left++
    }
    // don't count right ) if it is the first one
    // since it can't be balanced with the (
    // basically you can overlook the ) at charAt 0
    // if you haven't counted the ( one first
    if (string.charAt(i) === ')' && left > 0) {
      right++
    }
  }


  if (right === left) {
    return true
  } else {
    return false
  }
}
