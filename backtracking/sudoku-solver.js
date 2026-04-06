// const board = [
//   [3, 0, 6, 5, 0, 8, 4, 0, 0],
//   [5, 2, 0, 0, 0, 0, 0, 0, 0],
//   [0, 8, 7, 0, 0, 0, 0, 3, 1],
//   [0, 0, 3, 0, 1, 0, 0, 8, 0],
//   [9, 0, 0, 8, 6, 3, 0, 0, 5],
//   [0, 5, 0, 0, 9, 0, 6, 0, 0],
//   [1, 3, 0, 0, 0, 0, 2, 5, 0],
//   [0, 0, 0, 0, 0, 0, 0, 7, 4],
//   [0, 0, 5, 2, 0, 6, 3, 0, 0],
// ];

// let isOkToCall = function(board, i, j, val) {
//     for(let l = 0;l<9;l++) {
//         if(board[i][l] === val) {
//             return false;
//         }
//     }
//     for(let t =0;t<9;t++) {
//         if(board[t][j] === val) {
//             return false;
//         }
//     }

//     let smi = Math.floor(i/3)*3;
//     let smj = Math.floor(j/3)*3;

//     for(let x =0;x<3;x++) {
//         for(let y =0;y<3;y++) {
//             if(board[x+smi][y+smj] === val){
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// let solveSudoku = function(board, i, j) {
//     if(i === 9) {
//         console.log(board);
//         return;
//     }
//     let ni =0;
//     let nj =0;
//     if(j === 8) {
//         ni = i+1;
//         nj = 0;
//     }else {
//         ni = i;
//         nj = j+1;
//     }
//     if(board[i][j] !== 0) {
//         solveSudoku(board, ni, nj);
//     }else {
//         for(let call = 1;call <=9;call++) {
//             if(isOkToCall(board,i,j,call)) {
//                 board[i][j] = call;
//                 solveSudoku(board, ni, nj);
//                 board[i][j] = 0;
//             }
//         }
//     }

// }

// solveSudoku(board, 0, 0)

const board = [
  ["3", ".", "6", "5", ".", "8", "4", ".", "."],
  ["5", "2", ".", ".", ".", ".", ".", ".", "."],
  [".", "8", "7", ".", ".", ".", ".", "3", "1"],
  [".", ".", "3", ".", "1", ".", ".", "8", "."],
  ["9", ".", ".", "8", "6", "3", ".", ".", "5"],
  [".", "5", ".", ".", "9", ".", "6", ".", "."],
  ["1", "3", ".", ".", ".", ".", "2", "5", "."],
  [".", ".", ".", ".", ".", ".", ".", "7", "4"],
  [".", ".", "5", "2", ".", "6", "3", ".", "."],
];

let isOkToCall = function (board, i, j, val) {
	for (let l = 0; l < 9; l++) {
		if (board[i][l] === val) {
			return false;
		}
	}
	for (let t = 0; t < 9; t++) {
		if (board[t][j] === val) {
			return false;
		}
	}

	let smi = Math.floor(i / 3) * 3;
	let smj = Math.floor(j / 3) * 3;

	for (let x = 0; x < 3; x++) {
		for (let y = 0; y < 3; y++) {
			if (board[x + smi][y + smj] === val) {
				return false;
			}
		}
	}
	return true;
};
let solveSudoku = function (board, i, j) {
	if (i === 9) {
		console.log(board);
		return;
	}
	let ni = 0;
	let nj = 0;
	if (j === 8) {
		ni = i + 1;
		nj = 0;
	} else {
		ni = i;
		nj = j + 1;
	}
	if (board[i][j] !== ".") {
		solveSudoku(board, ni, nj);
	} else {
		for (let call = 1; call <= 9; call++) {
			if (isOkToCall(board, i, j, call + "")) {
				board[i][j] = call + "";
				solveSudoku(board, ni, nj);
				board[i][j] = ".";
			}
		}
	}
};

solveSudoku(board, 0, 0);
