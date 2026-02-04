function armstrongNumber(n) {
    debugger
    if(n === 0) return false;
    if(n < 0) {
        n = Math.abs(n)
    }
    let x = n;
    let count = 0;
    while(x > 0) {
        x = Math.floor(x/10)
        count++;
    }
    x = n;
    let val = 0
    while(x > 0) {
        let rem = x %10;
        x = Math.floor(x/10)
        val = val + Math.pow(rem, count)
    }
    console.log(count, val)
    return val === n;
}
console.log("hi", Math.pow(0,0))
console.log(armstrongNumber(0))