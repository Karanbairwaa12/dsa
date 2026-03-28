let printNQueen = function (n) {
    let matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let res = []
    let isSafe = function(row, col) {
        for(let i = row -1;i>=0;i--) {
            if(matrix[i][col] === 1) {
                return false;
            }
        }
        for(let i = row -1, j = col -1; i >= 0 && j >= 0;i--, j--) {
            if(matrix[i][j] === 1) {
                return false;
            }
        }
        for(let i = row -1, j = col +1; i >= 0 && j < n;i--, j++) {
            if(matrix[i][j] === 1) {
                return false;
            }
        }
        return true;
    }
    let recursion = function (row, path) {
        if (row === n) {
            // console.log(path);
            let newArr = []
            for(let i =0;i<matrix.length;i++) {
                let arr = ""
                for(let j =0;j<matrix[0].length;j++) {
                    if(matrix[i][j] === 1) {
                        arr += "Q"
                    }else {
                        arr += "."
                    }
                }
                newArr.push(arr)
            }
            res.push(newArr)
            return;
        }
        for (let i = 0; i < n; i++) {
            if (isSafe(row, i)) {
                matrix[row][i] = 1;
                recursion(row + 1, path + row + "-" + i + ", ")
                matrix[row][i] = 0;
            }

        }
    }
    recursion(0, "")
    // console.log(res)
    return res;
}
printNQueen(4)