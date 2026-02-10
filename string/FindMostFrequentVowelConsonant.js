var maxFreqSum = function (s) {
    let obj = {}
    let max = 0;
    let maxConst = 0;
    for (let i = 0; i < s.length; i++) {
        if (["a", "e", "i", "o", "u"].includes(s[i])) {
            if (s[i] in obj) {
                obj[s[i]] = obj[s[i]] + 1
                max = Math.max(obj[s[i]], max)
            } else {
                obj[s[i]] = 1;
                max = 1;
            }
        }else {
            if(s[i] in obj) {
                obj[s[i]] = obj[s[i]] + 1
                maxConst = Math.max(obj[s[i]], maxConst)
            } else {
                obj[s[i]] = 1;
                maxConst = 1
            }
        }

    }

    // console.log(obj, max, maxConst)
    return max + maxConst

};


maxFreqSum("successes")