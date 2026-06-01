const BookShopRecursion = function (x, pr, pg) {
    let n = pr.length;
    let recursion = function(i,cap) {
        console.log(i, cap)
        if(i < 0 || cap < 0) {
            return 0;
        }
        let val = 0;

        val = recursion(i - 1, cap);
        if(pr[i] <= cap) {
            val = Math.max(val, pg[i] + recursion(i-1, cap - pr[i]))
        }
        return val;
    }

    console.log(recursion(n-1,x))
};

const BookShopRecursionMemo = function (x, pr, pg) {
    let n = pr.length;
    let dp = Array.from({length: n}, () => Array(x + 1).fill(-1))
    let recursion = function(i,cap) {
        // console.log(i, cap)
        if(i < 0 || cap < 0) {
            return 0;
        }
        if(dp[i][cap] !== -1) return dp[i][cap]

        let val = 0;

        val = recursion(i - 1, cap);
        if(pr[i] <= cap) {
            val = Math.max(val, pg[i] + recursion(i-1, cap - pr[i]))
        }

        dp[i][cap ] = val;
        return val;
    }


    console.log(recursion(n-1,x))
        console.log(dp)
};



let x = 10;
let price = [4, 8, 5, 3];
let pages = [5, 12, 8, 1];

// BookShopRecursion(x, price, pages);
BookShopRecursionMemo(x, price, pages);
