let countSub = function(str) {
    // let dp = Array.from({length: 3}, () => Array(str.length + 1).fill(0));

    // for(let i = 0;i<dp.length;i++) {
    //     let k =0;
    //     for(let j =1;j<dp[0].length;j++) {
    //         if(i ==0) {
    //             if(str[k] === 'a') {
    //                 dp[i][j] = 2*dp[i][j-1] + 1;
    //             }else {
    //                 dp[i][j] = dp[i][j-1]
    //             }
    //         }else if(i == 1) {
    //             if(str[k] === 'b') {
    //                 dp[i][j] = 2*dp[i][j-1] + dp[i-1][j-1]
    //             }else {
    //                 dp[i][j] = dp[i][j-1]
    //             }
    //         }else {
    //             if(str[k] === 'c') {
    //                 dp[i][j] = 2*dp[i][j-1] + dp[i-1][j-1]
    //             }else {
    //                 dp[i][j] = dp[i][j-1]
    //             }
    //         }
    //         k++;
    //     }
    // }
    // console.log(dp)

    //or
    let a = 0;
    let ab = 0;
    let abc = 0

    for(let i =0;i<str.length;i++) {
        let ch = str[i];
        if(ch == "a") {
            a = 2*a + 1;
        }else if(ch == 'b') {
            ab = 2*ab + a;
        }else {
            abc = 2*abc + ab;
        }
    }
    console.log(abc)
}
countSub("abcabc");