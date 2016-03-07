var Stack = function() {
  var storage = [];

  this.push = function(value) {
    storage.push(value);
  };

  this.pop = function() {
    if (storage.length < 0) {
      return null;
    } else {
      var poppedValue = storage.pop();
      return poppedValue;
    }
  };

  this.size = function() {
    return storage.length;
  };

};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(value) {
    if (inbox.size() > 0) {
      outbox.push(inbox.pop());
      inbox.push(value);
    } else {
      inbox.push(value);
    }
  };

  this.dequeue = function() {
    // preserves the order of coming in and out
    // when more than one thing is enqueued
    if (outbox.size() > 0 && inbox.size() > 0) {
      var poppedValue = outbox.pop();
      outbox.push(inbox.pop());
      return poppedValue;
  // means there was only one thing enqueued
    } else if (outbox.size() < 1 && inbox.size() === 1) {
      outbox.push(inbox.pop());
      return outbox.pop();
  // means that the other cases weren't the case
  // so the logic of enqueue is handling the order
    } else if (outbox.size() > 0) {
      return outbox.pop();
    } else {
      return null;
    }
  };

  this.size = function() {
    return inbox.size() + outbox.size();
  };
};
