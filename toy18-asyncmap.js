/*NOTE: This challenge requires some kind of asynchronous test implementation, and these tests are not yet functional.

Implement the function asyncMap:

asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
Each of the tasks takes a separate callback and invokes that callback when complete.

The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.

The order of these results should be the same as the order of the tasks.
It is important to note that this is not the order in which the tasks return,
but the order in which they are passed to asyncMap.

Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
on the results array.*/

/*asyncMap([
  function(cb){
    setTimeout(function(){
      cb('one');
    }, 200);
  },
  function(cb){
    setTimeout(function(){
      cb('two');
    }, 100);
  }
 ],
  function(results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
 });*/

 var asyncMap = function(tasks, callback){
   var results = [];

   // set up a counter to keep track of how many tasks were done
   // so you can run the callback once it goes through all the tasks to get the final result
   var tasksCount = 0;

   var asyncItUp = function(i) {
     tasks[i](function(value) {
          // grab the value and set it to current i
          // to keep track of doing tasks in order
          results[i] = value;
          tasksCount++;
          if (tasksCount === tasks.length) {
              callback(results);
            }
        });
      };

  // run asyncItUp
  for (var i = 0; i < tasks.length; i++) {
      asyncItUp(i);
  }

};
