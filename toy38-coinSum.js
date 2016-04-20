//input: number of pence
//output: total number of ways to make change

//initialize result var starting at 0
//initilize recursive function to take a number and a counter
  //check if num === total
    //if yes, add to result
  //check if num is less than total
    //if yes, loop through coins array
      //if index in loop is less than count
        //set count === to index
        //add the current coin to the running total and recurse on that and the count
  //begin recursing at (0,0)
  //return resuts

var coins = [1,2,5,10,20,50,100,200];

var coinSums = function(total) {
	var solutions = 0;

	var permutate = function(target, solutionTracker) {

		// base case
		if (target === total) {
			solutions ++;
		}

		// recursive case
		else if (target < total) {
			for (var i = 0; i < coins.length; i++) {
				if (i >= solutionTracker) {
					permutate(coins[i] + target, i);
				}
			}
		}
	}

	permutate(0, 0);
	return solutions;
}
