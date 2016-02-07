// Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.
//
// You can think of compose as moving right to left through its arguments.

// ex
// var greet = function(name){ return 'hi: ' + name;};
// var exclaim = function(statement) { return statement.toUpperCase() + '!';};
//
// var welcome = compose(greet, exclaim);
// welcome('phillip'); //=> 'hi: PHILLIP!'

var compose = function(){
  // grab arguments from when you compose
  var args = Array.prototype.slice.call(arguments);

  // pass in what you want to pass into the final result
  return function(val){

    // iterate backwards to start at the last passed in func from args
    // get the result of passing in the val
    // and then reassign val to pass it back in the next func from args
    for (var i = args.length - 1; i >= 0; i--) {
      val = args[i](val);
    }

    return val;
  };

};
// Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.

// You can think of pipe as moving left to right through its arguments.

// var add2 = function(number){ return number + 2; }
// var multiplyBy3 = function(number){ return number * 3; }
//
// pipe(add2, multiplyBy3)(5) //=> 21
// pipe(add2, multiplyBy3, multiplyBy3)(5) //=> 63


var pipe = function(){
  // grab arguments from when you compose
  var args = Array.prototype.slice.call(arguments);

  // pass in what you want to pass into the final result
  return function(val){

    // iterate forward to start at the first passed in func from args
    // get the result of passing in the val
    // and then reassign val to pass it back in the next func from args
    for (var i = 0; i < args.length; i++) {
      val = args[i](val);
    }

    return val;
  };
};
