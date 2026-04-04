let coins = [186,419,83,408]
coins.sort((a,b) => a-b);

// let findMinimumCoins = function(amount) {
//     let min = Infinity;
//     let findAmt = function(amt, count, path) {
//         if(amt > amount) {
//             return;
//         }
//         if(amt === amount) {
//             min = Math.min(min, count);
//             console.log(amt, count, path)
//             return;
//         }
//         for(let i = 0;i<coins.length;i++) {
//             findAmt(amt + coins[i], count+1, path + coins[i] + ", ");
//         }
//     }
//     findAmt(0,0, "")
//     console.log(min)

// }
//optimize
let findMinimumCoins = function(amount) {
    let min = Infinity;
    let isCheck = true;
    let findAmt = function(amt, count, path) {
        if(amt > amount) {
            return;
        }
        if(amt === amount) {
            min = Math.min(min, count);
            console.log(path)
            isCheck = false
            return;
        }
        for(let i = coins.length -1;i >=0;i--) {
            if(isCheck) {
                console.log(path + coins[i] + ", ")
                findAmt(amt + coins[i], count+1, path + coins[i] + ", ");
            }
        }
    }
    findAmt(0,0, "")
    console.log(min)

}

// findMinimumCoins(6249)