var isAnagram = function(s, t) {
    // let map = new Map();
    // for(let i =0;i<s.length;i++) {
    //     if(map.has(s[i])) {
    //         map.set(s[i], map.get(s[i]) + 1 )
    //     }else {
    //         map.set(s[i], 1);
    //     }
    // } 
    
    // for(let entry of map) {
    //     console.log(entry)
    // }

    // for(let i =0;i<t.length;i++) {
    //     if(map.has(s[i]) && map.get(s[i]) >=0) {
    //         map.set(s[i], map.get(s[i]) -1)
    //     }else {
    //         return false;
    //     }
    // }

    // for(let entry of map.values()) {
    //     if(entry !== 0) {
    //         return false;
    //     }
    // }
    // return true;

    let arr = new Array(26).fill(0)

    for(let i =0;i<s.length;i++) {
        let charIndex = s[i].codePointAt(0) - 'a'.codePointAt(0)
        arr[charIndex]++;
    }

   

    for(let i =0;i<t.length;i++) {
        let charIndex = t[i].codePointAt(0) - 'a'.codePointAt(0)
        if(arr[charIndex] === 0) {
            return false;
        }
        arr[charIndex]--;
    }

     for(let val of arr) {
        console.log(val)
        if(val !== 0) {
            return false;
        }
    }
    return true;
};

console.log(isAnagram("anagram", "nagaram"))