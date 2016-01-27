// Rock Paper Scissors Permutation

// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

// Input Output
// roundCount: 1 
// [ "r", "p", "s" ]
// roundCount: 2
// [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
// roundCount:0
// [ ]

function rockPaperPermutation (roundCount) {
  // Write your code here, and
  // return your final answer.

  // check to see if valid roundCount
  if (roundCount <= 0) {
    // return empty array
    return [];
  }

  // set up recursive function takes in the rounds
  // and the storage as it continously adds r, p, s
  // to the first instance 
  // ['r', 'p', 's']
  var getRounds = function(rounds, storage) {

    // if storage does not exist create a new array
    if(!storage) {
      storage = [];
      // push one blank space so it can be concated
      // [""]
      storage.push('');
    } 

    // when recursion happens make storage equal to
    // the previous collection of permutations that is repassed in
    storage = storage;

    // set up a results variable of our permutations
    permutations = [];

    // first case since storage is length 1
    // this will run one time
    // concat "" with r, p, s. gives you "r", "p", "s"
    // push concatted strings into permutations
    for (var i = 0; i < storage.length; i++) {
      permutations.push(storage[i].concat('r'));
      permutations.push(storage[i].concat('p'));
      permutations.push(storage[i].concat('s'));
    }

    // base case to stop running
    if (rounds === roundCount) {
      return permutations;
    } 

    // every recursion make rounds go up 1
    // to eventually make it to the base case
    rounds = rounds + 1;
    // recurse with updated rounds and
    // newly created collection permutation
    return getRounds(rounds, permutations);
  
  };

  // start with 1 round to build recursion
  return getRounds(1);
}