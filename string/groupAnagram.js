var isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1)
        } else {
            map.set(s[i], 1)
        }
    }
    for (let entry of map) {
        console.log("workrkr", entry)
    }

    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i]) && map.get(t[i]) > 0) {
            map.set(t[i], map.get(t[i]) - 1)
        } else {
            return false;
        }
    }
    return true;
}

// var groupAnagrams = function (strs) {
//     let i = 0;
//     let arr = []
//     let fillArr = new Array(strs.length).fill(0)
//     while (i < strs.length) {
//         fillArr[i] = 1;
//         let j = i + 1;
//         let res = [strs[i]]
//         while (j < strs.length) {
//             if (fillArr[j] === 1) {
//                 j++;
//                 continue
//             }
//             // console.log(strs[i], strs[j], "working")
//             let isAnagramTrue = isAnagram(strs[i], strs[j])
//             console.log(strs[i], strs[j], isAnagramTrue, "working")
//             if (isAnagramTrue) {
//                 res.push(strs[j])
//                 fillArr[j] = 1
//             }
//             j++;
//         }
//         arr.push(res);
//         while (fillArr[i] === 1 && i < strs.length) {
//             i++;
//         }
//     }
// };


// var groupAnagrams = function (strs) {
//     let map = new Map()
//     for (let i = 0; i < strs.length; i++) {
//         let map2 = new Map();
//         let res = "";
//         for (let j = 0; j < strs[i].length; j++) {
//             if (map2.has(strs[i][j])) {
//                 map2.set(strs[i][j], map2.get(strs[i][j]) + 1)
//             } else {
//                 map2.set(strs[i][j], 1)
//             }
//         }
//         let keyValue = ["a", "0", "b", "0", "c", "0", "d", "0", "e", "0", "f", "0", "g", "0", "h", "0", "i", "0", "j", "0", "k", "0", "l", "0", "m", "0", "n", "0", "o", "0", "p", "0", "q", "0", "r", "0", "s", "0", "t", "0", "u", "0", "v", "0", "w", "0", "x", "0", "y", "0", "z", "0"]
//         // console.log(map2)
//         for ([key, value] of map2) {

//             for (let i = 0; i < keyValue.length; i++) {
//                 if (keyValue[i] === key) {

//                     keyValue[i + 1] = String(Number(value));
//                     // console.log(keyValue[i], key, keyValue[i] === key, keyValue[i + 1])
//                 }
//             }
//             res = keyValue.join("")
//         }
//         if (map.has(res)) {
//             map.set(res, [...map.get(res), strs[i]])
//         } else {
//             map.set(res, [strs[i]])
//         }
//     }
//     let arr = []
//     for (let val of map) {
//         // console.log(val)
//         arr.push(val)
//     }

//     return arr;
// };

var groupAnagrams = function(strs) {
    let map = {}
    for(let i =0;i<strs.length;i++) {
        let word = strs[i]
        let freqArray = new Array(26).fill(0);
        for(let j =0;j<word.length;j++) {
            // console.log(word[j], word[j].codePointAt(0) - 'a'.codePointAt(0))
            let idx = word[j].codePointAt(0) - 'a'.codePointAt(0);
            freqArray[idx] = freqArray[idx] + 1;
            // freqArray[word[j].codePointAt(0) - 'a'.codePointAt(0)]++;
        }
        let res = ""
        for(let k =0;k<freqArray.length;k++) {
            res = res + String.fromCharCode(97 + k) + freqArray[k]
        }
        console.log(res, freqArray)

        if(!map[res]) {
            map[res] = [word]
        }else {
            map[res].push(word)
        }
    }

    console.log(map)
    return [...Object.values(map)]
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat", "ac", "bd", "aac", "bbd", "aacc", "bbdd", "acc", "bdd"])