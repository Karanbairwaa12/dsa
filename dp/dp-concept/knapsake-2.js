const CalculateKnapSake = function(l, v, w) {
    let n = w.length;
    let recursive = function(i, cap) {
        if(i < 0 || cap == 0) return 0;
        let val = 0;

        val = recursive(i-1, cap)
        if(w[i] <= cap) {
            val = Math.max(val, v[i] + recursive(i-1, cap - w[i]))
        }
        return val;
    }

    console.log(recursive(n-1, l))

}

const CalculateKnapSakeMemo = function(l, v, w) {
    let n = w.length;
    let dp = new Array(n).fill(-1)
    let recursive = function(i, cap) {
        if(i < 0 || cap == 0) return 0;

        if(dp[i] !== -1) return dp[i]
        let val = 0;
        if(w[i] <= cap) {
            val = Math.max(val, v[i] + recursive(i+1, cap - w[i]))
        }
        dp[i] = val;
        return val;
    }

    console.log(recursive(n-1, l))

}

const CalculateKnapSakeTabulation = function(l, v, w) {
    let n = w.length;
    let dp = Array.from({length:w.length +1}, () => Array(l+1).fill(0))

    for(let i =1;i<dp.length;i++) {
        for(j = w[i-1];j<dp[0].length;j++) {
            dp[i][j] = Math.max(dp[i-1][j], v[i-1] + dp[i-1][j-w[i-1]]);
        }
    }
    console.log(dp)
    // return dp[n+1][l+1]

}
let W = 4;
let value = [1,2,3]
let weight = [4,5,1]
// CalculateKnapSake(W, value, weight)
CalculateKnapSakeTabulation(W, value, weight)
