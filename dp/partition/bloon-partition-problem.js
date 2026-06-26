
let countWays = function(s) {
    let bol = ""
    let op = ""
    let filter = function(s) {
        for(let i =0;i<s.length;i++) {
            if(s[i] == 'F' || s[i] == 'T') {
                op+=s[i]
            }else {
                boll+=s[i]
            }
        }
    }
    filter(s)

    let check = function(b1, o, b2) {
        if()
    }
    let recursive = function(i) {

        let val = false
        for(let k = i+1;k<bol.length;k++) {
            let val2 = false;
            for(let o = 0;o<op.length;o++) {
                val2 = val2 || check(i, o, k)
            }
            val = val || val2
        }
    }
    recursive(0)
}
const s = "T|T&F^T";
console.log(countWays(s));