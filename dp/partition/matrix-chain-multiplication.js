const matrixMultiplication = function(arr) {
    let dp = Array.from({length: arr.length +1},() => Array(arr.length +1).fill(-1))
    let recursive = function(i,j) {
        if(i +1 == j) return 0;
        if(dp[i][j] != -1) return dp[i][j]
        let val =Infinity;
        for(let k = i+1;k<j;k++) {
            val = Math.min(val, recursive(i, k) + recursive(k, j) + arr[i]*arr[k]*arr[j])
        }
        dp[i][j] = val;
        return val;
    }
    recursive(0, arr.length -1)
}
let arr = [ 2, 1, 3, 4 ];
let res = matrixMultiplication(arr);