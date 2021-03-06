// Build a class to represent a range of numbers that has:
//
// a beginning index
// an end index (optional). If there is no end index, the range should include only the passed-in start value.
// a ‘step’ (optional)
// The step is the interval at which elements are included. For instance, a step of 1 includes every element in the range, while a step of 2 includes every other element.
//
// You should allow a negative value for ‘step’ to count backwards. If no step is provided and the start is more than the end, assume we’re counting backwards.
//
// The range should have a constructor that accepts these arguments in this order:
//
// beginning index
// end index
// step interval
// It should also support the following utility functions:
//
// size(): return the number of items represented by the range
// each(callback(index)): iterate over the range, passing each value to a callback function
// includes(index): return whether or not the range includes the passed value
// You should also be aware of the following caveats:
//
// Should return null if we are given no ‘start’ value.
// Range should use constant space, even during the each() method, * i.e. you should not use an array as backing storage.


var Range = function(start, end, step) {
  //plain english
  // beginning index
  // end index
  // step interval

  var rangeHolder = [];

  // use the start to use as a beginning interval
  var rangeMaker = function(start, end, step) {
    if (!step && start < end) {
        console.log('I"m a normal range without a step');
      for (i = start; i <= end; i++) {
        rangeHolder.push(i);
      }
    } else if (!step && start > end) {
      for (i = start; i >= end; i--) {

        rangeHolder.push(i);
      }
    }
    if (start > end && step < 0) {
      for (i = start; i >= end; i += step) {

        rangeHolder.push(i);
      }
    } else if (start > end && step > 0) {
      for (i = start; i <= end; i += step) {

        rangeHolder.push(i);
      }
    }
  };
  // use the end to set as the end index
  // use step as the step interval

  if (arguments.length === 3) {
    rangeMaker(start, end, step);
  } else if (arguments.length === 2) {
    rangeMaker(start, end);
  } else if (arguments.length === 1) {
    rangeHolder.push(start);
  }

  return rangeHolder;

};

Range.prototype.size = function () {
  //Your code here
};

Range.prototype.each = function (callback) {
  //Your code here
};

Range.prototype.includes = function (val) {
  //Your code here
};
