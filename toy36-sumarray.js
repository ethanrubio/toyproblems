var sumArray = function (array) {
  var result = null;

  var recurse = function(arr) {
      var sumHolder = [];
      sumHolder.push(arr[0]);
      var currentIndex = 0;

      for (var i = 0; i < arr.length -1; i++) {
          var previousSum = sumHolder[currentIndex];
          currentIndex++
          sumHolder.push(previousSum + arr[i + 1])
      }

     console.log("this is the sum holder ", sumHolder);

      if (arr.length === 1) {
          sumHolder.push(arr[0]);
      }

      var checkedVal = sumHolder[0];
      for (var j = 1; j < sumHolder.length; j++) {
          if (checkedVal < sumHolder[j]) {
              checkedVal = sumHolder[j];
          }
      }

      if (!result) {
          result = checkedVal;
      } else if (result < checkedVal) {
          result = checkedVal;
      }

      arr.shift();

      console.log("this is the arr after shift ", arr);

      if (arr.length > 0) {
          recurse(arr);
      }
  };

  recurse(array);
  return result;
}
