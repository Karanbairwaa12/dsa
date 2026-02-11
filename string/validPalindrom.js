var validPalindrome = function (s) {
    let res = ""
    for (let i = 0; i < s.length; i++) {
        // let code= s[i].charCodeAt(0)
        // if((code <= 90 && code >=65) || (code <= 122 && code >= 97) || (code <= 57 && code >= 48)) {
        //     res = res + s[i]
        // }

        let ch = s[i]
        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z') || (ch >= '1' && ch <= '9')) {
            res = res + ch
        }
    }
    res = res.toLowerCase()
    let i = 0;
    let j = res.length - 1;
    let toggle = true
    while (i < j) {
        console.log(i, j, res[i], res[j])
        if (res[i] !== res[j]) {
            toggle = false;
        }
        j--;
        i++;
    }
    return toggle
}

validPalindrome("A man, a plan, a canal: Panama")