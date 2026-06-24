var isMatch = function(s, p) {
    let dp = Array.from({length:p.length+1}, () => Array(s.length + 1).fill(-1))
    let recursive = function(i, j) {
        if(i ==0) return j == 0;
        if (i == 0) return false;
        if (j == 0) {
            // Check if remaining pattern can match empty string
            // Pattern like a*b*c* can match empty string
            if (p[i-1] == '*') {
                return recursive(i-2, j);
            }
            return false;
        }
        if(dp[i][j] != -1) return dp[i][j]
        if(p[i-1]== s[j-1] || p[i-1] == ".") {
            return dp[i][j] = recursive(i-1, j-1)
        }

        if (p[i-1] == '*') {
            // Match zero occurrences of previous character
            let matchZero = recursive(i-2, j);
            
            // Match one or more occurrences if previous char matches current
            let matchOneOrMore = false;
            if (p[i-2] == s[j-1] || p[i-2] == '.') {
                matchOneOrMore = recursive(i, j-1);
            }
            
            return dp[i][j] = matchZero || matchOneOrMore;
        }

        return dp[i][j] =  false;
    }
    console.log(recursive(p.length, s.length))
};
let s = "ab" 
let p = ".*"
isMatch(s, p)