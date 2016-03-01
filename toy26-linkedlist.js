var LinkedList = function(initialValue) {

  this.head = null;
  this.tail = null;
  if (initialValue) {
    this.addToTail(initialValue);
  }

};

LinkedList.prototype.addToTail = function(value) {
  // create newTail with value
  var newTail = Node(value);

  // check to see if head exists
  if (!this.head) {
    // if exists assign newTail to tail and head
    this.head = newTail;
    this.tail = newTail;
  } else {
    // create the newTail (the new node) on previous tail
    this.tail.next = newTail;
  }
  // assign list.tail to newTail
  this.tail = newTail;
};

LinkedList.prototype.removeHead = function() {
  // don't remove Head when head doesn't exist
  if (!this.head) {
    return null;
  }

    // if removing the head and tail
  // set head and tail to null
  if (this.head.next === null) {
    this.head = null;
    this.tail = null;
    return null;
  }

  // store list.head's value
  var result = this.head.value;
  // assign list.head to list.head.next (the next node)
  this.head = this.head.next;
  // return stored list.head's value

  return result;
};

LinkedList.prototype.contains = function(target) {
  // set the truth
  var truth;
  // recurse through list to find target
  var recurse = function(node) {
      // check each head and look at it's value
      // to see if the value is = target
      if (node.value === target) {
        // if found make truth true
        truth = true;
      // if the final node has no tail
      } else if (node.next === null) {
        // make truth = false
        truth = false;
      } else {
        // recurse to the next node by
        // looking at the current node's next value
        recurse(node.next);
      }
    };
  // start recurse
  recurse(this.head);
  // return the truth
  return truth;
}

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
