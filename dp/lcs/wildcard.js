var isMatch = function(s,p) {
    let dp = Array.from({length:p.length+1}, () => Array(s.length+1).fill(false))
    let recursive = function(i,j) {
        if(i == 0) return j == 0;
        if(j == 0) {
            for(let l = 0;l < i;l++) {
                if(p[l] !== "*") {
                    return false;
                }
            }
            return true;
        }
        if(dp[i][j] !== false) return dp[i][j]
        if(p[i-1] == s[j-1] || p[i-1] == "?") {
            return dp[i][j] = recursive(i-1, j-1)
        }
        if(p[i-1] == "*") {
            return dp[i][j] = recursive(i-1, j) || recursive(i, j-1)
        }
        return dp[i][j] = false;
    }
    return recursive(p.length, s.length)
};
var isMatchTabulation = function(s,p) {
    let dp = Array.from({length:p.length+1}, () => Array(s.length+1).fill(false))
    
    for(let i =0;i<dp.length;i++) {
        for(let j = 0;j<dp[0].length;j++) {
            if(i == 0 && j ==0) {
                dp[i][j] = true;
            }else if(j ==0) {
                let find = true;
                for(let l =0;l <i;l++) {
                    if(p[l] !== "*") {
                        find = false;
                        continue;
                    }
                }
                if(find) {
                    dp[i][j] = true;
                }
                
            }else if(p[i-1] == s[j-1] || p[i-1] == "?") {
                dp[i][j] = dp[i-1][j-1];
            }else if(p[i-1] == "*") {
                dp[i][j] = (dp[i-1][j] || dp[i][j-1])
            }
        }
    }
    console.log(dp)
    // return recursive(p.length, s.length)
};


let s = "aa" 
let p = "*"
isMatch(s, p)
isMatchTabulation(s, p)