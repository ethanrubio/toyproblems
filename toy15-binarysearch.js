function binarySearch (array, target) {

  // plain english
  // 1. take the array make an interval
  // 2. look at that interval and see what the middle number is
  // 3. if the target number is less than the middle number
  // 4. then the next interval will be  the lower half of the current interval
  // 5. if the target number is greater than the middle number
  // 6. then the next interval will be  the upper half the current interval
  // 7. repeat the process until the middle value is equal to the target value
  // 8. or the search interval is empty

  // set up interval
  var interval = array;

  // might have to keep track of how many times we split the array to find the index
  var timesSliced = 0;
  var indexTracker = 0;

  var previousLength = 0;


  // set up a recurse
  var recurse = function(interval, previousLength) {
    // base case
    if (interval.length === 1) {
      if (interval[0] === target) {
        console.log("target was found! ", target);
        console.log("This is the index",indexTracker);
        return indexTracker;
      } else {
        console.log('target was not found! ', -1);
        return -1;
      }
    }


    // look to see the middle value in the interval
    var middleVal = interval[Math.round((interval.length - 1) / 2)];

    // store the index where middle is for it to be sliced
    var middleSlice = Math.round((interval.length - 1) / 2);

    console.log(middleVal);

    // compare that to the target
    // if the target number is less than the middle
    if (target < middleVal) {
      // then the next interval will be  the lower half of current interval
      interval = interval.slice(0, middleSlice);
      console.log('this should be lower half of interval, ', interval);
      return recurse(interval);
    // else
    } else {
      // then the next interval will be the upper half of the current interval
      // take length of the other half that you didn't slice to add it to middle

      previousLength = interval.slice(0, middleSlice).length;
      indexTracker += previousLength;

      interval = interval.slice(middleSlice, interval.length);
      console.log('this should be upper half of interval, ', interval);

      return recurse(interval, previousLength);
    }

  };

  return recurse(interval, previousLength);

}
