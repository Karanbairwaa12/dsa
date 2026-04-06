
// Input: tasks = ["A","A","A", "B","B","B"], n = 3

// Output: 10
var leastInterval = function (tasks, n) {
    let words = new Array(26).fill(0);
    let maxFreq = 0;
    for(let i =0;i<tasks.length;i++) {
        words[tasks[i].codePointAt(0) - 65]++;
        maxFreq = Math.max(maxFreq,  words[tasks[i].codePointAt(0) - 65])
    }
    let nChar = 0;
    for(let i =0;i<words.length;i++) {
        if(words[i] === maxFreq) {
            nChar++;
        }
    }
    // console.log((n+1)*(maxFreq -1) + nChar)
    return Math.max((n+1)*(maxFreq -1) + nChar, tasks.length)
};
leastInterval(["A","C", "C","A","B","D","B"],1 )

