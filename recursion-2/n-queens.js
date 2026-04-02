const { isSafe } = require("./checkIsQueenSafe");

let matrix = Array.from({ length: 4 }, () => Array(4).fill(0));
function buildBoard(matrix) {
	let board = [];

	for (let i = 0; i < matrix.length; i++) {
		let row = "";
		for (let j = 0; j < matrix.length; j++) {
			row += matrix[i][j] === 1 ? "Q" : ".";
		}
		board.push(row);
	}

	return board;
}
let result = []
let nQueen = function (str, row) {
	if (row === matrix.length) {
		result.push(buildBoard(matrix))
		return;
	}
	for (let i = 0; i < matrix[row].length; i++) {
		if (isSafe(row, i, matrix)) {
			matrix[row][i] = 1;
			nQueen(str + row + "-" + i + ", ", row + 1);
			matrix[row][i] = 0;
		}
	}
};
nQueen("", 0);
console.log(result)
