function primeTester(n) {

  if (n === 2) {
    return true;
  }

  if (n === 1 || n % 2 === 0) {
    return false;
  }

  // wikipedia help
  // eliminate testing divisors greater than √n.
  // We can also eliminate all the even numbers greater than 2,
  // since if an even number can divide n, so can 2
  for (var i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
