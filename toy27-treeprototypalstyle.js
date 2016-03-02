var treeMaker = function(value){
  var newTree = Object.create(treeMaker.methods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};
treeMaker.methods = {};
treeMaker.methods.addChild = function(value){
  var node = treeMaker(value);
  // push to tree
  this.children.push(node);
}
treeMaker.methods.contains = function(value){
  var truth = false;

  var recurse = function(node) {
    // base case
    if (node.value === value) {
      truth = true;
    }

    var kids = node.children;

    kids.forEach(function(kid) {
      if (kid.value === value) {
        truth = true;
      }
      recurse(kid);
    });

  };

  recurse(this);

  return truth;
}
