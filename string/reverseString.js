var reverse = function(res) {
    let str = res.split("")
    let i =0;
    let j = str.length -1;
    while(i<j) {
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp
        i++;
        j--;
    }
    const val = str.join("")
    // console.log(val)
    return val
}

var reverseStr = function(s, k) {
    let res = "";
    res = res + reverse(s.slice(0,k)) + s.slice(k)
    let tail = 2*k;
    console.log(tail)
    let count = 0;
    for(let j = k;j < res.length;j++) {
        count++;
       if(count === tail) {
        // console.log(j)
        res = res.slice(0, j - k + 1) + reverse(res.slice(j-k+1, j+1)) + res.slice(j+1)
        count= 0;
       }
    }
    console.log(res)
    
};

var reverseWithKElement = function(s,k) {
    let j = 0;
    let res = ""
    for(let i =0;i<s.length;i++) {
        console.log(i, j, Math.floor(i+1/2*k))
        if(Math.floor(i+1/2*k) === 1){
            res = res + reverse(s.slice(j, j+k))+ s.slice(j+k, i+1)
            j = i +1;
        }

        
    }
}
reverseWithKElement("abcdefg", 2)


// console.log("karanfds".slice(0,4))

