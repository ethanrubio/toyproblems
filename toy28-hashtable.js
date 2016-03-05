var makeHashTable = function(){
  var table = {};
  var storage = [];
  var storageLimit = 1000;

  table.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    // boolean to check if it was replaced
    var pair = [key, value];

    if (storage[index].length === 0) {
      storage[index] = [pair];
    } else {
    // check to see if an existing key is in a bucket
    // by looking inside each one
    // if found replace
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
        }
      }
      storage[index].push(pair);
    }

  };

  table.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var result = null;

    for (var i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] === key) {
        var pair = [key, storage[index][i][1]];
        result = pair[1];
      }
    }

    return result;
  };

  table.remove = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];

    for (var i = 0; i < storage[index].length; i++) {
      if (storage[index][i][0] === key) {
        var splicedPair = [key, storage[index][i][1]]
        storage[index][i].splice(i, 1);
        return splicedPair;
      } else {
        return undefined;
      }
    }
  };

  return table;
};
var getIndexBelowMaxForKey = function(str, max){
 var hash = 0;
 for (var i = 0; i < str.length; i++) {
   hash = (hash<<5) + hash + str.charCodeAt(i);
   hash = hash & hash; // Convert to 32bit integer
   hash = Math.abs(hash);
 }
 return hash % max;
};
