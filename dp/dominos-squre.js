// let dominosSqure = function(n) {
//     if(n <0) {
//         return 0 ;
//     }
//     if(n === 0) return 1;

//     return dominosSqure(n-1) + dominosSqure(n-2)
// }

let dominosSqure = function(n) {
    let dp = new Array(n+1).fill(0)
    dp[1] = 1;
    dp[2] = 2;
    for(let i =3;i<dp.length;i++) {
        dp[i] = dp[i-1] + dp[i-2] + 2
    }
    return dp[dp.length -1]
}



console.log(dominosSqure(3))