// Implement a depth-first method on a tree class.
//
// DFSelect accepts a filter function, calls that function on each of the nodes in Depth First order, and returns a flat array of node values of the tree for which the filter returns true.

// Example
// var root1 = new Tree(1);
// var branch2 = root1.addChild(2);
// var branch3 = root1.addChild(3);
// var leaf4 = branch2.addChild(4);
// var leaf5 = branch2.addChild(5);
// var leaf6 = branch3.addChild(6);
// var leaf7 = branch3.addChild(7);
//
// root1.DFSelect(function (value, depth) {
//   return value % 2 === 1;
// }) //=> [1, 5, 3, 7]
//
// root1.DFSelect(function (value, depth) {
//   return depth === 1;
// }) //=> [2, 3]


Tree.prototype.DFSelect = function(filter) {
  //YOUR CODE HERE

  // hold the values that pass the truth test
  var storage = [];

  // set up the recursive function
  var recurse = function(tree, depth) {

    // if the tree's value and depth passes the truth tester
    // push it to the storage holder
    if (filter(tree.value, depth)) {
        storage.push(tree.value);
    }

    // base case
    // if it has children
    // iterate through the entire array and call recurse on it
    if (tree.children) {
        for (var i = 0; i < tree.children.length; i++) {
          recurse(tree.children[i], (depth + 1));
        }
    }

  };

  // call recursive function on the current tree node
  // pass it in along with the depth (the tree at current level is 0)
  recurse(this, 0);

  // return the truth holder
  return storage;
};
