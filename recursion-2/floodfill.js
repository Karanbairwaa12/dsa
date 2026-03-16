let matrix = [[0, 0, 0], [0, 1, 0], [0, 0, 0]]

let floodFill = function (i, j, m, n) {
    let result = []
    let dummy = Array.from({length: m}, () => Array(n).fill(0));
    // console.log(dummy, "dummy")
    let recursion = function (i, j, path) {
        console.log(i , j, m, n)
        if(matrix[i][j] === 1 || dummy[i][j] === 1) {
            return;
        }
        if(i === m-1 && j === m-1) {
            result.push(path);
            return;
        }
        dummy[i][j] = 1;
        if (i > 0) {
            recursion(i - 1, j, "t" + path);
        }
        if (i < m-1) {
            recursion(i + 1, j, "d" + path);
        }
        if (j > 0) {
            recursion(i, j - 1, "l" + path);
        }
        if (j < n-1) {
            recursion(i, j + 1, "r" + path);
        }
        dummy[i][j] = 0;
    }
    recursion(i, j, "")
    console.log(result);
}
floodFill(0, 0, 3, 3)