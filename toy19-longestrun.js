/*Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run.
If there are two runs of equal length, return the first one. Return [0,0] for no runs.*/

/*Examples
Input	         Output
string:
"abbbcc"	     [ 1, 3 ]
string:
"aabbc"	       [ 0, 1 ]
string:
""	           [ 0, 0 ]
string:
"mississippi"	 [ 2, 3 ]
string:
"abcdefgh"	   [ 0, 0 ]*/



function longestRun (string) {


  // plain english
  // 1. look at each letter in each string
  // 2. when a letter is found push it into an array until it hits another disimillar letter
  // 3. compare the lengths of each run in the array
  // 4. if there is a longest run
  // 5. find where it starts and where it ends and return that indices [start, end]
  // 6. else if there is no longest run return [0, 0]

  var runsHolder = [];
  var runHolder = [];
  var i = 0;


  do {
    runHolder.push(string.charAt(i));
    if (string.charAt(i) !== string.charAt(i + 1)) {
      runsHolder.push(runHolder);
      runHolder = [];
    }
    i++;
  }
  while ( i < string.length);

  // compare runs' lengths from runsHolder
  // 4. if there is a longest run

  var lengthsHolder = [];

  var getLengths = function() {
    for (var j = 0; j < runsHolder.length; j++) {
      lengthsHolder.push(runsHolder[j].length);
    }
  };

  getLengths();


  var largestIndexInRunsHolder = lengthsHolder[0];

  for (var k = 1; k < lengthsHolder.length; k++) {
      if (lengthsHolder[k] > largestIndexInRunsHolder) {
          largestIndexInRunsHolder = lengthsHolder[k];
      }
     }


//   console.log(largestIndexInRunsHolder);

  // check to see if the largest was there already
  if ( string === '' ) {
      return [0, 0]
  } else {
     //
     var lengthsHolderIndex = lengthsHolder.indexOf(largestIndexInRunsHolder)
     console.log(lengthsHolderIndex)
     var runString = runsHolder[lengthsHolderIndex].join('').toString()
     var lengthOfRunString = runString.length - 1;
     var indexOfRun = string.indexOf(runString);

     return [indexOfRun, indexOfRun + lengthOfRunString ]
  }


  // 5. find where it starts and where it ends and return that indices [start, end]
  // 6. else if there is no longest run return [0, 0]


}
