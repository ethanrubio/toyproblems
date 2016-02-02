// Implement the function ‘bind’, which accepts a function and a context as arguments. The context argument should override an existing context that the function is defined in. Your bind function should return the passed in function.
//
// For example, if we have the following object:
//
// var alice = {
//   name: 'alice',
//   shout: function () {
//     alert('here comes' + ' ' + this.name);
//   }
// };
//
// alice.shout() //=> 'here comes alice'
// If you use your bind function with the context { name: 'bob' }, as is shown here:
//
// boundShout = bind(alice.shout, { name: 'bob' })
// Then calling boundShout() will alert 'here comes bob'
//
// The following example should also work in the following way once your function is implemented:
//
// var func = function(a, b){ return a + b };
// var boundFunc = bind(func, null, 'diet');
//
// boundFunc('coke'); //=> 'dietcoke'
// Once you have finished that, implement the function ‘bind’ as a method of the Function.prototype object. This will be similar to your first solution, but should be able to be used in the following way:
//
// var alice = {
//   name: 'alice',
//   shout: function () {
//     alert(this.name);
//   }
// };
//
// var boundShout = alice.shout.bind(alice);
// boundShout(); // alerts 'alice'
//
// boundShout = alice.shout.bind({ name: 'bob' });
// boundShout(); // alerts 'bob'
// DO NOT use the native bind() function in your solutions. You may use the functions call() and apply().

var bind = function(func, context){
  //Your code here
  // plain english
  // 1. first get the arguments from the bind parameters by slicing
  // 2. store that into a new arguments array
  // 3. store the first copied args into another new arguments in the return function
  // 4. you'll need that in the return function to concat the second new arguments with the parameter
  // being passed into the return function such as the 'coke' in boundFunc
  // var func = function(a, b){ return a + b };
  // var boundFunc = bind(func, null, 'diet');
  // boundFunc('coke'); //=> 'dietcoke'
  // 5. call func.apply(null, with the final arguments)
  // slice at 2 index to get the third parameter
  var firstArgs = Array.prototype.slice.call(arguments, 2);
  return function(){

    // get the final argument to be concatted
    var finalArgsToBeConcatted = Array.prototype.slice.call(arguments);

    // combine the final arguments
    var finalArgs = firstArgs.concat(finalArgsToBeConcatted);

    // apply the final arguments to the stored previously stored function
    // also apply the context
    return func.apply(context, finalArgs);
  };
};

Function.prototype.bind = function(context) {
  // get the this context
  var functionToBebound = this;

  // slice the 1 index argument to get the second parameter
  var firstArgs = Array.prototype.slice.call(arguments, 1);
  return function(){

    // get the final argument to be concatted
    var finalArgsToBeConcatted = Array.prototype.slice.call(arguments);

    // combine the final arguments
    var finalArgs = firstArgs.concat(finalArgsToBeConcatted);

    // apply the final arguments to the stored previously stored function
    // also apply the context
    return functionToBebound.apply(context, finalArgs);
  };
};
