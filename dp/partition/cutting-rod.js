let cuttingRod = function(price) {
    let dp = new Array(price.length).fill(0)

    for(let i =1;i<price.length;i++) {
        let val = price[i]
        for(let k = 1;k<i;k++) {
            val = Math.max(val, dp[k] + price[i -k])
        }
        
        dp[i] = val;
    }

    console.log(dp)
}

let price =  [0, 3]
cuttingRod(price)