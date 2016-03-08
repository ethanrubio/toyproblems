function makeBoard(n) {
  var board = []
  for (var i = 0; i < n; i++) {
    board.push([])
    for (var j = 0; j < n; j++) {
      board[i].push(false)
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j]
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j]
  }
  return board
}

function robotPaths (n) {

  var numberOfPaths = 0;

  var board = makeBoard(n);

  var recurse = function(row, column) {
    // exit base case
    if (row === n - 1 && column === n - 1) {
      return numberOfPaths += 1;
    }

    // out of bounds or been visited break recursion
    if (column < 0 || column >= n || row < 0 || row >= n || board.hasBeenVisited(row, column)) {
      return 'break recurse';
    } else {
      // start toggle
      board.togglePiece(row, column);
      // left
      recurse(row, column + 1);
      // right
      recurse(row, column - 1);
      // up
      recurse(row - 1, column);
      // down
      recurse(row + 1, column);
      // place piece back down
      board.togglePiece(row, column);
    }
  }

  recurse(0, 0);

  return numberOfPaths;
};
