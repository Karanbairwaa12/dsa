var longestStrChain = function(words) {
    words.sort((a, b) => a.length - b.length);

    let dp = new Array(words.length).fill(0);
    dp[0] = 1;

    for(let i = 1;i<words.length;i++) {
        let max = 0;
        for(let j = 0;j<i;j++) {
            if(words[j].length + 1 === words[i].length && isPredecessor(words[j], words[i])) {
                max = Math.max(max, dp[j])
            }
        }
        dp[i] = max + 1;
    }
    return Math.max(...dp);
};

let isPredecessor = function (s1, s2) {
    let count = 0;
    let i =0;
    let j = 0;

    while(i < s1.length && j < s2.length) {
        if(s1[i] !== s2[j]) {
            count++;
            j++;
        }else {
            i++;
            j++;
        }

        if(count === 2) {
            return false;
        }
    }
    return true;
}
const words = ["abcd","dbqca"]
console.log(longestStrChain(words))