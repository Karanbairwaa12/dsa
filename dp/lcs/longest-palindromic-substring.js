let longestPalindromicSubstring = function (s1, s2) {
	let m = s1.length;
	let n = s2.length;

	let getSuffix = function (m, n, s1, s2) {
		if (m === 0 || n === 0 || s1[m - 1] != s2[n - 1]) return 0;
		return 1 + getSuffix(m - 1, n - 1, s1, s2);
	};
	let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
	let max = 0;

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			if (s1[i - 1] === s2[j - 1]) {
				console.log(getSuffix(i, j, s1, s2, "hi"));
				dp[i][j] = getSuffix(i, j, s1, s2);
				max = Math.max(max, dp[i][j]);
			}
		}
	}
	console.log(dp);
	max = 0;
	let isPlindrom = function (str) {
		let l = 0;
		let r = str.length - 1;
		while (l < r) {
			if (str[l] !== str[r]) {
				return false;
			}
			l++;
			r--;
		}
		return true;
	};
	for (let i = 1; i < dp.length; i++) {
		for (let j = 1; j < dp[0].length; j++) {
			if (dp[i][j] !== 0) {
				console.log(dp[i][j], s1.substring(i - dp[i][j], i));
				if (isPlindrom(s1.substring(i - dp[i][j], i))) {
					max = Math.max(max, dp[i][j]);
				}
			}
		}
	}
	console.log(max);
	return max;
};

let longestPalindromicSubstringIterate = function (s) {
	let start = -1;
	let maxLen = 1;

	let checkPali = function (s, i, j) {
		while (i < j) {
			if (s[i] != s[j]) {
				return false;
			}
			i++;
			j--;
		}
		return true;
	};
	for (let i = 0; i < s.length; i++) {
		for (let j = i; j < s.length; j++) {
            // console.log(i, j)
			if (checkPali(s, i, j)) {
				if (j - i + 1 > maxLen) {
					start = i;
					maxLen = j - i + 1;
				}
			}
		}
	}
	return maxLen;
};

let longestPalindromicSubstringDp = function (s) {
	let dp = Array.from({length: s.length}, () => Array(s.length).fill(false))
    for(let i =0;i<s.length;i++) {
        dp[i][i] = true;
    }
    for(let i =0;i<s.length -1;i++) {
        if(s[i] === s[i+1]) {
            dp[i][i+1] = true;
        }
    }
    let maxLen = 1;
    for(let k = 3; k <= s.length;k++) {
        let i = 0;
        let j= k -1;
        while(j < s.length) {
            if(s[i] == s[j] && dp[i+1][j-1] === true) {
                dp[i][j] = true;
                maxLen = Math.max(maxLen, j - i +1)
            }else {
                dp[i][j] = false;
            }
            i++;
            j++;
        }
    }
    // console.log(dp, maxLen)
    return maxLen
};
let s1 = "cbbd";
let s2 = s1.split("").reverse().join("");

// console.log(s1, s2)
// console.log(longestPalindromicSubstring(s1, s2))
// console.log(longestPalindromicSubstringIterate(s1));
console.log(longestPalindromicSubstringDp(s1));
