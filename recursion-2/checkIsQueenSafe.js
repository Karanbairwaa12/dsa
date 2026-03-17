let matrix = [
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
];

let isSafe = function (row, col, board) {
	let n = board.length;

	// same column
	for (let i = 0; i < row; i++) {
		if (board[i][col] === 1) return false;
	}

	// left diagonal
	for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
		if (board[i][j] === 1) return false;
	}

	// right diagonal
	for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
		if (board[i][j] === 1) return false;
	}

	return true;
};
isSafe(2, 2, matrix);

module.exports = { isSafe };
