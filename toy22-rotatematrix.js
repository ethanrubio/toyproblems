function rotateMatrix(matrix) {
  var rotated = [];
  for (var i = 0; i < matrix.length; i++) {
    var array = [];
    for (var j = 0; j < matrix[i].length; j++) {
      // adds to the beginning of the array
      // and switches the order of matrix
      array.unshift(matrix[j][i]);
    }
    rotated.push(array);
  }
  return rotated;
}
