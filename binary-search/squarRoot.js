var mySqrt = function(x) {
    if(x === 0) return x;
    let guess = x/2;
    let tolerance = 0.000001

    while(Math.abs(guess*guess - x) > tolerance) {
        guess = (guess + x/guess)/2
    }
    return guess
};

console.log(mySqrt(25))