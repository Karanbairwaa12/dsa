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

//  
reverseWithKElement("abcdefghijkl", 2)


// console.log("karanfds".slice(0,4))

