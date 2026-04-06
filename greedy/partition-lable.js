// 763. Partition Labels

// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. For example, the string "ababcc" can be partitioned into ["abab", "cc"], but partitions such as ["aba", "bcc"] or ["ab", "ab", "cc"] are invalid.

// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

// Return a list of integers representing the size of these parts.

 

// Example 1:

// Input: s = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits s into less parts.
// Example 2:

// Input: s = "eccbbbbdec"
// Output: [10]
 

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.
// let mergeRange = function(arr) {
//     for(let i =1;i<arr.length;i++) {
//         if(arr[i][1])
//     }
// }

var mergeRange = function(arr) {
    arr.sort((a,b) => a[0] - b[0])
    // console.log(arr)
    let f = arr[0][0]
    let l = arr[0][1]
    let idx = 0;
    for(let i =0;i<arr.length;i++) {
        if(arr[i][0] != -1) {
            f = arr[i][0];
            l = arr[i][1];
            idx = i;
            break;
        }
    }
    // console.log(arr)
    let md = []
    
    for(let i =idx + 1;i<arr.length;i++) {
        // console.log(f, l)
        if(arr[i][0] > l) {
            l = Math.max(l, arr[i-1][1]);
            md.push([f, l]);
            f = arr[i][0];
            l = arr[i][1]
        }else {
            l = Math.max(l, arr[i][1])
        }
    }
    md.push([f, l])
    return md;
};
// var partitionLabels = function(s) {
//     let letters = new Array(26).fill([-1,-1])
//     for(let i = 0;i<s.length;i++) {
//         let idx= s[i].codePointAt(0) - 'a'.codePointAt(0);
//         if(letters[idx][0] === -1) {
//             letters[idx] = [i, i]
//         }else {
//             letters[idx][1] = i;
//         }
//     }
//     // let mergModified = []
//     // for(let i =0;i<letters.length;i++) {
//     //     if(letters[i][0] !== -1) {
//     //         mergModified.push(letters[i])
//     //     }
//     // }

//     // console.log(mergModified)
//     let range = mergeRange(letters)
//     for(let i =0;i<range.length;i++) {
//         range[i] = range[i][1] - range[i][0] + 1;
//     }
//     // console.log(range)
//     return range;
// };

var partitionLabels = function(s) {
    let res = [];
    let last = new Map();
    for(let i=0;i<s.length;i++) {
        last.set(s[i], i);
    }
    let maxIndex = 0, count=0;
    for(let i=0;i<s.length;i++) {
        maxIndex = Math.max(maxIndex, last.get(s[i]));
        count++;
        if (maxIndex <= i) {
            res.push(count);
            count = 0;
        }
    }
    console.log(res)
    return res;
};
partitionLabels("eccbbbbdec")