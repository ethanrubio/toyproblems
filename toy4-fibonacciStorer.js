// toy problem
// 0 1 1 2 3 5
// If n were 4, your function should return 3; for 5, it should return 5.


nthFibonacci = function(n) {

  // if given 0 return 0
  // start with 1
  // add 1 to itself
  // add previous number to itself

  if (n <= 0) {
    return 0;
  }

  var fibonacciStorer = [];


  for (var i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      fibonacciStorer.push(1);
    } else if (i === 2) {
      fibonacciStorer.push(2);
    } else {
      fibonacciStorer.push(fibonacciStorer[i - 1] + fibonacciStorer[i - 2]);
    }
  }


  return fibonacciStorer[fibonacciStorer.length - 1];

};
