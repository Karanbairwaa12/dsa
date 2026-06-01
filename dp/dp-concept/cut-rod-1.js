const CuttingRode = function(nums) {
    let n =nums.length;
    let dp = new Array(n).fill(-1)
    let recursive = function(i) {
        if(i == 0) return 0;
        if(dp[i -1] !== -1) return dp[i -1]
        let ans = 0;
        for(let j = 1;j <= i;j++) {
            ans = Math.max(ans, nums[j-1] + recursive(i -j))
        }

        dp[i-1] = ans;
        return ans;
    }
    console.log(recursive(n))
}

const CuttingRodeTabulation = function(nums) {
    let n =nums.length;
    let dp = new Array(n+1).fill(0)
    
    for(let i = 1;i<=n;i++) {
        for(let j = 1;j<=i;j++) {
            dp[i] = Math.max(dp[i], nums[j-1] + dp[i-j])
        }
    }
    console.log(dp)
}

const price =  [1, 5, 8, 9, 10, 17, 17, 20]
CuttingRode(price)
CuttingRodeTabulation(price)