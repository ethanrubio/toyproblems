

var str = "0...0\n..0..\n0...0";

// first convert str to an array
var convertToArray = function(mapStr) {
    var mapHolder = mapStr.split("\n");
    return convertStringsToNumbers(mapHolder);
};

// second convert those strings inside the array
// into 1's and 0's for easier parsing
var convertStringsToNumbers = function(arr){
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        newArray.push(arr[i].split(""));
    }
    for (var j = 0; j < newArray.length; j++) {
        for (var k = 0; k < newArray[0].length; k++) {
            if (newArray[j][k] === "0") {
                newArray[j][k] = 1;
            } else {
            newArray[j][k] = 0;
            }
        }
    }
    return newArray;
};

// third convert that array with the new numbers to a matrix
// because the array might not have the same number of rows
// and columns
var convertToMatrix = function(array) {
    var numberOfRows = array.length;
    var numberOfColumns = array[0].length;
    var matrixStarter = array;
    var matrix = [];
    if (numberOfRows !== numberOfColumns) {
        for (var i = 0; i < numberOfColumns - numberOfRows; i++) {
            matrix[i] = [];
            for(var j = 0; j < numberOfColumns; j++) {
                matrix[i][j] = 0;
            }
            matrixStarter.push(matrix[i]);
        }
    }
    return matrixStarter;
};

// fourth recurse the matrix to
// identify where the 1's are
function recurse(matrix, x, y) {
    if (matrix[x][y]) {
      // reset
      matrix[x][y] = 0;
      // check directly below
      if (x + 1 < matrix.length) {
        recurse(matrix, x + 1, y);
      }
      // check directly above
      if (x > 0) {
        recurse(matrix, x - 1, y);
      }
      // check adjacent right
      if (y + 1 < matrix.length) {
        recurse(matrix, x, y + 1);
      }
      // check adjacent left
      if (y > 0) {
        recurse(matrix, x, y - 1);
      }
    }
}

// fifth go through the matrix to count the islands
// use recursion to identify where the islands are
function islandCounter(matrix) {
    var numberOfIslands = 0;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix.length; j++) {
            if (matrix[i][j]) {
                numberOfIslands += 1;
                recurse(matrix, i, j);
            }
        }
    }
    return numberOfIslands;
}

// finally call the countIslands function to return the number
// of islands
function countIslands(mapStr) {
    return islandCounter(convertToMatrix(convertToArray(mapStr)));
}

countIslands(str);
