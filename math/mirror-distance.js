var mirrorDistance = function(n) {
    let val = 0;
    while(n != 0) {
        val = val*10 + n%10
        n = Math.floor(n/10);
    }
    console.log(val, "val")
};
mirrorDistance(123)