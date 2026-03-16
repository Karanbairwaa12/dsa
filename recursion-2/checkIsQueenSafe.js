let matrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
let m = matrix.length;
let n = matrix[0].length;
let isSafe = function(i, j) {
    let flag = true;
    let left = -1;
    let right = 1;
    for(let k =i-1;k>0;k--) {
        if(matrix[k][j] === 1) {
            flag = false;
            break;
        }else if(j + left >=0 && matrix[k][j+left] === 1) {
            flag = false;
            break;
        }else if(j + right < m && matrix[k][j+ right] === 1) {
            flag = false;
            break;
        }
        left--;
        right++;
    }
    console.log(flag)
}
isSafe(2,2)